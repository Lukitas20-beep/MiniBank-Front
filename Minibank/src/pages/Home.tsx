import { Box, Button, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import viteLogo from '/MB.svg'

export default function Home() {
const navigate = useNavigate()

return (
    <Box
        minH="100vh"
        bg={useColorModeValue('gray.900', 'gray.800')}
        color="white"
        textAlign="center"
        py={10}
        px={4}
    >
        <Box mb={6}>
            <a href="https://github.com/Arthur5502/MiniBank-Front.git" target="_blank">
                <Image src={viteLogo} alt="MiniBank Logo" boxSize="80px" mx="auto" />
            </a>
        </Box>

        <Heading size="2xl" mb={4}>
            MiniBank
        </Heading>

        <Text fontSize="lg" mb={8}>
            Bem-vindo ao melhor banco digital!
        </Text>

        <Box display="flex" flexDirection="column" gap={4} alignItems="center">
            <Button colorScheme="teal" size="lg" onClick={()=>navigate('/dashboard')}>
                Acessar como cliente
            </Button>
            <Button colorScheme="purple" size="lg" onClick={()=>navigate('/login')}>
                Acessar como Gerente
            </Button>
        </Box>

        <Text fontSize="sm" mt={10} opacity={0.6}>
            Clique no logo do MiniBank para saber mais
        </Text>

    </Box>
    )
}
