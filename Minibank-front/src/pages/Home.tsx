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

    <Box mt={6}>
        <Button colorScheme="teal" size="lg" onClick={() => navigate('/login')}>
            Login
        </Button>

        <Text fontSize="lg" mt={6}>
            Welcome to our banking app! Here, you can manage your finances with ease.
        </Text>
    </Box>

        <Text fontSize="sm" mt={10} opacity={0.6}>
            Click on the MiniBank logo to learn more
        </Text>
    </Box>
    )
}