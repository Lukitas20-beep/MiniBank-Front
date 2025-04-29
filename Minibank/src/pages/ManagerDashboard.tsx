import {
    Box,
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useDisclosure
} from '@chakra-ui/react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const ManagerDashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const clientes = [
      { nome: 'João Silva', agencia: '1234', conta: '56789-0', saldo: 'R$ 1.200,00' },
      { nome: 'Maria Souza', agencia: '5678', conta: '12345-6', saldo: 'R$ 850,50' },
      { nome: 'Carlos Lima', agencia: '1010', conta: '78901-2', saldo: 'R$ 3.000,00' },
    ]
  
    return (
      <Box minH="100vh" bg="gray.50">
        <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
          <Header onOpenMenu={onOpen} />
        </Box>
  
        <Flex pt="64px">
          <Sidebar isOpen={isOpen} onClose={onClose} />
  
          <Box ml={{ base: 0, md: '0' }} flex="1" p={6}>
            <Heading mb={4}>Painel do Gerente</Heading>
  
            <Table variant="simple" bg="white" rounded="md" shadow="sm">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Agência</Th>
                  <Th>Conta</Th>
                  <Th>Saldo</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clientes.map((c, i) => (
                  <Tr key={i}>
                    <Td>{c.nome}</Td>
                    <Td>{c.agencia}</Td>
                    <Td>{c.conta}</Td>
                    <Td>{c.saldo}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    )
  }
  
export default ManagerDashboard
  
