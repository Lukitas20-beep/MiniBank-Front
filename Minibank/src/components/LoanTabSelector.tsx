import { HStack, Button, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaMoneyBillWave } from 'react-icons/fa'

interface LoanTabSelectorProps {
    selectedTab: string
    onSelect: (tab: string) => void
}

const LoanTabSelector = ({ selectedTab, onSelect }: LoanTabSelectorProps) => {
    const activeBg = useColorModeValue('gray.900', 'gray.100')
    const activeColor = useColorModeValue('white', 'black')
    const inactiveBg = useColorModeValue('gray.100', 'gray.700')

    return (
        <HStack spacing={6} mb={8} wrap="wrap">
            <Button
                onClick={() => onSelect('emprestimo')}
                bg={selectedTab === 'emprestimo' ? activeBg : inactiveBg}
                color={selectedTab === 'emprestimo' ? activeColor : 'gray.700'}
                fontWeight="bold"
                fontSize="lg"
                leftIcon={<Icon as={FaMoneyBillWave} boxSize={6} />}
                px={8}
                py={4}
                borderRadius="xl"
                boxShadow={selectedTab === 'emprestimo' ? 'lg' : 'base'}
                _hover={{ bg: activeBg, color: activeColor }}
                minW="200px"
            >
                Empréstimo
            </Button>

            <Button
                onClick={() => onSelect('limite')}
                bg={selectedTab === 'limite' ? activeBg : inactiveBg}
                color={selectedTab === 'limite' ? activeColor : 'gray.700'}
                fontWeight="bold"
                fontSize="lg"
                px={8}
                py={4}
                borderRadius="xl"
                boxShadow={selectedTab === 'limite' ? 'lg' : 'base'}
                _hover={{ bg: activeBg, color: activeColor }}
                minW="200px"
            >
                Limite pessoal
            </Button>
        </HStack>
    )
}

export default LoanTabSelector
