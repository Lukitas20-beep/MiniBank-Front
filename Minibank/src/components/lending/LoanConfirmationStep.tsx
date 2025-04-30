import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    Divider,
    HStack,
} from "@chakra-ui/react";

interface LoanData {
    amount: number;
    installments: number;
    dueDate: {
        day: number;
        month: number;
        year: number;
    };
}

interface LoanConfirmationStepProps {
    data: LoanData;
    onBack: () => void;
    onConfirm: () => void;
}

const LoanConfirmationStep: React.FC<LoanConfirmationStepProps> = ({ data, onBack, onConfirm }) => {
    return (
        <Box bg="white" p={8} rounded="md" w="100%">
            <VStack align="start" spacing={6}>
                <Box>
                    <Heading size="md">Confirmação dos Dados</Heading>
                    <Text color="gray.600" fontSize="sm">
                        Revise e confirme os dados antes de prosseguir
                    </Text>
                </Box>

                {/* Etapas */}
                <HStack spacing={8} fontSize="sm" fontWeight="semibold" color="gray.400">
                    <Text>
                        1. Dados Solicitação
                    </Text>
                    <Text borderBottom="2px" borderColor="black" color="black">
                        2. Confirmação
                    </Text>
                    <Text>
                        3. Conclusão
                    </Text>
                </HStack>

                <Divider />

                <VStack align="start" spacing={4}>
                    <Text><strong>Valor solicitado:</strong> R$ {data.amount}</Text>
                    <Text><strong>Quantidade de parcelas:</strong> {data.installments}</Text>
                    <Text>
                        <strong>Data de vencimento:</strong>{" "}
                        {data.dueDate.day}/{data.dueDate.month}/{data.dueDate.year}
                    </Text>
                </VStack>

                <Flex justify="end" gap={4} w="100%" pt={6}>
                    <Button variant="outline" size="lg" onClick={onBack}>
                        Voltar
                    </Button>
                    <Button bg="black" color="white" size="lg" onClick={onConfirm}>
                        Confirmar
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanConfirmationStep;