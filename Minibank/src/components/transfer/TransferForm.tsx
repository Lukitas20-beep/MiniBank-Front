import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    VStack,
    useToast,
    Heading,
    Flex,
    Icon,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdSwapHoriz } from "react-icons/md";
import { useFontSize } from "../../context/FontSizeContext";

// --- CORREÇÃO 1: Props Simplificadas ---
// Removemos 'accounts' e adicionamos 'sourceAccount' para saber qual é a conta de origem.
interface TransferFormProps {
    sourceAccount: string; // Ex: "Conta Corrente"
    onTransfer: (data: {
        from: string;
        to: string;
        amount: number;
        description: string;
    }) => void;
}

const TransferForm = ({ sourceAccount, onTransfer }: TransferFormProps) => {
    // --- CORREÇÃO 2: Estado Simplificado ---
    // O estado 'from' foi removido, pois a conta de origem é fixa.
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const toast = useToast();
    const { fontSize } = useFontSize();

    const handleSubmit = () => {
        // A validação para 'from' foi removida.
        if (!to || !amount) {
            toast({
                title: "Preencha a conta de destino e o valor.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        onTransfer({
            from: sourceAccount, // Usamos a prop 'sourceAccount' diretamente.
            to,
            amount: parseFloat(amount),
            description,
        });

        toast({
            title: "Transferência realizada com sucesso!",
            status: "success",
            duration: 3000,
            isClosable: true,
        });

        // O 'setFrom' foi removido.
        setTo("");
        setAmount("");
        setDescription("");
    };

    return (
        <Box
            bg="white"
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            shadow="lg"
            w="100%"
            maxW="600px"
        >
            <VStack spacing={6} align="stretch">
                <Flex align="center" gap={2}>
                    <Icon as={MdSwapHoriz} boxSize={6} color="green.500" />
                    <Heading
                        as="h2"
                        size="md"
                        color="gray.700"
                        fontWeight="semibold"
                        fontSize={fontSize}
                    >
                        Realizar transferência
                    </Heading>
                </Flex>

                {/* --- CORREÇÃO 3: Campo de Origem Fixo --- */}
                {/* Trocamos o <Select> por um campo de texto estático. */}
                <FormControl>
                    <FormLabel fontSize={fontSize}>Saindo da conta</FormLabel>
                    <Flex
                        borderWidth="1px"
                        borderColor="gray.200"
                        bg="gray.50"
                        px={4}
                        py={2}
                        rounded="md"
                    >
                        <Text fontSize={fontSize} color="gray.600" fontWeight="medium">
                            {sourceAccount}
                        </Text>
                    </Flex>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontSize={fontSize}>Enviando para (CPF/CNPJ)</FormLabel>
                    <Input
                        placeholder="Informe o CPF ou CNPJ de destino"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        fontSize={fontSize}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontSize={fontSize}>Valor da transferência</FormLabel>
                    <Input
                        type="number"
                        placeholder="R$ 0,00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fontSize={fontSize}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={fontSize}>Descrição (opcional)</FormLabel>
                    <Textarea
                        placeholder="Ex: Pagamento da fatura"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fontSize={fontSize}
                    />
                </FormControl>

                <Button
                    bgGradient="linear(to-r, #008000, green.600)"
                    color="white"
                    _hover={{ bgGradient: "linear(to-r, green.600, green.700)" }}
                    size="lg"
                    borderRadius="full"
                    fontSize={fontSize}
                    onClick={handleSubmit}
                >
                    Confirmar transferência
                </Button>
            </VStack>
        </Box>
    );
};

export default TransferForm;