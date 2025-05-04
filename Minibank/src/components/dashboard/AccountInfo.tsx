import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { useFontSize } from '../../context/FontSizeContext';

interface AccountInfoProps {
    name: string;
    agency: string;
    account: string;
}

const AccountInfo = ({ name, agency, account }: AccountInfoProps) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    const { fontSize } = useFontSize();

    return (
        <Box
            maxW="100%" // impede ultrapassar largura
            w="full"
            bg="white"
            py={{ base: 4, md: 6 }}
            px={{ base: 4, md: 6 }}
            borderRadius="lg"
            boxShadow="lg"
            border="1px solid"
            borderColor="gray.100"
            transition="all 0.3s ease-in-out"
            _hover={{
                boxShadow: '2xl',
                transform: 'scale(1.05)',
                borderColor: 'teal.500',
            }}
        >
            <Flex
                justify="start"
                align="center"
                direction={{ base: 'column', md: 'row' }}
                wrap="wrap"
                gap={{ base: 4, md: 8 }}
            >
                {/* Saudação ao usuário */}
                <Text
                    color="#008000"
                    fontSize={fontSize}
                    fontWeight="bold"
                    textAlign={isMobile ? 'center' : 'left'}
                    lineHeight={1.6}
                    mb={{ base: 2, md: 0 }}
                >
                    Olá, <strong>{name}</strong>
                </Text>

                {/* Informações da conta */}
                <Text
                    color="gray.700"
                    fontWeight="semibold"
                    fontSize={fontSize}
                    textAlign={isMobile ? 'center' : 'left'}
                    lineHeight={1.6}
                    letterSpacing="0.5px"
                >
                    Ag {agency} Cc {account}
                </Text>
            </Flex>
        </Box>
    );
};

export default AccountInfo;