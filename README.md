## A aplicação

- Javascript - ES6
- REACT JS
- Json-server

Esse é o MVP do projeto de enquetes, ele foi desenvolvido com React porém algumas boas práticas não foram seguidas.

Reference: https://github.com/upxlabs/teste-dev-js-senior

## Atualmente a aplicação provê

- Listagem de enquetes;
- Cadastro de novas enquetes;

## Nova funcionalidade

Você desenvolverá a seguinte funcionalidade:

1. Como usuário do sistema, desejo ser capaz de editar uma enquete já cadastrada.

Critérios técnicos

- A página de edição deve ser carregada em `/polls/:id`;
- Carregue os dados da enquete no mesmo formulário que é feita a criação.

## Requisições para /questions

- GET `/questions`;
- GET `/questions/1`;
- POST `/questions`;

Formato válido:

```
{
  "question": "Favourite programming language?",
  "options": [
    "Swift",
    "Python",
    "Objective-C",
    "Ruby"
  ]
}
```

- PUT `/questions/1`;

Formato válido:

```
{
  "question": "Favourite programming language?",
  "options": [
    "JavaScript",
    "Swift",
    "Python",
    "Objective-C",
    "Ruby"
  ]
}
```

## Comandos úteis

### Rodando o projeto
Faça o download do repositório e rode `yarn` para instalar as dependências.
Para iniciar o servidor de desenvolvimento execute `yarn start`.

### Testes
Execute o comando `yarn test`.

### Back-end
Utilize o comando `yarn server` para subir o servidor da API.
