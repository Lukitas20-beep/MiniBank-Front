import { HStack, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import { useFontSize } from '../../context/FontSizeContext';

interface LoanTabSelectorProps {
    selectedTab: string;
    onSelect: (tab: string) => void;
}

const LoanTabSelector = ({ selectedTab, onSelect }: LoanTabSelectorProps) => {
    const { fontSize } = useFontSize();

    const activeBg = useColorModeValue('#008000', '#008000');
    const activeColor = useColorModeValue('white', 'gray.900');
    const inactiveBg = useColorModeValue('gray.100', 'gray.700');
    const inactiveColor = useColorModeValue('gray.700', 'gray.200');

    return (
        <HStack spacing={4} mb={8} wrap="wrap">
            <Button
                onClick={() => onSelect('emprestimo')}
                bg={selectedTab === 'emprestimo' ? activeBg : inactiveBg}
                color={selectedTab === 'emprestimo' ? activeColor : inactiveColor}
                fontWeight="semibold"
                fontSize={fontSize}
                leftIcon={<Icon as={FaMoneyBillWave} boxSize={5} />}
                px={6}
                py={3}
                borderRadius="full"
                boxShadow={selectedTab === 'emprestimo' ? 'md' : 'sm'}
                _hover={{ bg: activeBg, color: activeColor }}
                transition="all 0.2s ease-in-out"
                minW="180px"
            >
                Empréstimos
            </Button>

            <Button
                onClick={() => onSelect('credito')}
                bg={selectedTab === 'credito' ? activeBg : inactiveBg}
                color={selectedTab === 'credito' ? activeColor : inactiveColor}
                fontWeight="semibold"
                fontSize={fontSize}
                leftIcon={<Icon as={FaCreditCard} boxSize={5} />}
                px={6}
                py={3}
                borderRadius="full"
                boxShadow={selectedTab === 'credito' ? 'md' : 'sm'}
                _hover={{ bg: activeBg, color: activeColor }}
                transition="all 0.2s ease-in-out"
                minW="180px"
            >
                Crédito pessoal
            </Button>
        </HStack>
    );
};

export default LoanTabSelector;