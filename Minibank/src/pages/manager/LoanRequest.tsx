import { Heading, Box } from '@chakra-ui/react'
import DashboardLayout from '../../components/managerDashboard/DashboardLayout'
import LoanRequestTable from '../../components/managerDashboard/LoanTable'

const LoanRequests = () => {
    const pedidos: { id: number; nome: string; valor: number; status: "Aprovado" | "Pendente" | "Rejeitado"; data: string; }[] = [
        { id: 1, nome: 'João Silva', valor: 1500, status: 'Aprovado', data: '10/04/2025' },
        { id: 2, nome: 'Maria Souza', valor: 3000, status: 'Pendente', data: '15/04/2025' },
        { id: 3, nome: 'Carlos Lima', valor: 500, status: 'Rejeitado', data: '20/04/2025' },
    ]

    return (
        <DashboardLayout>
            <Box mb={6}>
                <Heading size="lg">Pedidos de Empréstimo</Heading>
            </Box>
            <LoanRequestTable pedidos={pedidos} />
        </DashboardLayout>
    )
}

export default LoanRequests