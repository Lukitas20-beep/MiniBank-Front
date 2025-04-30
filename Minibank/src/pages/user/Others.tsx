import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Others = () => {

    // Chakra menu disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" bg="white">
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Header onOpenMenu={onOpen} />
            </Box>

            <Flex pt="64px">
                <Sidebar isOpen={isOpen} onClose={onClose} />

                <Box ml={{ base: 0, md: '0' }} flex="1" p={6}>
                    <Text fontSize="2xl" fontWeight="bold">Outros</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Others
