🏦 Banco Digital Full-Stack
📖 Sobre o Projeto
Este é um projeto de um Banco Digital completo, desenvolvido para demonstrar a integração entre um back-end robusto construído com Java e Spring Boot e um front-end moderno e interativo utilizando React, TypeScript e Chakra UI. O sistema simula funcionalidades bancárias essenciais, oferecendo diferentes níveis de acesso e operações para clientes e gerentes.

✨ Funcionalidades Principais
O sistema é dividido em dois perfis principais, cada um com seu conjunto de funcionalidades:

👤 Para Clientes:

Autenticação Segura: Login para acesso à conta pessoal.

Cadastro de Novo Usuário: Permite que novos clientes criem as suas contas.

Dashboard do Cliente: Visualização de saldo, informações da conta e atalhos para operações.

Realizar Transferências: Envio de valores para outras contas (internas ou externas, dependendo da implementação).

Visualizar Extratos: Acesso ao histórico detalhado de todas as transações (entradas e saídas).

Solicitar Empréstimos: Funcionalidade para clientes solicitarem análises de crédito e empréstimos.

💼 Para Gerentes:

Autenticação Segura: Login para acesso ao painel de gerenciamento.

Dashboard Gerencial: Visão geral das atividades do banco, como número de clientes, total de empréstimos solicitados, etc.

Visualizar Usuários Cadastrados: Listagem de todos os clientes registados na plataforma, com possibilidade de visualizar detalhes.

Gerenciar Pedidos de Empréstimos: Acesso aos pedidos de empréstimos feitos pelos clientes para análise, aprovação ou recusa.

🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando um stack moderno e robusto:

💻 Front-end:

React (v18+): Biblioteca JavaScript para a construção de interfaces de utilizador componentizadas e reativas.

TypeScript (v5+): Superset do JavaScript que adiciona tipagem estática, aumentando a robustez e a manutenibilidade do código.

Chakra UI: Biblioteca de componentes UI que oferece blocos de construção acessíveis, modulares e personalizáveis para acelerar o desenvolvimento.

Axios: Cliente HTTP baseado em Promises para realizar requisições à API do back-end.

React Router DOM: Para gerenciamento de rotas na aplicação single-page.

⚙️ Back-end:

Java (v17+): Linguagem de programação principal, conhecida pela sua performance e ecossistema maduro.

Spring Boot (v3+): Framework que simplifica a criação de aplicações Java stand-alone e prontas para produção.

Spring Security: Para gerenciamento de autenticação e autorização, garantindo a segurança da API.

Spring Data JPA: Para facilitar a persistência de dados e a interação com o banco de dados relacional.

Maven/Gradle: Gerenciador de dependências e ferramenta de build para o projeto Java.

Banco de Dados Relacional (Ex: PostgreSQL, MySQL, H2): Para armazenamento persistente dos dados da aplicação.

🚀 Como Executar o Projeto Localmente
Siga os passos abaixo para configurar e executar o projeto no seu ambiente de desenvolvimento.

Pré-requisitos:

Git instalado.

Java JDK 17 (ou superior) instalado e configurado (variável de ambiente JAVA_HOME definida).

Maven (v3.8+) ou Gradle (v7.5+) instalado e configurado (adicionado ao PATH do sistema).

Node.js v18 (ou superior) e npm (ou yarn) instalados.

Uma instância de um banco de dados relacional (ex: PostgreSQL) a rodar e acessível, ou configure o projeto para usar um banco em memória como o H2 para desenvolvimento.

1. Clonando o Repositório:

git clone [https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git)
cd NOME_DO_SEU_REPOSITORIO

2. Configurando e Executando o Back-end (Java + Spring Boot):

# Navegue até à pasta do back-end (ex: /backend)
cd backend

# Configure as propriedades do banco de dados no arquivo:
# src/main/resources/application.properties (ou application.yml)
# Exemplo para PostgreSQL:
# spring.datasource.url=jdbc:postgresql://localhost:5432/banco_digital_db
# spring.datasource.username=seu_usuario_db
# spring.datasource.password=sua_senha_db
# spring.jpa.hibernate.ddl-auto=update # ou create-drop para desenvolvimento

# Compile e execute a aplicação Spring Boot
# Usando Maven:
./mvnw spring-boot:run
# Usando Gradle:
./gradlew bootRun

# O servidor back-end estará a rodar, por padrão, em http://localhost:8080

3. Configurando e Executando o Front-end (React + TypeScript):

# Num novo terminal, navegue até à pasta do front-end (ex: /frontend)
cd ../frontend # ou o caminho correto para a sua pasta frontend

# Instale as dependências do projeto
npm install
# ou
yarn install

# Crie um arquivo .env na raiz da pasta 'frontend' (se não existir)
# e adicione a URL base da sua API do back-end:
# Exemplo:
# REACT_APP_API_BASE_URL=http://localhost:8080/api

# Inicie a aplicação React
npm start
# ou
yarn start

# A aplicação front-end estará acessível, por padrão, em http://localhost:3000

Após esses passos, deverá conseguir aceder à aplicação no seu navegador e testar as funcionalidades.

🗺️ Estrutura de Endpoints da API (Exemplos)
Abaixo alguns exemplos de endpoints que podem existir na API RESTful do back-end:

Método HTTP

Endpoint

Descrição

Protegido?

POST

/auth/login

Autentica um utilizador ou gerente.

Não

POST

/auth/register

Cadastra um novo cliente.

Não

GET

/api/clientes/me

Retorna os dados do cliente logado.

Sim (Cliente)

POST

/api/transferencias

Realiza uma nova transferência.

Sim (Cliente)

GET

/api/extratos

Retorna o extrato bancário do cliente logado.

Sim (Cliente)

POST

/api/emprestimos/solicitar

Cliente solicita um novo empréstimo.

Sim (Cliente)

GET

/api/gerente/usuarios

(Gerente) Lista todos os utilizadores cadastrados.

Sim (Gerente)

GET

/api/gerente/emprestimos

(Gerente) Lista todos os pedidos de empréstimo.

Sim (Gerente)

PUT

/api/gerente/emprestimos/{id}

(Gerente) Aprova ou recusa um pedido de empréstimo.

Sim (Gerente)

Adapte os endpoints conforme a estrutura real da sua API.

🤝 Como Contribuir
Contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que fizer será muito apreciada.

Faça um Fork do projeto.

Crie uma Branch para a sua Feature (git checkout -b feature/MinhaNovaFeature).

Faça o Commit das suas mudanças (git commit -m 'Adicionando MinhaNovaFeature').

Faça o Push para a Branch (git push origin feature/MinhaNovaFeature).

Abra um Pull Request.

📄 Licença
Distribuído sob a Licença MIT. Veja LICENSE.txt para mais informações.

Desenvolvido com ❤️ por [Seu Nome/Nome da Equipa]

