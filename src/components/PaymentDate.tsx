import { Box, Text, RadioGroup, Stack, Radio, Divider } from '@chakra-ui/react'

interface PaymentDateProps {
    selectedDate: string
    onChangeDate: (value: string) => void
}

const PaymentDate = ({ selectedDate, onChangeDate }: PaymentDateProps) => {
    return (
        <Box flex="1" bg="white" p={6} rounded="md" border="2px" borderColor="blue.400" boxShadow="md">
            <Text color="gray.500" fontWeight="semibold" fontSize="lg" mb={4}>
                Data de pagamento
            </Text>

            <Divider mb={4} />

            <RadioGroup value={selectedDate} onChange={onChangeDate}>
                <Stack spacing={4}>
                    <Radio value="hoje" fontWeight="bold">Pagar hoje</Radio>
                    <Radio value="agendar" fontWeight="bold">Agendar para</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}

export default PaymentDate