// EditClientModal.tsx
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
    useDisclosure,
    IconButton,
    Tooltip,
} from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'
import { useState } from 'react'

interface Cliente {
    nome: string
    agencia: string
    conta: string
    saldo: string
}

// EditClientModal.tsx
export function EditClientModal({
    cliente,
    onSave,
}: {
    cliente: Cliente
    onSave: (novoCliente: Cliente) => void
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [form, setForm] = useState(cliente)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        onSave(form)
        onClose()
    }

    return (
        <>
            <Tooltip label="Editar" hasArrow>
                <IconButton
                    icon={<FaEdit />}
                    aria-label="Editar"
                    size="sm"
                    color="blue.600"
                    variant="outline"
                    borderColor="blue.600"
                    _hover={{ bg: 'blue.600', color: 'white' }}
                    onClick={onOpen}
                />
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent my="auto">
                    <ModalHeader>Editar Cliente</ModalHeader>
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
                            _hover={{ bg: '#006400' }} // um verde um pouco mais escuro no hover
                            mr={3}
                            onClick={handleSave}
                        >
                            Salvar
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}