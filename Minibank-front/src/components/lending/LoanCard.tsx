import { Box, Text, Divider, Button } from '@chakra-ui/react';
import { useFontSize } from '../../context/FontSizeContext';

interface LoanCardProps {
    amount: string;
    description: string;
    onSimulate: () => void;
}

const LoanCard = ({ amount, description, onSimulate }: LoanCardProps) => {
    const { fontSize } = useFontSize();

    return (
        <Box
            bg="white"
            p={6}
            rounded="xl"
            boxShadow="md"
            minW="280px"
            minH="300px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            transition="all 0.3s ease"
            _hover={{ boxShadow: 'xl' }}
        >
            <Box>
                <Text color="gray.500" fontWeight="medium" mb={2} fontSize={fontSize}>
                    Valor disponível
                </Text>
                <Divider mb={2} />
                <Text fontWeight="bold" fontSize="2xl" color="#008000" mb={4}>
                    {amount}
                </Text>
                <Divider mb={4} />
                <Text fontSize={fontSize} color="gray.600" lineHeight="1.5">
                    {description}
                </Text>
            </Box>

            <Button
                mt={6}
                colorScheme="green"
                bg="#008000"
                color="white"
                rounded="full"
                fontWeight="semibold"
                _hover={{ bg: '#006400' }}
                transition="all 0.2s ease-in-out"
                onClick={onSimulate}
                fontSize={fontSize}
            >
                Simular agora
            </Button>
        </Box>
    );
};

export default LoanCard;