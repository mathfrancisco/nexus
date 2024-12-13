# Nexus AI - Plataforma de Análise de Métricas de Redes Sociais

Nexus AI é uma plataforma abrangente que capacita usuários a analisar o desempenho em redes sociais, monitorar tendências e comparar resultados com a concorrência. Com visualizações interativas e insights acionáveis, o Nexus AI ajuda a otimizar estratégias de marketing e maximizar o retorno do investimento.

## 🚀 Funcionalidades Principais

- **Métricas de Desempenho:** Acompanhe métricas essenciais como seguidores, taxa de engajamento, interações e muito mais, segmentadas por plataforma.
- **Visualização de Dados:** Explore dados por meio de gráficos e tabelas interativos, permitindo uma análise clara e eficiente.
- **Análise de ROI:** Calcule e monitore o retorno sobre o investimento (ROI) de suas campanhas de marketing em redes sociais.
- **Visão Geral da Plataforma:** Explore os recursos e benefícios do Nexus AI em uma página dedicada.
- **Experiência Aprimorada:** Carregamento assíncrono de dados com indicadores de progresso para uma experiência de usuário otimizada.
- **Design Moderno e Intuitivo:** Interface elegante e fácil de usar, com foco na usabilidade e acessibilidade.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Angular 18, TypeScript, RxJS, Tailwind CSS, Chart.js, Font Awesome.
- **Backend:** Java 17, Spring Boot, Spring MVC, Spring Data JPA.
- **Banco de Dados:** PostgreSQL, SQLite (para desenvolvimento).
- **Cache:** Caffeine (planejado).
- **Outras:** Lombok, Swagger, Docker Compose.

## 💻 Instalação e Execução

### Backend (com Docker Compose)

1. **Clone o repositório:** `git clone https://github.com/seu-usuario/nexus-analytics.git`
2. **Navegue até o diretório raiz:** `cd nexus-analytics`
3. **Inicie os serviços:** `docker-compose up -d`

O backend estará disponível em `http://localhost:8080`.

### Frontend

1. **Navegue até o diretório frontend:** `cd frontend`
2. **Instale as dependências:** `npm install`
3. **Execute o servidor de desenvolvimento:** `ng serve`

A aplicação frontend estará disponível em `http://localhost:4200/`.

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular, com frontend e backend claramente separados.

**Frontend (`/frontend`):**

- `src/app/core`: Serviços, modelos e lógica de negócios.
- `src/app/shared`: Componentes, pipes e diretivas reutilizáveis.
- `src/app/features`: Componentes de interface de usuário para cada funcionalidade (métricas, ROI, etc.).

**Backend (`/backend`):**

- `src/main/java/com/nexus/analytics`: Código-fonte Java (controllers, services, models, etc.).
- `src/main/resources`: Arquivos de configuração.

## 🧩 Módulos e Componentes Principais (Frontend)

- **`MetricsComponent`:** Dashboard de métricas de desempenho.
- **`RoiComponent`:** Análise de ROI.
- **`FeaturesComponent`:** Descrição dos recursos da plataforma.
- **`LoadingSpinnerComponent`:** Componente de carregamento.
- **`MetricFormatterPipe`:** Formatação de valores numéricos.

## 🎨 Design e Usabilidade

O Nexus AI foi projetado com foco na usabilidade e na experiência do usuário.  A interface moderna e intuitiva utiliza os princípios de design responsivo para garantir uma ótima experiência em diferentes dispositivos.

## 🧪 Testes

- **Frontend:** `ng test` para executar os testes unitários.
- **Backend:** `mvn test` para executar os testes.

## 🤔 Decisões de Design e Arquitetura

- **Frontend (Angular):** Arquitetura baseada em componentes, com ênfase na reutilização de código e na modularidade.  Utilização de RxJS para gerenciamento de eventos assíncronos e Signals para reatividade.
- **Backend (Spring Boot):** Arquitetura em camadas (controllers, services, repositories) para separação de responsabilidades e manutenibilidade.

## 🔜 Próximos Passos

- Implementar autenticação de usuário.
- Aprimorar a persistência de dados no backend.
- Expandir as métricas e análises disponíveis.
- Implementar testes end-to-end.
- Refinar a documentação da API.
- Otimizar o desempenho do frontend e backend.

## ✨ Contribuindo

Contribuições são bem-vindas!  Abra uma _issue_ para discutir melhorias ou envie um _pull request_.

## 📄 Licença

MIT

## ✉️ Contato

[Seu Nome] - [Seu Email]
