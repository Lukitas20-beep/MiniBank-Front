import {
    Box,
    Flex,
    Text,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Circle,
} from '@chakra-ui/react'
import { MdOutlineDone } from 'react-icons/md'
import { ChevronDownIcon } from '@chakra-ui/icons'

interface StatusCardsProps {
    selectedAccount: string
    accounts: string[]
    onSelectAccount: (value: string) => void
    selectedCard: string
    cards: string[]
    onSelectCard: (value: string) => void
    statusLabel: string
}

const StatusCards = ({
    selectedAccount,
    accounts,
    onSelectAccount,
    selectedCard,
    cards,
    onSelectCard,
    statusLabel,
}: StatusCardsProps) => {
    return (
        <Flex gap={4} wrap="wrap" align="center">
            {/* Card de saldo disponível com menu */}
            <Box flex="1" bg="white" p={5} rounded="md" boxShadow="sm">
                <Flex justify="space-between" align="center">
                    <Text fontWeight="semibold" fontSize="lg">💲 {selectedAccount}</Text>
                    <Menu>
                        <MenuButton
                            as={Button}
                            size="sm"
                            variant="ghost"
                            rightIcon={<ChevronDownIcon />}
                            fontSize="md"
                            fontWeight="medium"
                        />
                        <MenuList>
                            {accounts.map((acc, i) => (
                                <MenuItem key={i} onClick={() => onSelectAccount(acc)} fontSize="md">
                                    {acc}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>

            {/* Card de cartão com menu */}
            <Box flex="1" bg="blackAlpha.900" color="white" p={5} rounded="md" boxShadow="sm">
                <Flex justify="space-between" align="center">
                    <Text fontWeight="semibold" fontSize="lg">{selectedCard}</Text>
                    <Menu>
                        <MenuButton
                            as={Button}
                            size="sm"
                            variant="ghost"
                            color="whiteAlpha.800"
                            rightIcon={<ChevronDownIcon />}
                            fontSize="md"
                            fontWeight="medium"
                        />
                        <MenuList color="black">
                            {cards.map((card, i) => (
                                <MenuItem key={i} onClick={() => onSelectCard(card)} fontSize="md">
                                    {card}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>

            {/* Status - Preenchimento */}
            <Flex align="center" gap={2}>
                <Circle size="6" bg="green.500">
                    <Icon as={MdOutlineDone} color="white" boxSize={4} />
                </Circle>
                <Text color="green.600" fontWeight="semibold" fontSize="lg">
                    {statusLabel}
                </Text>
            </Flex>
        </Flex>
    )
}

export default StatusCards