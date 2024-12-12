# Nexus AI - Plataforma de Análise de Métricas de Redes Sociais

Nexus AI é uma plataforma que fornece análises abrangentes de métricas de redes sociais, permitindo que os usuários monitorem seu desempenho, acompanhem as tendências e comparem seus resultados com os concorrentes.  Oferece funcionalidades similares ao Twitter/X, com foco em performance e escalabilidade.

## 🚀 Funcionalidades Principais

- **Análise em Tempo Real:** Acompanhe as principais métricas de desempenho em todas as plataformas em tempo real, com atualizações instantâneas e notificações em tempo real.
- **Relatórios Automatizados:** Gere relatórios completos e personalizáveis sobre seu desempenho com apenas alguns cliques, com opções de agendamento e exportação de dados.
- **Análise da Concorrência:** Compare seu desempenho com o dos seus concorrentes, analise tendências e identifique áreas de melhoria e oportunidades de crescimento.
- **Agendamento de Conteúdo:** Planeje e agende seu conteúdo em várias plataformas com antecedência, com upload em massa,  agendamento personalizado e pré-visualização de posts.
- **Autenticação Segura:** Sistema completo de registro e login utilizando JWT (JSON Web Tokens), com tokens de acesso e refresh para maior segurança e validação robusta de dados.
- **Gestão de Usuários:** Sistema de Follow/Unfollow, perfis personalizados e contagem de seguidores e seguindo.
- **Posts:** Criação e gestão de posts, sistema de curtidas, comentários em posts e feed personalizado baseado em quem o usuário segue.
- **Feed Inteligente:** Agregação de posts do usuário e de quem ele segue, ordenação por data e paginação para melhor performance.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Angular 18, Bootstrap 5, Tailwind CSS, TypeScript, RxJS, @auth0/angular-jwt, @ng-bootstrap/ng-bootstrap.
- **Backend:** Java 17, SpringBoot, Simple JWT, SQLite (ou PostgreSQL em produção).
- **Banco de dados:** PostgreSQL (em produção), SQLite (desenvolvimento).
- **Cache:** Caffeine (a ser implementado).

## 💻 Instalação e Execução

### Backend

1. **Clone o repositório:** `git clone [URL do repositório]`
2. **Navegue até o diretório backend:** `cd backend`

### Frontend

1. **Navegue até o diretório frontend:** `cd frontend`
2. **Instale as dependências:** `npm install`
3. **Execute o servidor de desenvolvimento:** `ng serve`

A aplicação frontend estará disponível em `http://localhost:4200/`.

## 📚 Documentação da API (Backend)

- **Autenticação:**
    - `POST /api/register/`: Cadastro de novo usuário.
    - `POST /api/login/`: Login de usuário.
- **Usuários:**
    - `POST /api/users/{user_id}/follow/`: Seguir usuário.
    - `POST /api/users/{user_id}/unfollow/`: Deixar de seguir usuário.
    - `GET /api/profile/`: Obter perfil do usuário.
- **Posts:**
    - `GET /api/posts/`: Listar feed.
    - `POST /api/posts/`: Criar post.
    - `POST /api/posts/{post_id}/like/`: Curtir/descurtir post.
    - `POST /api/posts/{post_id}/comment/`: Comentar post.


## 📂 Estrutura do Projeto (Frontend)

## Contribuindo

Contribuições são bem-vindas! Por favor, abra uma _issue_ para discutir a mudança ou envie um _pull request_.

## Licença

MIT

## Contato

[Seu nome] - [Seu email]
