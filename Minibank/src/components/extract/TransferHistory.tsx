import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";

const TransferHistory = () => {
    // Exemplo de dados de transferências
    const transfers = [
        { from: "Conta Corrente", to: "Poupança", amount: 500, date: "01/05/2025" },
        { from: "Poupança", to: "Conta Corrente", amount: 200, date: "03/05/2025" },
        { from: "Conta Corrente", to: "Conta Corrente", amount: 150, date: "05/05/2025" }
    ];

    return (
        <Box px={{ base: 4, md: 8 }} py={6} bg="gray.50" borderRadius="lg" shadow="md">
            <Heading size="lg" color="teal.600" mb={6}>
                Histórico de Transferências
            </Heading>
            <Stack spacing={4}>
                {transfers.map((transfer, index) => (
                    <Flex
                        key={index}
                        direction={{ base: "column", md: "row" }}
                        p={5}
                        bg="white"
                        borderRadius="lg"
                        boxShadow="lg"
                        borderWidth={1}
                        borderColor="gray.200"
                        _hover={{ boxShadow: "xl", transform: "scale(1.02)", transition: "all 0.3s ease" }}
                    >
                        <Box flex="1">
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">
                                De: {transfer.from}
                            </Text>
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">
                                Para: {transfer.to}
                            </Text>
                        </Box>

                        <Box flex="1" textAlign="center" py={{ base: 2, md: 0 }}>
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">
                                R$ {transfer.amount.toFixed(2)}
                            </Text>
                        </Box>

                        <Box flex="1" textAlign="right" py={{ base: 2, md: 0 }}>
                            <Text fontSize="lg" color="gray.500">
                                {transfer.date}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </Stack>
        </Box>
    );
};

export default TransferHistory;