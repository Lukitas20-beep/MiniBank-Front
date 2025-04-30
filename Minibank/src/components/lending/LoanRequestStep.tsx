import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
    HStack,
    Divider,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
    onSubmit: (data: {
        amount: string;
        installments: string;
        dueDate: { day: string; month: string; year: string };
    }) => void;
};

const LoanRequestStep = ({ onSubmit }: Props) => {
    const [amount, setAmount] = useState("5000,00");
    const [installments, setInstallments] = useState("48");
    const [dueDate, setDueDate] = useState({ day: "30", month: "05", year: "2025" });

    const isMobile = useBreakpointValue({ base: true, md: false });

    const handleSubmit = () => {
        const data = { amount, installments, dueDate };
        console.log("Submitting loan request:", data);
        onSubmit(data);
    };

    return (
        <Box bg="white" p={isMobile ? 4 : 8} rounded="md" w="100%">
            <VStack align="start" spacing={6}>
                {/* Título e subtítulo */}
                <Box>
                    <Heading size="md">Solicitar/contratar empréstimo</Heading>
                    <Text color="gray.600" fontSize="sm">
                        Caso prefira, altere o valor ou quantidade de parcelas
                    </Text>
                </Box>

                {/* Etapas */}
                <HStack
                    spacing={isMobile ? 2 : 8}
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.400"
                    wrap="wrap"
                >
                    <Text borderBottom="2px" borderColor="black" color="black">
                        1. Dados Solicitação
                    </Text>
                    <Text>2. Confirmação</Text>
                    <Text>3. Conclusão</Text>
                </HStack>

                <Divider />

                {/* Formulário */}
                <VStack align="start" spacing={6} w="100%">
                    <Heading size="sm">Dados da solicitação</Heading>

                    <Stack spacing={4} w="100%">
                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={4}
                        >
                            <Text minW="150px">Valor solicitado:</Text>
                            <Flex align="center" gap={2} w="100%">
                                <Input
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    maxW={isMobile ? "100%" : "200px"}
                                    textAlign="right"
                                />
                                <Text color="gray.600">(R$)</Text>
                            </Flex>
                        </Flex>

                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={4}
                        >
                            <Text minW="150px">Quantidade de Parcelas:</Text>
                            <Input
                                value={installments}
                                onChange={(e) => setInstallments(e.target.value)}
                                maxW={isMobile ? "100%" : "200px"}
                                textAlign="center"
                            />
                        </Flex>

                        <Flex
                            direction={isMobile ? "column" : "row"}
                            align={isMobile ? "start" : "center"}
                            gap={4}
                        >
                            <Text minW="150px">Data de Vencimento:</Text>
                            <HStack spacing={2}>
                                <Input
                                    value={dueDate.day}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, day: e.target.value })
                                    }
                                    maxW="60px"
                                    textAlign="center"
                                />
                                <Text>/</Text>
                                <Input
                                    value={dueDate.month}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, month: e.target.value })
                                    }
                                    maxW="60px"
                                    textAlign="center"
                                />
                                <Text>/</Text>
                                <Input
                                    value={dueDate.year}
                                    onChange={(e) =>
                                        setDueDate({ ...dueDate, year: e.target.value })
                                    }
                                    maxW="80px"
                                    textAlign="center"
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
                    pt={6}
                >
                    <Button
                        variant="outline"
                        size="lg"
                        w={isMobile ? "100%" : "auto"}
                    >
                        Voltar
                    </Button>
                    <Button
                        bg="black"
                        color="white"
                        size="lg"
                        _hover={{ bg: "gray.800" }}
                        onClick={handleSubmit}
                        w={isMobile ? "100%" : "auto"}
                    >
                        Simular
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanRequestStep;