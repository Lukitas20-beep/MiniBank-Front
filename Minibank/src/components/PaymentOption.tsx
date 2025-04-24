import { Box, Text, RadioGroup, Stack, Radio, Divider } from '@chakra-ui/react'

interface PaymentOptionProps {
    selectedOption: string
    onChangeOption: (value: string) => void
    amountAtualizado: string
    amountTotal: string
}

const PaymentOption = ({
    selectedOption,
    onChangeOption,
    amountAtualizado,
    amountTotal,
}: PaymentOptionProps) => {
    return (
        <Box flex="1" bg="white" p={6} rounded="md" boxShadow="md" overflowY="auto">
            <Text color="gray.500" fontWeight="semibold" fontSize="lg" mb={4}>
                Opção de pagamento
            </Text>

            <RadioGroup value={selectedOption} onChange={onChangeOption}>
                <Stack spacing={6}>
                    <Box>
                        <Radio value="atualizado" fontWeight="bold">Atualizado</Radio>
                        <Text fontSize="sm" mt={1}>{amountAtualizado}</Text>
                        <Text fontSize="xs" color="gray.500" mt={1}>
                            Esse valor considera eventuais créditos ou débitos ocorridos após o fechamento da fatura.
                        </Text>
                    </Box>

                    <Divider />

                    <Box>
                        <Radio value="total" fontWeight="bold">Total</Radio>
                        <Text fontSize="sm" mt={1}>{amountTotal}</Text>
                        <Text fontSize="xs" color="gray.500" mt={1}>
                            Pagamento do valor total da fatura do cartão
                        </Text>
                    </Box>

                    <Divider />

                    <Radio value="minimo" fontWeight="bold">Mínimo</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}

export default PaymentOption