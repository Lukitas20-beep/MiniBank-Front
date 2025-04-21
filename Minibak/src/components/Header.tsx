import {
    Box,
    Flex,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Icon,
    HStack,
    Avatar,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FaSearch, FaQuestionCircle, FaBell } from 'react-icons/fa'
import { MdTextIncrease, MdTextDecrease } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

interface HeaderProps {
    onOpenMenu: () => void
}

const Header = ({ onOpenMenu }: HeaderProps) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Flex
            bg="gray.900"
            color="white"
            px={6}
            py={3}
            align="center"
            justify={isMobile ? 'center' : 'space-between'}
            boxShadow="sm"
            position="relative"
        >
            {/* Logo centralizado */}
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                <Text as="span" color="white">Mini</Text>
                <Text as="span" color="#008000">Bank</Text>
            </Text>

            {/* Desktop: Campo de busca + ícones */}
            {!isMobile && (
                <>
                    <InputGroup maxW="600px" flex={1} mx={8}>
                        <Input
                            placeholder="Digite aqui sua busca"
                            bg="gray.100"
                            color="gray.800"
                            _placeholder={{ color: "gray.500" }}
                            borderRadius="md"
                        />
                        <InputLeftElement pointerEvents="none">
                            <Icon as={FaSearch} color="gray.500" />
                        </InputLeftElement>
                    </InputGroup>

                    <HStack spacing={4} ml={4}>
                        <Icon as={MdTextIncrease} fontSize="lg" cursor="pointer" />
                        <Icon as={MdTextDecrease} fontSize="lg" cursor="pointer" />
                        <Icon as={FaQuestionCircle} fontSize="lg" cursor="pointer" />
                        <Icon as={FaBell} fontSize="lg" cursor="pointer" />
                        <Avatar size="sm" name="Usuário" />
                    </HStack>
                </>
            )}

            {/* Mobile: menu e sino */}
            {isMobile && (
                <>
                    <Box position="absolute" left="1rem">
                        <Icon
                            as={FiMenu}
                            fontSize="xl"
                            cursor="pointer"
                            onClick={onOpenMenu}
                        />
                    </Box>
                    <Box position="absolute" right="1rem">
                        <Icon as={FaBell} fontSize="lg" cursor="pointer" />
                    </Box>
                </>
            )}
        </Flex>
    )
}

export default Header