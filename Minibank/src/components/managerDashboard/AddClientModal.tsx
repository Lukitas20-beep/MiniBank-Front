import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { useState } from 'react'

interface Cliente {
    nome: string
    agencia: string
    conta: string
    saldo: string
}

interface AddClientModalProps {
    isOpen: boolean
    onClose: () => void
    onAdd: (novoCliente: Cliente) => void
}

export function AddClientModal({ isOpen, onClose, onAdd }: AddClientModalProps) {
    const [form, setForm] = useState<Cliente>({
        nome: '',
        agencia: '',
        conta: '',
        saldo: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleAdd = () => {
        onAdd(form)  // Passa o cliente adicionado para o componente pai
        onClose()  // Fecha o modal após a adição
        setForm({ nome: '', agencia: '', conta: '', saldo: '' }) // Reseta o formulário
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my="auto">
                <ModalHeader>Novo Cliente</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl mb={3}>
                        <FormLabel>Nome</FormLabel>
                        <Input name="nome" value={form.nome} onChange={handleChange} />
                    </FormControl>
                    <FormControl mb={3}>
                        <FormLabel>Agência</FormLabel>
                        <Input name="agencia" value={form.agencia} onChange={handleChange} />
                    </FormControl>
                    <FormControl mb={3}>
                        <FormLabel>Conta</FormLabel>
                        <Input name="conta" value={form.conta} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Saldo</FormLabel>
                        <Input name="saldo" value={form.saldo} onChange={handleChange} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        bg="#008000"
                        color="white"
                        _hover={{ bg: '#006400' }}
                        mr={3}
                        onClick={handleAdd}
                    >
                        Adicionar
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}