##Code Review

Em components/List, esta sendo usando setInterval, o que não é adequado. Pode ser usado um websocket para receber as atualizações.

Uma boa prática atualmente é usar Redux para o controle de estado da aplicação, em que tempos diversos módulos de apoio para debug e controle de tempo (por mudança de estado) da aplicação

Os testes devem estar numa pasta separada "tests" na raiz da aplicação par facilitar a organição e não poluir com a quantidade de arquivos no código principal

Váriaveis da aplicação, como Endpoint do serviço devem estar num arquivo de variáveis de ambiente, como o ".env" usado pelo "dotenv".

Requisições de API devem estar num arquivo separado, numa pasta 'api', por exemplo, para que seja centralizado a camada de integração.

