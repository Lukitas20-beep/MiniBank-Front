import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
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

interface TransferFormProps {
    accounts: string[];
    onTransfer: (data: {
        from: string;
        to: string;
        amount: number;
        description: string;
    }) => void;
}

const TransferForm = ({ accounts, onTransfer }: TransferFormProps) => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const toast = useToast();
    const { fontSize } = useFontSize();

    const handleSubmit = () => {
        if (!from || !to || !amount) {
            toast({
                title: "Preencha todos os campos obrigatórios.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        onTransfer({
            from,
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

        setFrom("");
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

                <FormControl isRequired>
                    <FormLabel fontSize={fontSize}>Conta de origem</FormLabel>
                    <Select
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        fontSize={fontSize}
                        placeholder="Selecione a conta"
                    >
                        {accounts.map((acc, i) => (
                            <option key={i} value={acc}>
                                {acc}
                            </option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontSize={fontSize}>Conta de destino</FormLabel>
                    <Input
                        placeholder="Informe o número da conta"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        fontSize={fontSize}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel fontSize={fontSize}>Valor</FormLabel>
                    <Input
                        type="number"
                        placeholder="Ex: 100.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fontSize={fontSize}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel fontSize={fontSize}>Descrição (opcional)</FormLabel>
                    <Textarea
                        placeholder="Ex: pagamento de aluguel"
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