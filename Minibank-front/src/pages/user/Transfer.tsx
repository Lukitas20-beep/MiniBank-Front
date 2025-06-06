import { Box, Flex, useDisclosure, Heading } from "@chakra-ui/react"; // 1. Importar o Heading
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TransferForm from "../../components/transfer/TransferForm";

const TransferPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // Removido o estado formData pois não estava sendo utilizado

    const handleTransfer = (data: {
        from: string;
        to: string;
        amount: number;
        description: string;
    }) => {
        console.log("Transferência enviada:", data);
        // Aqui você pode enviar para a API ou backend
    };

    return (
        <>
            {/* Aqui você pode enviar para a API ou backend */}
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
                        {/* --- TÍTULO ADICIONADO --- */}
                        <Heading as="h1" size="lg" color="gray.700" mb={8}>
                            Realizar Transferência
                        </Heading>

                        <TransferForm
                            sourceAccount="Conta Corrente"
                            onTransfer={handleTransfer}
                        />
                    </Flex>
                </Box>
            </Flex>
        </>
    );
};

export default TransferPage;