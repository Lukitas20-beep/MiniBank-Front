import { Box, Divider, Text, RadioGroup, Stack, Radio } from '@chakra-ui/react'

interface CardSelectionProps {
    cardName: string
    cardEnd: string
    totalValue: string
    dueDate: string
    selectedOption: string
    onChangeOption: (value: string) => void
}

const CardSelection = ({
    cardName,
    cardEnd,
    totalValue,
    dueDate,
    selectedOption,
    onChangeOption
}: CardSelectionProps) => {
    return (
        <Box flex="1" bg="white" p={6} rounded="md" boxShadow="md">
            <Text color="gray.500" fontWeight="semibold" fontSize="lg" mb={4}>
                Escolher cartão
            </Text>

            <Divider mb={4} />

            <Text fontSize="sm" color="gray.500">{cardName}</Text>
            <Text fontWeight="bold" fontSize="md" mb={4}>FINAL: {cardEnd}</Text>

            <Divider mb={4} />

            <Text fontSize="sm" color="gray.500">Valor Total</Text>
            <Text fontWeight="medium" fontSize="md">{totalValue}</Text>

            <Text fontSize="sm" color="gray.500" mt={4}>Vencimento</Text>
            <Text fontWeight="medium" fontSize="md">{dueDate}</Text>

            <RadioGroup mt={6} value={selectedOption} onChange={onChangeOption}>
                <Stack spacing={3}>
                    <Radio value="pagar" fontWeight="bold">Pagar fatura</Radio>
                    <Radio value="parcelar" fontWeight="bold">Parcelar Fatura</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}

export default CardSelection