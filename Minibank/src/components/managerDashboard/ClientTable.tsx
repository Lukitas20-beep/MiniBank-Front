// ClientTable.tsx
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Text,
    useBreakpointValue,
    Button,
    Flex,
    useDisclosure,
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { ViewClientModal } from './ViewClientModal'
import { EditClientModal } from './EditClientModal'
import { AddClientModal } from './AddClientModal'
import { useState } from 'react'

export interface Cliente {
    nome: string
    agencia: string
    conta: string
    saldo: string
}

interface ClientTableProps {
    clientes: Cliente[]
}

export default function ClientTable({ clientes: initialClientes }: ClientTableProps) {
    const isMobile = useBreakpointValue({ base: true, md: false }) ?? false
    const [clientes, setClientes] = useState<Cliente[]>(initialClientes)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const atualizarCliente = (index: number, novoCliente: Cliente) => {
        const novos = [...clientes]
        novos[index] = novoCliente
        setClientes(novos)
    }

    const adicionarCliente = (novoCliente: Cliente) => {
        setClientes([...clientes, novoCliente])
        onClose()  // Fecha o modal após adicionar o cliente
    }

    const renderAddButton = () => (
        <>
            <Button
                leftIcon={<FaPlus />}
                colorScheme="green"
                width="full"
                mt={isMobile ? 2 : 0}
                onClick={onOpen} // Abre o modal
            >
                Adicionar Cliente
            </Button>
            <AddClientModal isOpen={isOpen} onClose={onClose} onAdd={adicionarCliente} />
        </>
    )

    if (isMobile) {
        return (
            <Stack spacing={4}>
                {clientes.map((cliente, i) => (
                    <Box
                        key={i}
                        p={5}
                        shadow="md"
                        rounded="lg"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200"
                        transition="all 0.2s ease"
                        _hover={{ shadow: 'lg', transform: 'scale(1.01)' }}
                    >
                        <Text fontSize="xl" fontWeight="bold" color="gray.900">
                            {cliente.nome}
                        </Text>
                        <Text color="gray.700"><strong>Agência:</strong> {cliente.agencia}</Text>
                        <Text color="gray.700"><strong>Conta:</strong> {cliente.conta}</Text>
                        <Text mt={2} color="#008000" fontWeight="semibold"><strong>Saldo:</strong> {cliente.saldo}</Text>

                        <Flex mt={4} gap={2}>
                            <ViewClientModal cliente={cliente} />
                            <EditClientModal cliente={cliente} onSave={(novo) => atualizarCliente(i, novo)} />
                        </Flex>
                    </Box>
                ))}
                {renderAddButton()}
            </Stack>
        )
    }

    return (
        <Box bg="white" rounded="lg" shadow="md" p={6}>
            <Table variant="simple" size="md">
                <Thead bg="#008000">
                    <Tr>
                        <Th color="white">Nome</Th>
                        <Th color="white">Agência</Th>
                        <Th color="white">Conta</Th>
                        <Th color="white">Saldo</Th>
                        <Th color="white">Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {clientes.map((c, i) => (
                        <Tr key={i} _hover={{ bg: 'gray.100' }}>
                            <Td>{c.nome}</Td>
                            <Td>{c.agencia}</Td>
                            <Td>{c.conta}</Td>
                            <Td color="#008000" fontWeight="semibold">{c.saldo}</Td>
                            <Td>
                                <Flex gap={2}>
                                    <ViewClientModal cliente={c} />
                                    <EditClientModal cliente={c} onSave={(novo) => atualizarCliente(i, novo)} />
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Box mt={6}>
                {renderAddButton()}
            </Box>
        </Box>
    )
}