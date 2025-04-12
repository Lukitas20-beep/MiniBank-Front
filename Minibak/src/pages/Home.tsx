// src/pages/Home.tsx
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import viteLogo from '/MB.svg'

export default function Home() {
const navigate = useNavigate()

return (
    <Box textAlign="center" mt={10}>
    <a href="https://github.com/Arthur5502/MiniBank-Front.git" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <Heading mt={4}>MiniBank</Heading>
    <Box mt={6}>
        <Button colorScheme="teal" onClick={() => navigate('/login')}>
            Login
        </Button>
        <Text mt={4}>
            Welcome to our banking app! Here, you can manage your finances with ease.
        </Text>
    </Box>
    <Text className="read-the-docs" mt={6}>
        Click on the MiniBank logo to learn more
    </Text>
    </Box>
    )
}