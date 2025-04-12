// src/pages/Login.tsx
import { Box, Heading, Input, Button, VStack } from '@chakra-ui/react'

export default function Login() {
    return (
    <Box textAlign="center" mt={20}>
        <Heading mb={6}>Login</Heading>
        <VStack gap={4} maxW="sm" mx="auto">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button colorScheme="teal" width="100%">
            Entrar
        </Button>
            </VStack>
    </Box>
    )
}