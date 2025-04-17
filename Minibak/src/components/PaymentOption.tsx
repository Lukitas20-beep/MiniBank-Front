import { Box, Text, RadioGroup, Stack, Radio } from '@chakra-ui/react'

const PaymentOption = () => {
return (
    <Box flex="1" bg="white" p={4} rounded="md" boxShadow="sm">
        <Text color="gray.500" fontWeight="semibold">Opção de pagamento</Text>
        <RadioGroup mt={4} defaultValue="atualizado">
        <Stack spacing={4}>
            <Box>
            <Radio value="atualizado">Atualizado</Radio>
            <Text fontSize="sm">R$ 0,00</Text>
            <Text fontSize="xs" color="gray.500">
                Esse valor considera eventuais créditos ou débitos ocorridos após o fechamento da fatura.
            </Text>
            </Box>

            <Box>
                <Radio value="total">Total</Radio>
                <Text fontSize="sm">R$ 0,00</Text>
            </Box>

            <Radio value="minimo">Mínimo</Radio>
        </Stack>
        </RadioGroup>
    </Box>
    )
}

export default PaymentOption
