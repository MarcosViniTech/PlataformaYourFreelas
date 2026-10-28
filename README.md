# 🚀 YourFreelas - Plataforma Web & Sistema de Autenticação

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![BoxIcons](https://img.shields.io/badge/BoxIcons-220033?style=for-the-badge&logo=boxicons&logoColor=white)](#)

---

## 📌 O que é?
O **YourFreelas** é uma aplicação web multipáginas desenvolvida para conectar profissionais autônomos (desenvolvedores, designers e criadores) a projetos reais de tecnologia. O ecossistema conta com um portal de autenticação customizado (**Login Tech**) que serve como controle de acesso para a navegação interna da plataforma.

---

## ⚙️ O que faz?
* **Gerenciamento de Acesso:** Interface de Login e Cadastro para validação de dados de usuários.
* **Validação Dinâmica:** Captura de inputs em tempo real, validação de campos obrigatórios e tratamento de requisições no Front-End.
* **Controle de Rotas:** Navegação simulada via JavaScript (`window.location.href`) que direciona o usuário autenticado para a página inicial da plataforma.
* **Exploração de Projetos:** Portal visual interativo com listagem de oportunidades em Front-End, Back-End, UI/UX e Mobile.
* **Interface Responsiva:** Adaptação fluida para dispositivos móveis, tablets e desktops com estilo visual moderno (Glassmorphism).

---

## 💡 Solução Resolvida
* **Unificação de Arquitetura:** Integração de múltiplas telas estáticas isoladas (`projeto.html`, `api-pagamentos.html`, `identidade-visual.html`) em um único ecossistema funcional com fluxo de login unificado.
* **Prevenção de Erros no DOM:** Implementação de verificações condicionais (`if (formulario)`) para evitar erros de referência `null` em páginas que compartilham o mesmo script de JavaScript.
* **Experiência de Usuário (UX) sem Interrupções:** Interceptação do recarregamento automático do formulário com `event.preventDefault()`, garantindo mensagens instantâneas de validação e transições suaves entre telas.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de formulários, seções e acessibilidade.
* **CSS3:** Flexbox, estilos customizados, variáveis e efeito visual de transparência (*Glassmorphism*).
* **JavaScript (Vanilla / ES6+):** Manipulação dinâmica do DOM, tratamento de eventos e redirecionamento programático.
* **Boxicons:** Biblioteca de ícones vetoriais integrada para enriquecimento visual da UI.

---

## 📂 Estrutura do Projeto

```text
├── index.html               # Tela de Login / Portal de Acesso
├── cadastro.html            # Tela de Cadastro de Usuários
├── inicial.html             # Página Principal da Plataforma (YourFreelas)
├── api-pagamentos.html      # Módulo de Pagamentos da API
├── identidade-visual.html   # Módulo de Identidade Visual / UI Design
├── projeto.html             # Detalhes e Requisitos de Projetos
├── style.css                # Estilização global do projeto
└── script.js                # Lógica de validação e controle de rotas
```

---

## 👨‍💻 Autor

Desenvolvido por **Marcos Vinicius** (*MarcosViniTech*).

- **LinkedIn:** [Seu Link do LinkedIn aqui](#)
- **GitHub:** [Seu Link do GitHub aqui](#)