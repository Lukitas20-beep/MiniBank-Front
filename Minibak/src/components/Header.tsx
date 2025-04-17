import { Box, Flex, Text, Input } from '@chakra-ui/react'

const Header = () => {
return (
    <Flex justify="space-between" align="center" bg="white" p={4} rounded="md" boxShadow="sm">
        <Box>
            <Text>Olá, <strong>%Name</strong></Text>
            <Text fontSize="sm" color="gray.500">Ag 0000 Cc 000000000-0</Text>
        </Box>
        <Input placeholder="Digite aqui sua busca" maxW="300px" />
    </Flex>
)
}

export default Header