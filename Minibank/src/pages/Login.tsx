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
    useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import loginImage from '/Bank.png'

export default function Login() {
    const navigate = useNavigate()
    const [focusedField, setFocusedField] = useState<string | null>(null)

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
                        src={loginImage}
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
                            Mini
                        </Text>
                        <Text as="span" color="#008000">
                            BANK
                        </Text>
                    </Heading>

                    <VStack spacing={4} align="stretch" w="100%" maxW="sm">
                        <Input
                            placeholder="Email"
                            type="email"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'email' ? 'white' : 'black'}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            variant="filled"
                            focusBorderColor="#008000"
                            _focus={{ borderColor: '#008000' }}
                            _hover={{ borderColor: '#008000' }}
                            color={focusedField === 'senha' ? 'white' : 'black'}
                            onFocus={() => handleFocus('senha')}
                            onBlur={handleBlur}
                        />
                        <HStack justify="space-between">
                            <Checkbox size="sm">Lembre-me</Checkbox>
                        </HStack>
                        <Button
                            bg="#008000"
                            color="white"
                            _hover={{ bg: '#006400' }}
                            width="100%"
                            onClick={() => {
                                navigate('/dashboard')
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outline"
                            borderColor="#008000"
                            color="#008000"
                            _hover={{ bg: '#008000', color: 'white' }}
                            width="100%"
                            onClick={() => navigate('/register')}
                        >
                            Cadastrar-se
                        </Button>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    )
}