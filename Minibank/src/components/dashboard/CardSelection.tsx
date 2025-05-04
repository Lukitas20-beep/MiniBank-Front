import {
    Box,
    Divider,
    Text,
    RadioGroup,
    Stack,
    Radio,
    HStack,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useFontSize } from '../../context/FontSizeContext'; // ajuste o caminho conforme necessário

interface CardSelectionProps {
    cardName: string;
    cardEnd: string;
    totalValue: string;
    dueDate: string;
    selectedOption: string;
    onChangeOption: (value: string) => void;
}

const CardSelection = ({
    cardName,
    cardEnd,
    totalValue,
    dueDate,
    selectedOption,
    onChangeOption,
}: CardSelectionProps) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const labelColor = useColorModeValue('gray.500', 'gray.400');
    const valueColor = useColorModeValue('gray.800', 'white');

    const { fontSize } = useFontSize(); // hook aqui

    return (
        <Box
            flex="1"
            bg={bgColor}
            p={5}
            rounded="2xl"
            boxShadow="sm"
            border="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
        >
            <Text fontWeight="semibold" fontSize={fontSize} color={valueColor} mb={3}>
                Escolher cartão
            </Text>

            <Divider mb={4} />

            <VStack align="start" spacing={2}>
                <Text fontSize={fontSize} color={labelColor}>
                    {cardName}
                </Text>
                <Text fontWeight="bold" fontSize={fontSize} color={valueColor}>
                    Final: **** {cardEnd}
                </Text>
            </VStack>

            <Divider my={4} />

            <HStack justify="space-between" w="full" mb={2}>
                <Box>
                    <Text fontSize={fontSize} color={labelColor}>
                        Valor Total
                    </Text>
                    <Text fontWeight="medium" fontSize={fontSize} color="green.500">
                        {totalValue}
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={fontSize} color={labelColor}>
                        Vencimento
                    </Text>
                    <Text fontWeight="medium" fontSize={fontSize} color={valueColor}>
                        {dueDate}
                    </Text>
                </Box>
            </HStack>

            <RadioGroup mt={6} value={selectedOption} onChange={onChangeOption}>
                <Stack spacing={3}>
                    <Radio value="pagar" fontWeight="medium" colorScheme="green" fontSize={fontSize}>
                        Pagar fatura
                    </Radio>
                    <Radio value="parcelar" fontWeight="medium" colorScheme="green" fontSize={fontSize}>
                        Parcelar fatura
                    </Radio>
                </Stack>
            </RadioGroup>
        </Box>
    );
};

export default CardSelection;