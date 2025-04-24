import {
    Box,
    Flex,
    Text,
    Icon,
    HStack,
    Avatar,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FaQuestionCircle, FaBell } from 'react-icons/fa'
import { MdTextIncrease, MdTextDecrease } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import SearchNavigation from './SearchNavigation'

interface HeaderProps {
    onOpenMenu: () => void
}

const Header = ({ onOpenMenu }: HeaderProps) => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const navigate = useNavigate()

    return (
        <Flex
            bg="gray.900"
            color="white"
            px={6}
            py={3}
            align="center"
            justify="space-between"
            boxShadow="sm"
            position="relative"
            zIndex="1000"
        >
            {/* Mobile Menu Icon */}
            {isMobile && (
                <Box position="absolute" left="1rem">
                    <Icon
                        as={FiMenu}
                        fontSize="xl"
                        cursor="pointer"
                        onClick={onOpenMenu}
                    />
                </Box>
            )}

            {/* Logo */}
            <Box
                flex={isMobile ? '1' : '0'}
                textAlign={isMobile ? 'center' : 'left'}
                cursor="pointer"
                onClick={() => navigate('/login')}
            >
                <Text fontSize="2xl" fontWeight="bold">
                    <Text as="span" color="white">Mini</Text>
                    <Text as="span" color="#008000">Bank</Text>
                </Text>
            </Box>

            {/* Campo de busca centralizado no desktop */}
            {!isMobile && (
                <Flex flex="1" justify="center" px={4}>
                    <SearchNavigation />
                </Flex>
            )}

            {/* Ícones lado direito */}
            {!isMobile && (
                <HStack spacing={4} ml={4}>
                    <Icon as={MdTextIncrease} fontSize="lg" cursor="pointer" />
                    <Icon as={MdTextDecrease} fontSize="lg" cursor="pointer" />
                    <Icon as={FaQuestionCircle} fontSize="lg" cursor="pointer" />
                    <Icon as={FaBell} fontSize="lg" cursor="pointer" />
                    <Avatar size="sm" name="Usuário" />
                </HStack>
            )}

            {/* Mobile Bell Icon */}
            {isMobile && (
                <Box position="absolute" right="1rem">
                    <Icon as={FaBell} fontSize="lg" cursor="pointer" />
                </Box>
            )}
        </Flex>
    )
}

export default Header