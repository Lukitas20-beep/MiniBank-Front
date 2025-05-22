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
    Select,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import registerImage from '/Bank.png'

export default function Register() {
    const navigate = useNavigate()
    const [cpf, setCpf] = useState('')
    const [userType, setUserType] = useState<'cliente' | 'gerente'>('cliente')
    const [focusedField, setFocusedField] = useState<string | null>(null)

    function formatCpf(value: string) {
        const onlyNums = value.replace(/\D/g, '')
        const formatted = onlyNums
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
        return formatted
    }

    function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setCpf(formatCpf(value))
    }

    function handleFocus(fieldName: string) {
        setFocusedField(fieldName)
    }

    function handleBlur() {
        setFocusedField(null)
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
                <Box
                    w="50%"
                    bg="gray.800"
                    display={{ base: 'none', md: 'block' }}
                >
                    <Image
                        src={registerImage}
                        alt="Banco"
                        objectFit="cover"
                        h="100%"
                        w="100%"
                        borderRadius="md"
                    />
                </Box>

                {/* Lado direito com o formulário */}
                <Box
                    w={{ base: '100%', md: '50%' }}
                    p={10}
                    display="flex"
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading mb={6} textAlign="center">
                        <Text as="span" color="white">
                            Cadastre-se e ganhe
                        </Text>
                        <Text as="span" color="#008000">
                            R$ 50,00
                        </Text>
                    </Heading>

                    <VStack spacing={4} align="stretch" w="100%" maxW="sm">
                        <Input
                            placeholder="Nome Completo"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'nome' ? 'white' : 'black'} // Alterar cor do texto conforme o foco
                            onFocus={() => handleFocus('nome')} // Definir o foco para esse campo
                            onBlur={handleBlur} // Remover o foco
                        />
                        <Input
                            placeholder="CPF"
                            variant="filled"
                            value={cpf}
                            onChange={handleCpfChange}
                            maxLength={14}
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'cpf' ? 'white' : 'black'} // Alterar cor do texto conforme o foco
                            onFocus={() => handleFocus('cpf')} // Definir o foco para esse campo
                            onBlur={handleBlur} // Remover o foco
                        />
                        <Input
                            placeholder="Endereço"
                            variant="filled"
                            type="text"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'endereco' ? 'white' : 'black'} // Alterar cor do texto conforme o foco
                            onFocus={() => handleFocus('endereco')} // Definir o foco para esse campo
                            onBlur={handleBlur} // Remover o foco
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'email' ? 'white' : 'black'} // Alterar cor do texto conforme o foco
                            onFocus={() => handleFocus('email')} // Definir o foco para esse campo
                            onBlur={handleBlur} // Remover o foco
                        />
                        <Input
                            placeholder="Celular"
                            type="tel"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'celular' ? 'white' : 'black'} // Alterar cor do texto conforme o foco
                            onFocus={() => handleFocus('celular')} // Definir o foco para esse campo
                            onBlur={handleBlur} // Remover o foco
                        />

                        <Button
                            bg="#008000"
                            color="white"
                            _hover={{ bg: '#006400' }}
                            width="100%"
                            onClick={() => {
                                // Aqui você pode adicionar a lógica de registro usando o valor de `userType`
                                console.log('Tipo de usuário selecionado:', userType)
                                navigate('/login')
                            }}
                        >
                            Cadastrar
                        </Button>

                        <HStack justify="space-between" w="100%" mt={4}>
                            <Button
                                variant="outline"
                                borderColor="#008000"
                                color="#008000"
                                _hover={{ bg: '#008000', color: 'white' }}
                                onClick={() => navigate('/')}
                            >
                                Voltar
                            </Button>
                            <Button
                                variant="outline"
                                borderColor="#008000"
                                color="#008000"
                                _hover={{ bg: '#008000', color: 'white' }}
                                onClick={() => navigate('/login')}
                            >
                                Já tenho conta
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    )
}