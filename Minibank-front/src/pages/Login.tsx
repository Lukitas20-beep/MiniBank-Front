import {
    Box,
    Heading,
    Input,
    Button,
    VStack,
    Text,
    HStack,
    Checkbox,
    Image,
    Flex,
    useColorModeValue,
    useToast,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios, { isAxiosError } from 'axios';
import loginImage from '/Bank.png';

// Função de validação de CPF (verifica se tem 11 dígitos numéricos)
function isValidCpf(cpf: string): boolean {
    return /^\d{11}$/.test(cpf.replace(/\D/g, ''));
}

export default function Login() {
    const navigate = useNavigate();
    const toast = useToast();
    
    // Estados para os campos e UI
    const [identifier, setIdentifier] = useState(''); // Estado unificado para CPF ou usuário do gerente
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    function handleFocus(fieldName: string) {
        setFocusedField(fieldName);
    }

    function handleBlur() {
        setFocusedField(null);
    }
    
    // Função para formatar o CPF enquanto o usuário digita
    function formatCpf(value: string) {
        return value
            .replace(/\D/g, '') // Remove tudo que não for dígito
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    
    // Agora, esta função formata o input como CPF apenas se contiver números,
    // permitindo que texto como "gerente" seja digitado livremente.
    function handleIdentifierChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        if (/^[\d.-]*$/.test(value)) { // Se o usuário está digitando números, pontos ou traços
            setIdentifier(formatCpf(value));
        } else {
            setIdentifier(value);
        }
    }

    async function handleLogin() {
        // --- DETECÇÃO E VALIDAÇÃO ---
        // Verifica se o identificador parece um CPF (após limpar, contém apenas números)
        const isClienteLogin = /^\d+$/.test(identifier.replace(/\D/g, ''));
        
        if (!identifier) {
            toast({ title: 'Campo obrigatório', description: 'Por favor, preencha o campo de CPF ou Usuário.', status: 'warning', duration: 3000, isClosable: true });
            return;
        }
        if (isClienteLogin && !isValidCpf(identifier)) {
            toast({ title: 'CPF Inválido', description: 'O CPF deve conter 11 dígitos numéricos.', status: 'warning', duration: 3000, isClosable: true });
            return;
        }
        if (!password) {
            toast({ title: 'Campo obrigatório', description: 'Por favor, preencha a senha.', status: 'warning', duration: 3000, isClosable: true });
            return;
        }
        // --- FIM DA VALIDAÇÃO ---

        setIsLoading(true);

        // Prepara o 'username' para a autenticação: CPF limpo para cliente, texto direto para gerente
        const usernameForAuth = isClienteLogin ? identifier.replace(/\D/g, '') : identifier;

        try {
            // A chamada para a API permanece a mesma
            const response = await axios.get(
                'http://18.230.232.119:8081/login',
                {
                    auth: {
                        username: usernameForAuth,
                        password: password
                    }
                }
            );
            
            // Lógica de sucesso
            if (response.status === 200 || response.status === 201) {
                const userData = response.data;
                localStorage.setItem('currentUserData', JSON.stringify(userData));

                toast({ title: 'Login realizado com sucesso!', description: userData.message || "Bem-vindo!", status: 'success', duration: 3000, isClosable: true });

                // --- ALTERAÇÃO NO REDIRECIONAMENTO ---
                if (userData.userType === 'manager') {
                    navigate('/manager'); // Redireciona gerente para /manager
                } else {
                    navigate('/dashboard'); // Redireciona cliente para /dashboard
                }
            } else {
                toast({ title: 'Falha no login', description: `Resposta inesperada do servidor (Status: ${response.status}).`, status: 'error', duration: 4000, isClosable: true });
            }

        } catch (error) {
            // Lógica de erro (mantida)
            let errorMessage = 'Ocorreu um erro ao tentar fazer login.';
            if (isAxiosError(error)) {
                if (error.response) {
                    const { data, status } = error.response;
                    if (status === 401) {
                        errorMessage = data?.error || data?.message || 'Usuário ou Senha inválidos.';
                    } else {
                        errorMessage = `Erro ${status}: Falha na comunicação.`;
                    }
                } else {
                    errorMessage = 'Não foi possível conectar ao servidor. Verifique sua rede ou as configurações de CORS no backend.';
                }
            }
            toast({ title: 'Falha no login', description: errorMessage, status: 'error', duration: 5000, isClosable: true });
        } finally {
            setIsLoading(false);
        }
    }

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Flex minH="100vh" bg={useColorModeValue('gray.900', 'gray.800')} color="white" align="center" justify="center" px={4}>
            <Flex w="full" maxW="165vh" boxShadow="lg" borderRadius="lg" overflow="hidden" gap={14}>
                <Box w="50%" bg="gray.800" display={{ base: 'none', md: 'block' }}>
                    <Image src={loginImage} alt="Banco" objectFit="cover" h="100%" w="100%" borderRadius="md" />
                </Box>
                <Box w={{ base: '100%', md: '50%' }} p={10} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                    <Heading mb={6} textAlign="center">
                        <Text as="span" color="white">Mini</Text>
                        <Text as="span" color="#008000">BANK</Text>
                    </Heading>
                    <VStack spacing={4} align="stretch" w="100%" maxW="sm">
                        {/* O SELECT FOI REMOVIDO */}

                        {/* O INPUT AGORA É GENÉRICO */}
                        <Input
                            placeholder="CPF ou Usuário Gerente"
                            type="text"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'identifier' ? 'white' : 'black'}
                            onFocus={() => handleFocus('identifier')}
                            onBlur={handleBlur}
                            value={identifier}
                            onChange={handleIdentifierChange}
                            maxLength={14} // Mantém o maxLength para o CPF, não afeta "gerente"
                        />
                        <InputGroup size="md">
                            <Input
                                placeholder="Senha"
                                type={showPassword ? 'text' : 'password'}
                                variant="filled"
                                focusBorderColor="#008000"
                                _focus={{ borderColor: '#008000' }}
                                _hover={{ borderColor: '#008000' }}
                                color={focusedField === 'senha' ? 'white' : 'black'}
                                onFocus={() => handleFocus('senha')}
                                onBlur={handleBlur}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility} variant="ghost" _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }}>
                                    {showPassword ? <ViewOffIcon color="gray.500" /> : <ViewIcon color="gray.500" />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <HStack justify="space-between">
                            <Checkbox size="sm" colorScheme="green">Lembre-me</Checkbox>
                        </HStack>
                        <Button bg="#008000" color="white" _hover={{ bg: '#006400' }} width="100%" onClick={handleLogin} isLoading={isLoading}>
                            Login
                        </Button>
                        <Button variant="outline" borderColor="#008000" color="#008000" _hover={{ bg: '#008000', color: 'white' }} width="100%" onClick={() => navigate('/register')}>
                            Cadastrar-se
                        </Button>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );
}
