import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Button,
    Badge,
    Stack,
    useBreakpointValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Pedido {
    id: number
    nome: string
    valor: number
    status: 'Aprovado' | 'Pendente' | 'Rejeitado'
    data: string
}

interface LoanRequestModalProps {
    isOpen: boolean
    onClose: () => void
    pedido: Pedido | null
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

export default function LoanRequestModal({ isOpen, onClose, pedido }: LoanRequestModalProps) {
    const [pedidoAtual, setPedidoAtual] = useState<Pedido | null>(pedido)
    const isMobile = useBreakpointValue({ base: true, md: false })

    useEffect(() => {
        setPedidoAtual(pedido)
    }, [pedido])

    if (!pedidoAtual) return null

    const handleUpdateStatus = (novoStatus: Pedido['status']) => {
        setPedidoAtual({ ...pedidoAtual, status: novoStatus })
        // Aqui você pode disparar uma chamada para API se necessário
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={isMobile ? 'xs' : 'md'}>
            <ModalOverlay />
            <ModalContent maxW="sm" mx={isMobile ? 4 : 'auto'}>
                <ModalHeader fontSize={isMobile ? 'lg' : 'xl'}>Detalhes do Pedido</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={3} fontSize={isMobile ? 'sm' : 'md'}>
                        <Text><strong>Cliente:</strong> {pedidoAtual.nome}</Text>
                        <Text><strong>Valor:</strong> R$ {pedidoAtual.valor.toFixed(2)}</Text>
                        <Text><strong>Data:</strong> {pedidoAtual.data}</Text>
                        <Text>
                            <strong>Status:</strong>{' '}
                            <Badge colorScheme={getStatusColor(pedidoAtual.status)}>
                                {pedidoAtual.status}
                            </Badge>
                        </Text>
                    </Stack>
                </ModalBody>

                <ModalFooter flexDirection={isMobile ? 'column' : 'row'} gap={2}>
                    <Stack
                        direction={isMobile ? 'column' : 'row'}
                        spacing={isMobile ? 2 : 3}
                        width="100%"
                        justify={isMobile ? 'center' : 'flex-start'}
                    >
                        <Button
                            colorScheme="green"
                            variant={pedidoAtual.status === 'Aprovado' ? 'solid' : 'outline'}
                            onClick={() => handleUpdateStatus('Aprovado')}
                            width={isMobile ? '100%' : 'auto'}
                        >
                            Aprovar
                        </Button>
                        <Button
                            colorScheme="red"
                            variant={pedidoAtual.status === 'Rejeitado' ? 'solid' : 'outline'}
                            onClick={() => handleUpdateStatus('Rejeitado')}
                            width={isMobile ? '100%' : 'auto'}
                        >
                            Rejeitar
                        </Button>
                    </Stack>
                    <Button onClick={onClose} mt={isMobile ? 2 : 0} width={isMobile ? '100%' : 'auto'}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}