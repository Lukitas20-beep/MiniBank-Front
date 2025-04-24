import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    Divider,
    HStack,
} from "@chakra-ui/react";

const LoanSuccessStep = ({ onFinish }: { onFinish: () => void }) => {
    return (
        <Box bg="white" p={8} rounded="md" w="100%">
            <VStack align="center" spacing={6}>

                {/* Etapas */}
                <HStack spacing={8} fontSize="sm" fontWeight="semibold" color="gray.400">
                    <Text>
                        1. Dados Solicitação
                    </Text>
                    <Text>
                        2. Confirmação
                    </Text>
                    <Text borderBottom="2px" borderColor="black" color="black">
                        3. Conclusão
                    </Text>
                </HStack>

                <Divider />
                
                <Heading size="md" textAlign="center">Empréstimo solicitado com sucesso!</Heading>
                <Text color="gray.600" textAlign="center">
                    Seus dados foram enviados e em breve você receberá um retorno.
                </Text>

                <Flex justify="center" w="100%" pt={6}>
                    <Button colorScheme="teal" size="lg" onClick={onFinish}>
                        Voltar ao início
                    </Button>
                </Flex>
            </VStack>
        </Box>
    );
};

export default LoanSuccessStep;