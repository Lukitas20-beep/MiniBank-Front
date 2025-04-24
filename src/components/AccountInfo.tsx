import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'

interface AccountInfoProps {
    name: string
    agency: string
    account: string
}

const AccountInfo = ({ name, agency, account }: AccountInfoProps) => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Box
            bg="white"
            py={6}
            px={6}
            borderRadius="md"
            boxShadow="sm"
            borderBottom="2px solid"
            borderColor="gray.200"
        >
            <Flex
                justify="start"
                align="center"
                wrap="wrap"
                gap={{ base: 2, md: 8 }} // espaçamento horizontal entre os itens
            >
                <Text color="gray.600" fontSize="xl">
                    Olá, <strong>{name}</strong>
                </Text>
                <Text
                    color="gray.600"
                    fontWeight="bold"
                    fontSize="xl"
                    mt={{ base: 2, md: 0 }}
                >
                    Ag {agency} Cc {account}
                </Text>
            </Flex>
        </Box>
    )
}

export default AccountInfo