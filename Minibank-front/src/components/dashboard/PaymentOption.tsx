import {
    Box,
    Text,
    RadioGroup,
    Stack,
    Radio,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react';
import { useFontSize } from '../../context/FontSizeContext'; // ajuste o caminho se necessário

interface PaymentOptionProps {
    selectedOption: string;
    onChangeOption: (value: string) => void;
    amountAtualizado: string;
    amountTotal: string;
}

const PaymentOption = ({
    selectedOption,
    onChangeOption,
    amountAtualizado,
    amountTotal,
}: PaymentOptionProps) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.100', 'gray.700');
    const labelColor = useColorModeValue('gray.500', 'gray.400');
    const textColor = useColorModeValue('gray.800', 'white');

    const { fontSize } = useFontSize(); // hook do controle de acessibilidade

    return (
        <Box
            flex="1"
            bg={bgColor}
            p={5}
            rounded="2xl"
            boxShadow="sm"
            border="1px solid"
            borderColor={borderColor}
        >
            <Text color={labelColor} fontWeight="semibold" fontSize={fontSize} mb={4}>
                Opção de pagamento
            </Text>

            <RadioGroup value={selectedOption} onChange={onChangeOption}>
                <Stack spacing={6}>
                    <Box>
                        <Radio value="atualizado" colorScheme="blue" fontWeight="medium" fontSize={fontSize}>
                            Atualizado
                        </Radio>
                        <Text fontSize={fontSize} fontWeight="medium" mt={1} color={textColor}>
                            {amountAtualizado}
                        </Text>
                        <Text fontSize="xs" color={labelColor} mt={1}>
                            Esse valor considera créditos ou débitos após o fechamento da fatura.
                        </Text>
                    </Box>

                    <Divider borderColor={borderColor} />

                    <Box>
                        <Radio value="total" colorScheme="blue" fontWeight="medium" fontSize={fontSize}>
                            Total
                        </Radio>
                        <Text fontSize={fontSize} fontWeight="medium" mt={1} color={textColor}>
                            {amountTotal}
                        </Text>
                        <Text fontSize="xs" color={labelColor} mt={1}>
                            Pagamento integral do valor da fatura.
                        </Text>
                    </Box>

                    <Divider borderColor={borderColor} />

                    <Box>
                        <Radio value="minimo" colorScheme="blue" fontWeight="medium" fontSize={fontSize}>
                            Mínimo
                        </Radio>
                        <Text fontSize="xs" color={labelColor} mt={1}>
                            Pagamento mínimo necessário para manter o cartão em dia.
                        </Text>
                    </Box>
                </Stack>
            </RadioGroup>
        </Box>
    );
};

export default PaymentOption;