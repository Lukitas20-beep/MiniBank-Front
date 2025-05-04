import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Text,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useFontSize } from "../../context/FontSizeContext"; // ✅

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

// ... imports ...

const LoanConfirmationStep: React.FC<LoanConfirmationStepProps> = ({ data, onBack, onConfirm }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const activeColor = "#008000";
    const hoverColor = "#006400";

    // 🧮 Cálculo da parcela com juros (sistema Price)
    const interestRate = 0.02; // 2% ao mês
    const n = data.installments;
    const P = data.amount;
    const i = interestRate;

    const { fontSize } = useFontSize();

    const installmentValue = (P * i) / (1 - Math.pow(1 + i, -n));
    const formattedInstallment = installmentValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <Box
            bg="white"
            p={isMobile ? 4 : 6}
            rounded="2xl"
            boxShadow="lg"
            w="100%"
            transition="all 0.3s ease"
        >
            <VStack align="start" spacing={6} w="100%">
                <Box>
                    <Heading size="md" mb={1} color="gray.700" fontSize={fontSize}>
                        Confirmação dos Dados
                    </Heading>
                    <Text color="gray.500" fontSize={fontSize}>
                        Revise e confirme os dados antes de prosseguir
                    </Text>
                </Box>

                <HStack spacing={6} fontWeight="semibold" color="gray.400" fontSize={fontSize}>
                    <Text>1. Dados Solicitação</Text>
                    <Text color={activeColor} borderBottom="2px solid" borderColor={activeColor} pb={1} fontSize={fontSize}>
                        2. Confirmação
                    </Text>
                    <Text fontSize={fontSize}>3. Conclusão</Text>
                </HStack>

                <Divider my={4} />

                <VStack align="start" spacing={4}>
                    <Heading size="sm" color="gray.700" fontSize={fontSize}>
                        Informações do Empréstimo
                    </Heading>

                    <Text fontWeight="medium" color="gray.700" fontSize={fontSize}>
                        <strong>Valor solicitado:</strong> R$ {P}
                    </Text>
                    <Text fontWeight="medium" color="gray.700" fontSize={fontSize}>
                        <strong>Quantidade de parcelas:</strong> {n}
                    </Text>
                    <Text fontWeight="medium" color="gray.700" fontSize={fontSize}>
                        <strong>Valor estimado de cada parcela:</strong> {formattedInstallment}
                    </Text>
                    <Text fontWeight="medium" color="gray.700" fontSize={fontSize}>
                        <strong>Data de vencimento:</strong> {data.dueDate.day}/{data.dueDate.month}/{data.dueDate.year}
                    </Text>
                </VStack>

                <Flex
                    direction={isMobile ? "column" : "row"}
                    justify="end"
                    gap={4}
                    w="100%"
                    pt={4}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={onBack}
                        w={isMobile ? "100%" : "auto"}
                        borderRadius="full"
                        fontWeight="semibold"
                        borderColor={activeColor}
                        color={activeColor}
                        _hover={{ bg: "gray.100" }}
                        fontSize={fontSize}
                    >
                        Voltar
                    </Button>
                    <Button
                        size="lg"
                        onClick={onConfirm}
                        w={isMobile ? "100%" : "auto"}
                        bg={activeColor}
                        color="white"
                        fontWeight="semibold"
                        borderRadius="full"
                        _hover={{ bg: hoverColor }}
                        transition="all 0.2s ease-in-out"
                        fontSize={fontSize}
                    >
                        Confirmar
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanConfirmationStep;