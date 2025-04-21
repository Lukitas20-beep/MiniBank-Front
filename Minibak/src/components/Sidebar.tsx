import {
    Box,
    VStack,
    Icon,
    Text,
    useBreakpointValue,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
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
import { IconType } from 'react-icons'

interface SidebarItemProps {
    icon: IconType;
    label: string;
}

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const SidebarItem = ({ icon, label }: SidebarItemProps) => (
    <VStack spacing={1} color="gray.600" _hover={{ color: "black", cursor: "pointer" }}>
        <Icon as={icon} boxSize={6} />
        <Text fontSize="sm" textAlign="center">{label}</Text>
    </VStack>
)

const SidebarContent = () => (
    <Box
        w="15vh"
        bg="gray.50"
        py={6}
        px={2}
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
    >
        <VStack spacing={8}>
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

const Sidebar = ({ isOpen = false, onClose = () => {} }: SidebarProps) => {
    const isDesktop = useBreakpointValue({ base: false, md: true })

    if (isDesktop) {
        return <SidebarContent />
    }

    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody p={0}>
                    <SidebarContent />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default Sidebar