# ⚔️ Arsenal Medieval

> Projeto de e-commerce desenvolvido em **TypeScript** durante o bootcamp da **Generation Brasil**. O sistema simula o gerenciamento de estoque de uma forja medieval, permitindo o controle total de armas e armaduras.

---

## 🚀 Funcionalidades (CRUD)

O projeto conta com um sistema completo de gerenciamento, incluindo:
- **Cadastro de Produtos:** Registro de Armas (Dano) e Armaduras (Defesa).
- **Listagem Total:** Visualização de todos os itens do arsenal.
- **Consulta por ID:** Busca rápida e precisa.
- **Atualização:** Modificação de preços, nomes e atributos.
- **Exclusão:** Remoção de itens com confirmação de segurança.
- **Busca Avançada:** Filtros por nome e por categoria (Tipo).

## 🛠️ Tecnologias Utilizadas

- [Node.js] - Ambiente de execução.
- [TypeScript] - Linguagem principal (tipagem forte e POO).
- [Readline-sync] - Interação via terminal.
- [Colors] - Personalização visual do console.

## 🏗️ Estrutura de Programação Orientada a Objetos

O projeto foi construído seguindo os pilares da POO:
- **Classe Abstrata:** `Produto` servindo como base.
- **Herança:** Classes `Arma` e `Armadura`.
- **Interface:** `ProdutoRepository` definindo o contrato do CRUD.
- **Controller:** Gerenciamento de dados usando Collections (Array).
