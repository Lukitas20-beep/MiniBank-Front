import {
    Box,
    Flex,
    useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import StatusCards from '../../components/dashboard/StatusCards'
import CardSelection from '../../components/dashboard/CardSelection'
import PaymentOption from '../../components/dashboard/PaymentOption'
import PaymentDate from '../../components/dashboard/PaymentDate'
import AccountInfo from '../../components/dashboard/AccountInfo'

const Dashboard = () => {
    const name = 'Arthur Campos'
    const ag = '12345'
    const ac = '56789-0'

    // Chakra menu disclosure
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Estados para seleção
    const [cardOption, setCardOption] = useState('pagar')
    const [paymentOption, setPaymentOption] = useState('atualizado')
    const [paymentDate, setPaymentDate] = useState('hoje')

    const [selectedAccount, setSelectedAccount] = useState('Saldo disponível')
    const [selectedCard, setSelectedCard] = useState('Cartão final 0000')
    const [statusLabel] = useState('Preenchimento')

    const accounts = [
        { label: 'Saldo disponível', balance: 1542.75 },
        { label: 'Conta Corrente', balance: 800.00 },
        { label: 'Conta Poupança', balance: 1200.50 },
    ]

    const cards = [
        { label: 'Cartão final 0000', limit: 2000.00 },
        { label: 'Cartão final 1234', limit: 1500.00 },
    ]

    return (
        <Box minH="100vh" bg="gray.50">
            {/* Header fixo com controle de menu */}
            <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
                <Header onOpenMenu={onOpen} />
            </Box>

            <Flex pt="64px">
                <Sidebar isOpen={isOpen} onClose={onClose} />

                <Box ml={{ base: 0, md: '0' }} flex="1" p={6}>
                    <AccountInfo name={name} agency={ag} account={ac} />

                    <Flex
                        flexDirection="column"
                        gap={4}
                        mt={6}
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <StatusCards
                            selectedAccount={selectedAccount}
                            accounts={accounts}
                            onSelectAccount={setSelectedAccount}
                            selectedCard={selectedCard}
                            cards={cards}
                            onSelectCard={setSelectedCard}
                            statusLabel={statusLabel}
                        />
                    </Flex>

                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={6}
                        mt={6}
                        align="stretch"
                        justify="center"
                    >
                        <Box flex="1">
                            <CardSelection
                                cardName="PLAY DO SANTANDER"
                                cardEnd="0000"
                                totalValue="R$ 1.234,56"
                                dueDate="10/07/2024"
                                selectedOption={cardOption}
                                onChangeOption={setCardOption}
                            />
                        </Box>

                        <Box flex="1">
                            <PaymentOption
                                selectedOption={paymentOption}
                                onChangeOption={setPaymentOption}
                                amountAtualizado="R$ 980,00"
                                amountTotal="R$ 1.234,56"
                            />
                        </Box>

                        <Box flex="1">
                            <PaymentDate
                                selectedDate={paymentDate}
                                onChangeDate={setPaymentDate}
                            />
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Dashboard