// ViewClientModal.tsx
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    useDisclosure,
    IconButton,
    Tooltip,
} from '@chakra-ui/react'
import { FaEye } from 'react-icons/fa'

interface Cliente {
    nome: string
    agencia: string
    conta: string
    saldo: string
}

export function ViewClientModal({ cliente }: { cliente: Cliente }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Tooltip label="Visualizar" hasArrow>
                <IconButton
                    icon={<FaEye />}
                    aria-label="Visualizar"
                    size="sm"
                    color="#008000"
                    variant="outline"
                    borderColor="#008000"
                    _hover={{ bg: '#008000', color: 'white' }}
                    onClick={onOpen}
                />
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent my="auto">
                    <ModalHeader>Detalhes do Cliente</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text><strong>Nome:</strong> {cliente.nome}</Text>
                        <Text><strong>Agência:</strong> {cliente.agencia}</Text>
                        <Text><strong>Conta:</strong> {cliente.conta}</Text>
                        <Text><strong>Saldo:</strong> {cliente.saldo}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}