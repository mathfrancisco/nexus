# Nexus AI - Plataforma de Análise de Métricas de Redes Sociais

Nexus AI é uma plataforma que fornece análises abrangentes de métricas de redes sociais, permitindo que os usuários monitorem seu desempenho, acompanhem as tendências e comparem seus resultados com os concorrentes.

## 🚀 Funcionalidades Principais

- **Métricas de Desempenho:** Visualize seguidores, taxa de engajamento, interações e outras métricas relevantes para cada plataforma.
- **Visualização de Dados:** Gráficos e tabelas interativos para uma análise clara e intuitiva dos dados.
- **Retorno sobre Investimento (ROI):** Calcule e acompanhe o ROI de suas campanhas de marketing em redes sociais.
- **Recursos da Plataforma:** Descrição detalhada dos recursos e benefícios da plataforma Nexus AI.
- **Carregamento Assíncrono:**  Carregamento eficiente de dados com indicadores de progresso para uma melhor experiência do usuário.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Angular 18, TypeScript, RxJS, Tailwind CSS, Bootstrap 5, Chart.js, `@ng-bootstrap/ng-bootstrap`,  `@auth0/angular-jwt`.
- **Backend:** Java 17, Spring Boot, Spring MVC, Spring Data JPA.
- **Banco de dados:** PostgreSQL, SQLite (para desenvolvimento).
- **Cache:** Caffeine (a ser implementado).
- **Outras:** Lombok, Swagger.

## 💻 Instalação e Execução

### Backend (com Docker Compose)

1. **Clone o repositório:** `git clone [URL do repositório]`
2. **Navegue até o diretório raiz:** `cd nexus-analytics`
3. **Inicie os serviços:** `docker-compose up -d`

O backend estará disponível em `http://localhost:8080`.

### Frontend

1. **Navegue até o diretório frontend:** `cd frontend`
2. **Instale as dependências:** `npm install`
3. **Execute o servidor de desenvolvimento:** `ng serve`

A aplicação frontend estará disponível em `http://localhost:4200/`.

## 📂 Estrutura do Projeto

A estrutura do projeto reflete a arquitetura escolhida, com separação clara entre frontend e backend.

**Frontend (`/frontend`):**

- `src/app/core`: Contém os serviços, modelos e interceptadores principais da aplicação.
- `src/app/shared`: Componentes e pipes reutilizáveis em toda a aplicação.
- `src/app/features`: Componentes específicos para cada funcionalidade da plataforma (métricas, ROI, etc.).

**Backend (`/backend`):**

- `src/main/java/com/nexus/analytics`: Contém o código fonte Java, incluindo controllers, services, models e configurações.
- `src/main/resources`: Arquivos de configuração, como `application.properties`.

## 🧩 Módulos e Componentes Principais (Frontend)

- **`MetricsComponent`:** Exibe as métricas de desempenho das plataformas.
- **`RoiComponent`:** Calcula e exibe o ROI das campanhas.
- **`FeaturesComponent`:** Descreve os recursos da plataforma.
- **`LoadingSpinnerComponent`:** Componente reutilizável para exibir indicadores de carregamento.
- **`MetricFormatterPipe`:** Pipe para formatar valores numéricos (moeda, porcentagem, etc.).
- **`HttpErrorInterceptor`:** Intercepta erros HTTP para tratamento centralizado.

## 📚 Documentação da API (Backend)

A API backend utiliza Spring Boot e oferece os seguintes endpoints:

- **`GET /api/v1/metrics/{platform}`:** Retorna as métricas de desempenho para a plataforma especificada.
- **`GET /api/v1/roi/analysis`:** Retorna a análise de ROI.
- **`GET /api/v1/features`:** Retorna a lista de recursos da plataforma.

## 🧪 Testes

- **Frontend:** Execute `ng test` para executar os testes unitários.
- **Backend:**  Execute os testes unitários e de integração com `mvn test`.

## 🤔 Decisões de Design e Arquitetura

- **Frontend (Angular):** Arquitetura baseada em módulos e componentes para melhor organização e reutilização de código.  Utilização de RxJS para gerenciar eventos assíncronos e `signals` para reatividade.
- **Backend (Spring Boot):**  Arquitetura em camadas (controllers, services, repositories) para separação de responsabilidades.  Utilização de Spring Data JPA para acesso a dados.

## 🔜 Próximos Passos

- Implementar autenticação de usuário.
- Implementar persistência de dados no backend.
- Adicionar mais métricas e recursos de análise.
- Implementar testes end-to-end.
- Melhorar a documentação da API.
- Otimizar o desempenho do frontend e backend.

## Contribuindo

Contribuições são bem-vindas! Por favor, abra uma _issue_ para discutir a mudança ou envie um _pull request_.

## Licença

MIT

## Contato

[Seu nome] - [Seu email]
