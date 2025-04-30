import {
    Box,
    Flex,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AccountInfo from "../../components/dashboard/AccountInfo";
import LoanCard from "../../components/lending/LoanCard";
import LoanTabSelector from "../../components/lending/LoanTabSelector";
import LoanRequestStep from "../../components/lending/LoanRequestStep";
import LoanConfirmationStep from "../../components/lending/LoanConfirmationStep";
import LoanSuccessStep from "../../components/lending/LoanSuccessStep";

type FormData = {
    amount: string;
    installments: string;
    dueDate: { day: string; month: string; year: string };
};

const Lending = () => {
    const name = "Arthur Campos";
    const ag = "12345";
    const ac = "56789-0";

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTab, setSelectedTab] = useState<"limite" | "emprestimo">("limite");
    const [step, setStep] = useState(1); // 1: formulário, 2: confirmação, 3: sucesso
    const [formData, setFormData] = useState<FormData | null>(null);

    const handleFormSubmit = (data: FormData) => {
        setFormData(data);
        setStep(2);
    };

    const handleConfirm = () => {
        setStep(3);
    };

    const handleFinish = () => {
        setStep(1);
        setSelectedTab("limite");
    };

    const renderStep = () => {
        if (selectedTab !== "emprestimo") return renderLoanOptions();

        switch (step) {
            case 1:
                return <LoanRequestStep onSubmit={handleFormSubmit} />;
            case 2:
                return (
                    formData && (
                        <LoanConfirmationStep
                            data={{
                                ...formData,
                                amount: parseFloat(formData.amount),
                                installments: parseInt(formData.installments, 10),
                                dueDate: {
                                    day: parseInt(formData.dueDate.day, 10),
                                    month: parseInt(formData.dueDate.month, 10),
                                    year: parseInt(formData.dueDate.year, 10),
                                }
                            }}
                            onBack={() => setStep(1)}
                            onConfirm={handleConfirm}
                        />
                    )
                );
            case 3:
                return <LoanSuccessStep onFinish={handleFinish} />;
            default:
                return null;
        }
    };

    const renderLoanOptions = () => (
        <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            mt={6}
            justify="flex-start"
            align="stretch"
            flexWrap="wrap"
        >
            <LoanCard
                amount="R$ 15.000,00"
                description="Para Você realizar novas conquistas de forma planejada, com parcelas que cabem no seu bolso."
            />
            <LoanCard
                amount="R$ 1.500,00"
                description="Para Você utilizar em casos de imprevistos ou gastos inesperados."
            />
        </Stack>
    );

    return (
        <Box minH="100vh" bg="gray.50">
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Header onOpenMenu={onOpen} />
            </Box>

            <Flex pt="64px">
                <Sidebar isOpen={isOpen} onClose={onClose} />

                <Box ml={{ base: 0, md: "0" }} flex="1" px={{ base: 4, md: 8 }} py={6}>
                    <AccountInfo name={name} agency={ag} account={ac} />

                    {/* Alinhamento central no mobile */}
                    <Flex justify={{ base: "center", md: "flex-start" }} my={6}>
                        <LoanTabSelector
                            selectedTab={selectedTab}
                            onSelect={(tab) => {
                                setSelectedTab(tab as "limite" | "emprestimo");
                                setStep(1);
                            }}
                        />
                    </Flex>

                    {renderStep()}
                </Box>
            </Flex>
        </Box>
    );
};

export default Lending;