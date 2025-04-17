import { Box, Text, RadioGroup, Stack, Radio } from '@chakra-ui/react'

const CardSelection = () => {
return (
    <Box flex="1" bg="white" p={4} rounded="md" boxShadow="sm">
        <Text color="gray.500" fontWeight="semibold">Escolher cartão</Text>
        <Text mt={2} fontWeight="bold">PLAY DO SANTANDER</Text>
        <Text fontSize="sm">FINAL: 0000</Text>
        <Text fontSize="sm" mt={2}><strong>Valor Total</strong></Text>
        <Text fontSize="sm">000000000</Text>
        <Text fontSize="sm" mt={2}><strong>Vencimento</strong></Text>
        <Text fontSize="sm">10/07/1994</Text>

        <RadioGroup mt={4} defaultValue="pagar">
        <Stack spacing={2}>
            <Radio value="pagar">Pagar fatura</Radio>
            <Radio value="parcelar">Parcelar fatura</Radio>
        </Stack>
        </RadioGroup>
    </Box>
)
}

export default CardSelection