import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AccountInfo from "../../components/dashboard/AccountInfo";
import TransferForm from "../../components/transfer/TransferForm";

const accounts = ["Conta Corrente - 1234", "Poupança - 5678"];

const TransferPage = () => {
    const name = "Arthur Campos";
    const ag = "12345";
    const ac = "56789-0";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState<{
        from: string;
        to: string;
        amount: number;
        description: string;
    } | null>(null);

    const handleTransfer = (data: {
        from: string;
        to: string;
        amount: number;
        description: string;
    }) => {
        console.log("Transferência enviada:", data);
        setFormData(data);
        // Aqui você pode enviar para a API ou backend
    };

    return (
        <Box minH="100vh" bg="gray.50">
            {/* Header fixo */}
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Header onOpenMenu={onOpen} />
            </Box>

            <Flex pt="64px">
                {/* Sidebar */}
                <Sidebar isOpen={isOpen} onClose={onClose} />

                {/* Conteúdo principal */}
                <Box ml={{ base: 0, md: "0" }} flex="1" px={{ base: 4, md: 8 }} py={6}>

                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        mt={{ base: 0, md: 10 }}
                        px={{ base: 4, sm: 6, md: 0 }}
                    >
                        <Heading
                            size="lg"
                            mb={6}
                            textAlign={{ base: "center", md: "left" }}
                        >
                            Realizar Transferência
                        </Heading>
                        <TransferForm accounts={accounts} onTransfer={handleTransfer} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default TransferPage;