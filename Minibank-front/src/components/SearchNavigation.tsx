import {
    Box, InputGroup, InputLeftElement, Input, Icon, List, ListItem,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sidebarRoutes } from "../routes/SidebarRoutes";

const SearchNavigation = () => {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(sidebarRoutes);
    const navigate = useNavigate();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        setFiltered(
            sidebarRoutes.filter((page) =>
                page.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setSearch("");
        setFiltered([]);
    };

    return (
        <Box position="relative" w="100%" maxW="600px">
            <InputGroup>
                <Input
                    placeholder="Digite aqui sua busca"
                    bg="gray.100"
                    color="gray.800"
                    _placeholder={{ color: "gray.500" }}
                    borderRadius="md"
                    value={search}
                    onChange={handleSearchChange}
                />
                <InputLeftElement pointerEvents="none">
                    <Icon as={FaSearch} color="gray.500" />
                </InputLeftElement>
            </InputGroup>

            {search && filtered.length > 0 && (
                <Box
                    bg="white"
                    color="black"
                    mt={2}
                    rounded="md"
                    shadow="md"
                    position="absolute"
                    width="100%"
                    zIndex="999"
                >
                    <List spacing={1}>
                        {filtered.map((page) => (
                            <ListItem
                                key={page.path}
                                px={4}
                                py={2}
                                _hover={{ bg: "gray.100", cursor: "pointer" }}
                                onClick={() => handleNavigate(page.path)}
                            >
                                {page.name}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    );
};

export default SearchNavigation;