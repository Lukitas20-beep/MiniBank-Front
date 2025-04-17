import {
    Flex,
} from '@chakra-ui/react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import StatusCards from '../components/StatusCards'
import CardSelection from '../components/CardSelection'
import PaymentOption from '../components/PaymentOption'
import PaymentDate from '../components/PaymentDate'

const Dashboard = () => {
    return (
    <Flex minH="100vh" bg="gray.100">
        <Sidebar />
        <Flex direction="column" flex="1" p={6} gap={6}>
        <Header />
        <StatusCards />
        <Flex gap={4}>
            <CardSelection />
            <PaymentOption />
            <PaymentDate />
        </Flex>
        </Flex>
    </Flex>
    )
}

export default Dashboard
