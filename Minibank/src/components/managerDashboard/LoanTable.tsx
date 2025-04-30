import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    Button,
    Stack,
    Badge,
    useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import LoanRequestModal from './LoanRequestModal'

interface Pedido {
    id: number
    nome: string
    valor: number
    status: 'Aprovado' | 'Pendente' | 'Rejeitado'
    data: string
}

interface LoanRequestTableProps {
    pedidos: Pedido[]
}

const getStatusColor = (status: Pedido['status']) => {
    switch (status) {
        case 'Aprovado':
            return 'green'
        case 'Pendente':
            return 'orange'
        case 'Rejeitado':
            return 'red'
        default:
            return 'gray'
    }
}

export default function LoanRequestTable({ pedidos }: LoanRequestTableProps) {
    const isMobile = useBreakpointValue({ base: true, md: false })

    const [selectedPedido, setSelectedPedido] = useState<Pedido | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = (pedido: Pedido) => {
        setSelectedPedido(pedido)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setSelectedPedido(null)
        setIsModalOpen(false)
    }

    if (isMobile) {
        return (
            <>
                <Stack spacing={4}>
                    {pedidos.map((p) => (
                        <Box
                            key={p.id}
                            p={4}
                            shadow="sm"
                            bg="white"
                            rounded="md"
                            border="1px solid"
                            borderColor="gray.200"
                        >
                            <Text><strong>Cliente:</strong> {p.nome}</Text>
                            <Text>
                                <strong>Status:</strong>{' '}
                                <Badge colorScheme={getStatusColor(p.status)}>{p.status}</Badge>
                            </Text>
                            <Button mt={2} size="sm" colorScheme="blue" onClick={() => handleOpenModal(p)}>
                                Detalhes
                            </Button>
                        </Box>
                    ))}
                </Stack>
                <LoanRequestModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    pedido={selectedPedido}
                />
            </>
        )
    }

    return (
        <>
            <Box bg="white" rounded="md" shadow="sm" overflowX="auto">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Cliente</Th>
                            <Th>Status</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {pedidos.map((p) => (
                            <Tr key={p.id}>
                                <Td>{p.nome}</Td>
                                <Td>
                                    <Badge colorScheme={getStatusColor(p.status)}>{p.status}</Badge>
                                </Td>
                                <Td>
                                    <Button size="sm" colorScheme="blue" onClick={() => handleOpenModal(p)}>
                                        Detalhes
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <LoanRequestModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                pedido={selectedPedido}
            />
        </>
    )
}

// Removed redundant return block causing the error