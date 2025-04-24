export interface SidebarRoute {
    name: string;
    path: string;
}

export const sidebarRoutes: SidebarRoute[] = [
    { name: "Home", path: "/dashboard" },
    { name: "Conta Corrente", path: "/conta" },
    { name: "Cartões", path: "/cartoes" },
    { name: "Empréstimos", path: "/emprestimos" },
    { name: "Transferências", path: "/transferencias" },
    { name: "Outros", path: "/outros" },
    { name: "Pagamentos", path: "/pagamentos" },
];