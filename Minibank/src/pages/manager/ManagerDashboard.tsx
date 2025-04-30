// src/pages/ManagerDashboard.tsx
import { Heading } from '@chakra-ui/react'
import DashboardLayout from '../../components/managerDashboard/DashboardLayout'
import ClientTable from '../../components/managerDashboard/ClientTable'

const ManagerDashboard = () => {
  const clientes = [
    { nome: 'João Silva', agencia: '1234', conta: '56789-0', saldo: 'R$ 1.200,00' },
    { nome: 'Maria Souza', agencia: '5678', conta: '12345-6', saldo: 'R$ 850,50' },
    { nome: 'Carlos Lima', agencia: '1010', conta: '78901-2', saldo: 'R$ 3.000,00' },
  ]

  return (
    <DashboardLayout>
      <Heading mb={4}>Painel de clientes</Heading>
      <ClientTable clientes={clientes} />
    </DashboardLayout>
  )
}

export default ManagerDashboard