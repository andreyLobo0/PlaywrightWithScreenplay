# Playwright With Screenplay - Automação E2E

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📝 Projeto

Projeto de automação de testes end-to-end desenvolvido com:
- **Framework**: Playwright com TypeScript
- **Site Testado**: [Serverest Front](https://front.serverest.dev/)
- **Padrão de Projeto**: Screenplay Pattern
  - Atores (Actors): Representam usuários do sistema
  - Interações(Interactions) Representam ações realizados pelos atores no sistema
  - Tarefas (Tasks): Ações que os atores executam
  - Questões (Questions): Validações dos resultados

## ✨ Características

- 🎭 Testes E2E com Playwright
- 📝 TypeScript para melhor tipagem e manutenção
- 🎬 Padrão Screenplay para melhor organização
- 🤖 Geração de dados fake com @faker-js/faker
- 📊 Relatórios HTML detalhados
- 🔄 Execução paralela de testes

## 🧪 Cenários de Testes

### Login
- ✅ Login com credenciais válidas
  - Validar acesso à home após login bem-sucedido
- ❌ Login com credenciais inválidas
  - Validar mensagem de erro para credenciais incorretas

### Produtos
- ✅ Criação de produto
  - Validar criação bem-sucedida de novo produto
- ❌ Produto duplicado
  - Validar mensagem de erro ao tentar criar produto existente

## 📁 Estrutura do Projeto

```
src/
│
├── actors/                     # Atores que interagem com o sistema
│   └── AdminUser.ts            # Representa um usuário administrador
│
├── interactions                #Interações que os atores podem realizar no sistema
│   ├── ClickButton.ts
│   ├── FillInput.ts
│   └── UploadFile.ts
│
├── tasks/                      # Ações que os atores podem executar
│   ├── CreateProduct.ts        # Criação de produtos
│   ├── CreateUsers.ts          # Criação de usuarios
│   └── LoginAsAdmin.ts         # Login como administrador         
│
├── questions/                  # Validações e verificações
│   ├── IsPageVisible.ts
│   └── ItemCreatedIsVisible.ts
│
├── report                      # Local onde é salvo o relatório html gerado após execução dos testes
│   └── index.html
│
├── tests/                      # Testes organizados por funcionalidade
│   ├── Login
│   │   └── login.spec.ts
│   ├── Product
│   │   └── product.spec.ts
│   └── Users
│       └── users.spec.ts
│
└── utils/                      # Utilitários e configurações
    ├── .auth/                  # Armazena estado de autenticação
    └── auth.setup.ts           # Configuração inicial de autenticação
```

## ⚙️ Pré-requisitos

| Ferramenta | Versão  |
|------------|---------|
| Node.js    | ≥ 18.x  |
| npm        | ≥ 9.x   |
| TypeScript | ≥ 5.3.2 |

### Dependências Principais
```json
{
  "@playwright/test": "^1.40.0",
  "@faker-js/faker": "^8.3.1",
  "typescript": "^5.3.2"
}
```

## 🚀 Começando

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd PlaywrightWithScreenplay
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale os navegadores do Playwright**
```bash
npx playwright install
```

4. **Setup de Autenticação**
```bash
# Crie a pasta de autenticação
mkdir src\.auth

# Execute o setup de autenticação
npx playwright test src/utils/auth.setup.ts --project=setup
```

## ▶️ Executando os Testes

### Todos os testes
```bash
npx playwright test
```

### Testes específicos
```bash
# Apenas testes de login
npx playwright test src/tests/Login/login.spec.ts

# Apenas testes de produtos
npx playwright test src/tests/Product/product.spec.ts

# Apenas testes de usuarios
npx playwright test src/tests/Users/users.spec.ts
```

### Relatórios
```bash
# Abrir último relatório
npx playwright show-report
```

## 📋 Scripts NPM Disponíveis
Os scripts dos testes escutam os testes no modo ui, para debug

```json
{
  "scripts": {
    "test": "playwright test",
    "test:login": "playwright test --ui src/tests/Login/login.spec.ts",
    "test:product": "playwright test --ui src/tests/Product/product.spec.ts",
    "test:user": "playwright test --ui src/tests/Users/users.spec.ts"
  }
}
```


## 📝 Notas

- Execute sempre o setup de autenticação antes dos testes


---

Desenvolvido com 💜 usando Playwright, TypeScript e Screenplay Pattern
