import {
    Box,
    Heading,
    Input,
    Button,
    VStack,
    Text,
    HStack,
    Image,
    Flex,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import registerImage from '/Bank.png';

export default function Register() {
    const navigate = useNavigate();
    const toast = useToast();

    // Estados para guardar os dados que serão enviados para a API
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cpf, setCpf] = useState('');

    // Lógica de UI original mantida
    const [focusedField, setFocusedField] = useState<string | null>(null);

    // Função que envia os dados para o back-end
    async function handleRegister() {
        if (!nome || !cpf || !endereco || !email || !senha) {
            toast({
                title: 'Erro', description: 'Todos os campos, exceto celular, são obrigatórios.',
                status: 'warning', duration: 4000, isClosable: true,
            });
            return;
        }

        setIsLoading(true);
        const cpfOnlyNumbers = cpf.replace(/\D/g, ''); // Limpa o CPF para envio

        try {
            // =======================================================================
            // ALTERAÇÃO PRINCIPAL AQUI: A URL FOI ATUALIZADA
            // =======================================================================
            await axios.post('https://18.230.232.119:8081/create', {
                nome, cpf: cpfOnlyNumbers, endereco, email, senha
            });

            toast({
                title: 'Cadastro realizado com sucesso!', description: 'Você será redirecionado para o login.',
                status: 'success', duration: 3000, isClosable: true,
            });
            setTimeout(() => navigate('/'), 2000);

        } catch (error: any) {
            const errorMessage = error.response?.data?.error || 'Ocorreu um erro inesperado.';
            toast({
                title: 'Falha no cadastro', description: errorMessage,
                status: 'error', duration: 5000, isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    }

    // Funções de UI mantidas
    function formatCpf(value: string) {
        const onlyNums = value.replace(/\D/g, '');
        return onlyNums
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }

    function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCpf(formatCpf(e.target.value));
    }

    function handleFocus(fieldName: string) {
        setFocusedField(fieldName);
    }

    function handleBlur() {
        setFocusedField(null);
    }

    return (
        <Flex
            minH="100vh"
            bg={useColorModeValue('gray.900', 'gray.800')}
            color="white"
            align="center"
            justify="center"
            px={4}
        >
            <Flex
                w="full"
                maxW="165vh"
                boxShadow="lg"
                borderRadius="lg"
                overflow="hidden"
                gap={14}
            >
                {/* Lado esquerdo com imagem */}
                <Box w="50%" bg="gray.800" display={{ base: 'none', md: 'block' }}>
                    <Image src={registerImage} alt="Banco" objectFit="cover" h="100%" w="100%" borderRadius="md" />
                </Box>

                {/* Lado direito com o formulário */}
                <Box w={{ base: '100%', md: '50%' }} p={10} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                    <Heading mb={6} textAlign="center">
                        <Text as="span" color="white">Cadastre-se e ganhe</Text>
                        <Text as="span" color="#008000"> R$ 50,00</Text>
                    </Heading>

                    <VStack spacing={4} align="stretch" w="100%" maxW="sm">
                        {/* INPUTS CONECTADOS AOS ESTADOS */}
                        <Input
                            placeholder="Nome Completo"
                            variant="filled"
                            focusBorderColor="#008000"
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'nome' ? 'white' : 'black'}
                            onFocus={() => handleFocus('nome')}
                            onBlur={handleBlur}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Input
                            placeholder="CPF"
                            variant="filled"
                            value={cpf}
                            onChange={handleCpfChange}
                            maxLength={14}
                            focusBorderColor="#008000"
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'cpf' ? 'white' : 'black'}
                            onFocus={() => handleFocus('cpf')}
                            onBlur={handleBlur}
                        />
                        <Input
                            placeholder="Endereço"
                            variant="filled"
                            type="text"
                            focusBorderColor="#008000"
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'endereco' ? 'white' : 'black'}
                            onFocus={() => handleFocus('endereco')}
                            onBlur={handleBlur}
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            variant="filled"
                            focusBorderColor="#008000"
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'email' ? 'white' : 'black'}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="Senha (mínimo 6 caracteres)"
                            type="password"
                            variant="filled"
                            focusBorderColor="#008000"
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'senha' ? 'white' : 'black'}
                            onFocus={() => handleFocus('senha')}
                            onBlur={handleBlur}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <Button
                            bg="#008000"
                            color="white"
                            _hover={{ bg: '#006400' }}
                            width="100%"
                            onClick={handleRegister}
                            isLoading={isLoading}
                        >
                            Cadastrar
                        </Button>

                        <HStack justify="space-between" w="100%" mt={4}>
                            <Button
                                variant="outline" borderColor="#008000" color="#008000"
                                _hover={{ bg: '#008000', color: 'white' }}
                                onClick={() => navigate('/')}
                            >
                                Voltar
                            </Button>
                            <Button
                                variant="outline" borderColor="#008000" color="#008000"
                                _hover={{ bg: '#008000', color: 'white' }}
                                onClick={() => navigate('/')}
                            >
                                Já tenho conta
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );
}