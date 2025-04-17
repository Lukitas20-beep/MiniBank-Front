import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdOutlineDone } from 'react-icons/md'

const StatusCards = () => {
return (
    <Flex gap={4}>
    <Box flex="1" bg="white" p={4} rounded="md" boxShadow="sm">
        <Flex justify="space-between" align="center">
            <Text fontWeight="bold">💲 Saldo disponível</Text>
            <Text>▼</Text>
        </Flex>
    </Box>

    <Box flex="1" bg="blackAlpha.900" color="white" p={4} rounded="md" boxShadow="sm">
        <Text>Cartão final 0000 ▼</Text>
    </Box>

    <Flex align="center" gap={2}>
        <Icon as={MdOutlineDone} color="green.500" boxSize={6} />
        <Text color="green.500" fontWeight="bold">Preenchimento</Text>
    </Flex>
    </Flex>
)
}

export default StatusCards