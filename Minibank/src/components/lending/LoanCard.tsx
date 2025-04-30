import { Box, Text, Divider } from '@chakra-ui/react'

interface LoanCardProps {
    amount: string
    description: string
}

const LoanCard = ({ amount, description }: LoanCardProps) => {
    return (
        <Box
            bg="white"
            p={6}
            rounded="md"
            boxShadow="md"
            minW="280px"
            minH="300px" // altura mínima aumentada
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box>
                <Text color="gray.500" fontWeight="semibold" mb={2}>
                    Disponível:
                </Text>
                <Divider mb={2} />
                <Text fontWeight="bold" fontSize="xl" mb={4}>
                    {amount}
                </Text>
                <Divider mb={4} />
                <Text fontSize="sm" color="gray.500">
                    {description}
                </Text>
            </Box>

            <Text fontWeight="bold" cursor="pointer" mt={6}>
                Simule &gt;
            </Text>
        </Box>
    )
}

export default LoanCard