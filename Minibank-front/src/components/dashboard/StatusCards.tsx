import {
    Box,
    Flex,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useFontSize } from '../../context/FontSizeContext';

interface AccountData {
    balance: number;
}

interface CardData {
    label: string;
    limit: number;
}

interface StatusCardsProps {
    account: AccountData;
    accountIdentifier?: string; // Nova prop: opcional, para o número/rótulo da conta
    selectedCard: string;
    cards: CardData[];
    onSelectCard: (value: string) => void;
}

const StatusCards = ({
    account,
    accountIdentifier, // Usar a nova prop
    selectedCard,
    cards,
    onSelectCard,
}: StatusCardsProps) => {
    const currentCard = cards.find((c) => c.label === selectedCard);
    const { fontSize } = useFontSize();

    if (!account || !currentCard) {
        return null;
    }

    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'stretch', md: 'center' }}
            gap={4}
            wrap="wrap"
        >
            <Flex direction={{ base: 'column', md: 'row' }} flex="1" gap={4}>
                <Box
                    flex="1"
                    bg="white"
                    borderWidth="1px"
                    borderColor="gray.200"
                    rounded="lg"
                    p={4}
                    _hover={{ boxShadow: 'md' }}
                    transition="all 0.2s"
                >
                    <Flex justify="space-between" align="center" mb={1}>
                        <Text fontWeight="medium" fontSize={fontSize} color="gray.700">
                            {/* Usa o identificador se fornecido, senão usa "Conta Corrente" */}
                            💰 {accountIdentifier || 'Conta Corrente'}
                        </Text>
                    </Flex>
                    <Text fontSize="xs" color="gray.500">Saldo disponível:</Text>
                    <Text fontSize={fontSize} fontWeight="semibold" color="green.500">
                        R$ {account.balance.toFixed(2)}
                    </Text>
                </Box>

                {/* Card do Cartão (sem alterações) */}
                <Box
                    flex="1"
                    bg="gray.900"
                    color="white"
                    borderWidth="1px"
                    borderColor="gray.700"
                    rounded="lg"
                    p={4}
                    _hover={{ boxShadow: 'md' }}
                    transition="all 0.2s"
                >
                    <Flex justify="space-between" align="center" mb={1}>
                        <Text fontWeight="medium" fontSize={fontSize}>
                            {selectedCard}
                        </Text>
                        <Menu>
                            <MenuButton
                                as={Button}
                                size="xs"
                                variant="ghost"
                                color="whiteAlpha.800"
                                _hover={{ bg: 'whiteAlpha.300' }}
                                _active={{ bg: 'whiteAlpha.400' }}
                                rightIcon={<ChevronDownIcon />}
                                fontSize={fontSize}
                                fontWeight="normal"
                            />
                            <MenuList color="black">
                                {cards.map((card, i) => (
                                    <MenuItem key={i} onClick={() => onSelectCard(card.label)}>
                                        {card.label}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Text fontSize="xs" color="whiteAlpha.700">Limite disponível:</Text>
                    <Text fontSize={fontSize} fontWeight="semibold" color="green.300">
                        R$ {currentCard.limit.toFixed(2)}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default StatusCards;