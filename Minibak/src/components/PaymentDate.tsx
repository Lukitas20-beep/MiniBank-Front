import { Box, Text, RadioGroup, Stack, Radio } from '@chakra-ui/react'

const PaymentDate = () => {
return (
    <Box flex="1" bg="white" p={4} rounded="md" border="2px" borderColor="blue.400" boxShadow="sm">
    <Text color="gray.500" fontWeight="semibold">Data de pagamento</Text>
        <RadioGroup mt={4} defaultValue="hoje">
        <Stack spacing={2}>
            <Radio value="hoje" fontWeight="bold">Pagar hoje</Radio>
            <Radio value="agendar">Agendar para</Radio>
        </Stack>
        </RadioGroup>
    </Box>
    )
}

export default PaymentDate
