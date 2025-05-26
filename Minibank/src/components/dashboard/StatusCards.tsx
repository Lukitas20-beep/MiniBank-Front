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
import { useFontSize } from '../../context/FontSizeContext'; // ajuste o caminho se necessário

// Interface para a conta única
interface AccountData {
    balance: number;
}

// Interface para os cartões
interface CardData {
    label: string;
    limit: number;
}

// Props atualizadas do componente
interface StatusCardsProps {
    account: AccountData;
    selectedCard: string;
    cards: CardData[];
    onSelectCard: (value: string) => void;
}

const StatusCards = ({
    account,
    selectedCard,
    cards,
    onSelectCard,
}: StatusCardsProps) => {
    // A busca pelo cartão continua igual
    const currentCard = cards.find((c) => c.label === selectedCard);
    const { fontSize } = useFontSize();

    // --- CORREÇÃO ADICIONADA ---
    // Esta verificação impede que o componente quebre se 'account' ou 'currentCard'
    // forem indefinidos. Se os dados não estiverem prontos, ele não renderiza nada.
    // Isso resolve o problema da tela em branco.
    if (!account || !currentCard) {
        return null;
    }
    // --- FIM DA CORREÇÃO ---

    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'stretch', md: 'center' }}
            gap={4}
            wrap="wrap"
        >
            <Flex direction={{ base: 'column', md: 'row' }} flex="1" gap={4}>

                {/* Card da Conta Corrente */}
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
                            💰 Conta Corrente
                        </Text>
                    </Flex>
                    <Text fontSize="xs" color="gray.500">Saldo disponível:</Text>
                    <Text fontSize={fontSize} fontWeight="semibold" color="green.500">
                        R$ {account.balance.toFixed(2)}
                    </Text>
                </Box>

                {/* Card do Cartão */}
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
                        {/* Como a verificação acima já garante que 'currentCard' existe,
                            o '?' (optional chaining) não é mais estritamente necessário aqui,
                            mas mantê-lo não causa problemas. */}
                        R$ {currentCard.limit.toFixed(2)}
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default StatusCards;