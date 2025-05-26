import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFontSize } from "../../context/FontSizeContext"; // ✅

type Props = {
    onSubmit: (data: {
        amount: string;
        installments: string;
        dueDate: { day: string; month: string; year: string };
    }) => void;
    initialAmount?: string;
};

const LoanRequestStep = ({ onSubmit, initialAmount }: Props) => {
    const [amount, setAmount] = useState(initialAmount ?? "5000,00");
    const [installments, setInstallments] = useState("48");
    const [dueDate, setDueDate] = useState({ day: "30", month: "05", year: "2025" });

    const isMobile = useBreakpointValue({ base: true, md: false });
    const { fontSize } = useFontSize(); // ✅

    const activeColor = "#008000";
    const hoverColor = "#006400";

    const handleSubmit = () => {
        const data = { amount, installments, dueDate };
        onSubmit(data);
    };

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
                    <Heading size="md" mb={1}>
                        Solicitar ou contratar empréstimo
                    </Heading>
                    <Text fontSize={fontSize} color="gray.500">
                        Altere o valor ou quantidade de parcelas se desejar
                    </Text>
                </Box>

                <HStack spacing={4} fontSize={fontSize} fontWeight="semibold">
                    <Text
                        color={activeColor}
                        borderBottom="2px solid"
                        borderColor={activeColor}
                        pb={1}
                    >
                        1. Dados da Solicitação
                    </Text>
                    <Text color="gray.400">2. Confirmação</Text>
                    <Text color="gray.400">3. Conclusão</Text>
                </HStack>

                <Divider />

                <VStack align="start" spacing={4} w="100%">
                    <Heading size="sm" color="gray.700">
                        Informações do empréstimo
                    </Heading>

                    <Stack spacing={4} w="100%" fontSize={fontSize}>
                        {/* Valor solicitado */}
                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={2}
                        >
                            <Text minW="160px" fontWeight="medium">
                                Valor solicitado:
                            </Text>
                            <Flex align="center" gap={2} w="100%">
                                <Input
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    maxW={isMobile ? "100%" : "200px"}
                                    textAlign="right"
                                    fontWeight="semibold"
                                    borderColor="gray.300"
                                    fontSize={fontSize}
                                />
                                <Text color="gray.600" fontSize={fontSize}>(R$)</Text>
                            </Flex>
                        </Flex>

                        {/* Parcelas */}
                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={2}
                        >
                            <Text minW="160px" fontWeight="medium">
                                Quantidade de Parcelas:
                            </Text>
                            <Input
                                value={installments}
                                onChange={(e) => setInstallments(e.target.value)}
                                maxW={isMobile ? "100%" : "200px"}
                                textAlign="center"
                                fontWeight="semibold"
                                borderColor="gray.300"
                                fontSize={fontSize}
                            />
                        </Flex>

                        {/* Data de vencimento */}
                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={2}
                        >
                            <Text minW="160px" fontWeight="medium">
                                Data de Vencimento:
                            </Text>
                            <HStack spacing={1}>
                                <Input
                                    value={dueDate.day}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, day: e.target.value })
                                    }
                                    maxW="60px"
                                    textAlign="center"
                                    fontWeight="semibold"
                                    borderColor="gray.300"
                                    fontSize={fontSize}
                                />
                                <Text fontSize={fontSize}>/</Text>
                                <Input
                                    value={dueDate.month}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, month: e.target.value })
                                    }
                                    maxW="60px"
                                    textAlign="center"
                                    fontWeight="semibold"
                                    borderColor="gray.300"
                                    fontSize={fontSize}
                                />
                                <Text fontSize={fontSize}>/</Text>
                                <Input
                                    value={dueDate.year}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, year: e.target.value })
                                    }
                                    maxW="80px"
                                    textAlign="center"
                                    fontWeight="semibold"
                                    borderColor="gray.300"
                                    fontSize={fontSize}
                                />
                            </HStack>
                        </Flex>
                    </Stack>
                </VStack>

                {/* Botões */}
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
                        bg={activeColor}
                        color="white"
                        fontWeight="semibold"
                        borderRadius="full"
                        _hover={{ bg: hoverColor }}
                        onClick={handleSubmit}
                        w={isMobile ? "100%" : "auto"}
                        transition="all 0.2s ease-in-out"
                        fontSize={fontSize}
                    >
                        Simular
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanRequestStep;