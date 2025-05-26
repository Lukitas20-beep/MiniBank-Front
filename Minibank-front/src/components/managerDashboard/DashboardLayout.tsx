// src/components/DashboardLayout.tsx
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import ManagerSidebar from './ManagerSidebar'
import Header from '../Header'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg="gray.50">
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Header onOpenMenu={onOpen} />
            </Box>

            <Flex pt="64px">
                <ManagerSidebar isOpen={isOpen} onClose={onClose} />

                <Box ml={{ base: 0, md: '0' }} flex="1" p={6}>
                    {children}
                </Box>
            </Flex>
        </Box>
    )
}