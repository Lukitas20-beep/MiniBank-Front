// src/components/ClientTable.tsx
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
} from '@chakra-ui/react'

interface Cliente {
    nome: string
    agencia: string
    conta: string
    saldo: string
}

interface ClientTableProps {
    clientes: Cliente[]
}

export default function ClientTable({ clientes }: ClientTableProps) {
    const isMobile = useBreakpointValue({ base: true, md: false })

    if (isMobile) {
        return (
            <Stack spacing={4}>
                {clientes.map((cliente, i) => (
                    <Box
                        key={i}
                        p={4}
                        shadow="sm"
                        rounded="md"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200"
                    >
                        <Text><strong>Nome:</strong> {cliente.nome}</Text>
                        <Text><strong>Agência:</strong> {cliente.agencia}</Text>
                        <Text><strong>Conta:</strong> {cliente.conta}</Text>
                        <Text><strong>Saldo:</strong> {cliente.saldo}</Text>
                    </Box>
                ))}
            </Stack>
        )
    }

    return (
        <Box
            bg="white"
            rounded="md"
            shadow="sm"
            width="100%"
        >
            <Table variant="simple">
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
    )
}