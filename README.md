# Projeto Técnico - Gestão de Autores e Livros

Este projeto é uma **aplicação web** desenvolvida como um teste técnico utilizando as seguintes tecnologias:

- **React**: Para a criação da interface do usuário.
- **Redux**: Para o gerenciamento do estado global da aplicação.
- **React-Router**: Para a navegação entre diferentes vistas dentro da aplicação.

## Descrição do Projeto

A aplicação tem como objetivo permitir a **gestão de autores** e **livros**. Os usuários poderão:

- **Salvar e excluir autores**: Permite adicionar autores ao sistema, com a capacidade de excluir os que não são mais necessários.
- **Salvar e excluir livros**: Os livros podem ser vinculados a autores específicos. Os usuários podem adicionar novos livros e excluí-los quando não forem mais necessários.

### Funcionalidades principais

- **Adicionar e excluir autores**: Você pode criar um novo autor com seu nome e detalhes ou excluir autores já existentes.
- **Adicionar e excluir livros**: Você pode adicionar novos livros a um autor específico e excluir livros já existentes.
- **Navegação dinâmica**: Utilizando `React-Router`, a navegação entre as diferentes vistas da aplicação, como a lista de autores e a lista de livros, é fluida.
- **Gerenciamento de estado com Redux**: O estado dos autores e dos livros é gerido de maneira centralizada usando Redux, facilitando o controle e a atualização do estado da aplicação.

## Tecnologias utilizadas

- **React**: Para construir a interface de usuário dinâmica e reativa.
- **Redux**: Para gerenciar o estado global da aplicação de forma eficiente.
- **React-Router**: Para gerenciar a navegação entre diferentes seções da aplicação sem recarregar a página.