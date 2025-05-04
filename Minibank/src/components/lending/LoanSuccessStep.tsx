import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    Divider,
    HStack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { useFontSize } from "../../context/FontSizeContext";

const LoanSuccessStep = ({ onFinish }: { onFinish: () => void }) => {
    const headingSize = useBreakpointValue({ base: "lg", md: "xl" });
    const isMobile = useBreakpointValue({ base: true, md: false });
    const { fontSize } = useFontSize();

    return (
        <Box
            bg="white"
            p={isMobile ? 6 : 10}
            rounded="2xl"
            shadow="md"
            w="100%"
            transition="all 0.3s ease"
        >
            <VStack align="center" spacing={8} w="100%">
                {/* Etapas */}
                <HStack
                    spacing={isMobile ? 4 : 10}
                    fontSize={fontSize}
                    fontWeight="medium"
                    color="gray.400"
                    wrap="wrap"
                    justify="center"
                    textAlign="center"
                >
                    <Text>1. Dados Solicitação</Text>
                    <Text>2. Confirmação</Text>
                    <Text
                        borderBottom="2px solid"
                        borderColor="#008000"
                        color="black"
                        transition="border-color 0.3s"
                        pb={1}
                    >
                        3. Conclusão
                    </Text>
                </HStack>

                <Divider opacity={0.5} />

                <Heading size={headingSize} textAlign="center" color="#008000">
                    Empréstimo solicitado com sucesso!
                </Heading>

                <Text
                    fontSize={fontSize}
                    color="gray.600"
                    textAlign="center"
                    maxW="500px"
                >
                    Seus dados foram enviados com sucesso. Em breve, você receberá um retorno da nossa equipe.
                </Text>

                <Flex justify="center" w="100%" pt={6}>
                    <Button
                        bg="#008000"
                        color="white"
                        _hover={{ bg: "#006400" }}
                        size="lg"
                        px={isMobile ? 6 : 10}
                        borderRadius="full"
                        onClick={onFinish}
                        fontSize={fontSize}
                        w={isMobile ? "100%" : "auto"}
                        transition="all 0.2s ease-in-out"
                    >
                        Voltar ao início
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanSuccessStep;