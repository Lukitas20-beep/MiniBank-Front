import {
    Box,
    VStack,
    HStack,
    Icon,
    Text
} from '@chakra-ui/react'
import {
    FaHome,
    FaMoneyBillWave,
    FaExchangeAlt,
    FaFileInvoice,
    FaCreditCard,
    FaHandHoldingUsd,
    FaEllipsisH,
} from 'react-icons/fa'

const SidebarItem = ({ icon, label }: { icon: any; label: string }) => (
    <HStack spacing={3} color="gray.700" _hover={{ color: "black", cursor: "pointer" }}>
        <Icon as={icon} />
        <Text>{label}</Text>
    </HStack>
)

const Sidebar = () => {
    return (
        <Box w="250px" bg="white" p={4} boxShadow="md">
        <Text as="span" color="Black" fontSize="2xl" fontWeight="bold">
                Mini
            </Text>
            <Text as="span" color="#008000" fontSize="2xl" fontWeight="bold">
                Bank
            </Text>
        <VStack spacing={4} align="start" fontSize="sm">
            <SidebarItem icon={FaHome} label="Home" />
            <SidebarItem icon={FaMoneyBillWave} label="Conta Corrente" />
            <SidebarItem icon={FaExchangeAlt} label="Transferências" />
            <SidebarItem icon={FaFileInvoice} label="Pagamentos" />
            <SidebarItem icon={FaCreditCard} label="Cartões" />
            <SidebarItem icon={FaHandHoldingUsd} label="Empréstimos" />
            <SidebarItem icon={FaEllipsisH} label="Outros" />
        </VStack>
    </Box>
    )
}

export default Sidebar