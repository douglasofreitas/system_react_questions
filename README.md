# Teste para Desenvolvedor JavaScript Sênior

As características que definem um programador sênior não são exatas. Um mesmo desenvolvedor pode ser considerado sênior na empresa X e pleno na empresa Y. As competências variam muito.

Queremos ter certeza que o seu perfil é exatamente [aquele que procuramos](https://gist.github.com/xthiago/bbbd615aee535190ff5adbe5bfedb871). Para isso gostariamos de te conhecer melhor através deste teste, onde você fará parte de um time de desenvolvimento fictício, resolvendo problemas comuns no dia-a-dia de qualquer empresa.

O teste será dividido em duas partes:


1. Code review do código fonte atual; *OBSERVAÇÃO: não é necessário refatorar os pontos levantados no code review, lógico que, se você fizer alguns, se destacará.*
1. Implementação de uma nova funcionalidade.

## Instruções gerais

- Reserve entre 1 e 2 horas de seu dia para fazê-lo.

- Faça um fork deste repositório no GitHub, BitBucket ou servidor de sua preferência. Sugerimos que a visibilidade seja definida como privada, para que outros candidatos não tenham acesso aos seus *insights*.

- Ao final, envie um e-mail para thiago.rodrigues@upx.com.br com o link para o repositório (conceda acesso de leitura ao usuário thiago.rodrigues@upx.com.br) + texto do seu code review. Lembrando que o review pode ser feito em forma de alterações no código, você tem liberdade para fazer todas as alterações que julgar necessário.

- Qualquer dúvida entre em contato através do endereço de e-mail thiago.rodrigues@upx.com.br.


## O desafio

Imagine que você é desenvolvedor sênior na empresa XPTO e na semana passada surgiu um projeto urgente que nem você e nem o time tinham disponibilidade para desenvolvê-lo. A tarefa acabou ficando sob responsabilidade do Juninho, desenvolvedor júnior da empresa. Um rapaz que aprende muito rápido, mas ainda inexperiente, sem bagagem para optar pelas melhores práticas de arquitetura e codificação.

A boa notícia é que a empresa possui uma cultura de coaching e code review. Você, como desenvolvedor sênior, ficou encarregado de fazer code review da solução adotada pelo Juninho antes que a mesma vá para produção (parte 1 do teste).

O code review deve ter como objetivo garantir:

   - que padrões de codificação são adotados;
   - código de fácil entendimento;
   - boa cobertura de testes, com testes de qualidade;
   - bom design da solução (especificações, Design Patterns, SOLID, DRY, etc);
   - baixa complexidade;
   - e qualquer coisa que você achar que a aplicação deve seguir.

Lembre-se que Juninho é inexperiente. Não basta só apontar o que não está bom, dê instruções claras do porquê não está bom e como resolver.

Além disso, você foi alocado para trabalhar junto com o Juninho (programação em par) para criar uma nova funcionalidade descrita na seção **Nova Funcionalidade** (parte 2 do teste).

A sua experiência garantirá êxito na fundação do projeto e ajudará no desenvolvimento profissional do Juninho.

## A aplicação

Esse é o MVP do projeto de enquetes da UPX, ele foi desenvolvido com React porém algumas boas práticas não foram seguidas.

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
