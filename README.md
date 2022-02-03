# PROJETO: Validador de Cartão de Crédito 

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## Resumo do projeto

Neste projeto foi desenvolvido um aplicativo da Web que permite ao usuário
validar o número de um cartão de crédito.

### Definição do produto

Este projeto foi elaborado com foco em atender a necessidade de bancos que 
precisam disponibizar um teste seguro ao cliente para verificação de autenticidade
e desbloqueio de um novo cartão recebido.
Foi pensando em perfis de clientes que não se sentem seguros ligando na operadora
e/ou não querem vivenciar o incomodo de ter que se digirir a uma agência bancária
que esse projeto foi desenvolvido e tem o intuito de simplificar e facilitar a 
vida do usuário.

### Interface do usuário (UI)

A interface permite ao usuário:

- Inserir o número do cartão que deseja validar.
- Constatar se o resultado é válido ou não.
- Constatar que todos os dígitos do número do cartão, exceto os últimos 4
  caracteres foram ocultados.

### UX (Design da experiência do usuário)

O design da experiência do usuário foi estruturada com ideias de objetividade.
Por isso, o layout da página tem o intuito de entregar apenas informações diretas 
e uma estética clean (limpa) para que o usuário consiga navegar com agilidade
e ter um retorno rápido e prático. 

### Scripts / Arquivos

- `REAME.md`: deve explicar como "deployar", instalar e executar a aplicação,
  assim como uma introdução a aplicação, suas funcionalidades e as decisões que
  foram tomadas.
- `src/index.html`: aqui será o ponto de entrada da sua aplicação. Este arquivo
  deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
- `src/style.css`: este arquivo deve conter as regras de estilo. Queremos que
  você escreva suas próprias regras. Por isso, NÃO é permitido o uso de frameworks
  de CSS (Bootstrap, materialize etc).
- `src/validator.js`: aqui você deve implementar o objeto `validador`, o qual já
  está _exportado_ no _boilerplate_. Este objeto (`validador`) deve conter dois métodos:
  - **`validator.isValid(creditCardNumber)`**: `creditCardNumber` é um `string`
    com o número do cartão a ser verificado. Esta função deve retornar um
    `boolean`, dependendo de sua validade, de acordo com o [algoritmo de
    Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).
  - **`validator.maskify(creditCardNumber)`**: `creditCardNumber` é um `string`
    com o número do cartão e esta função deve retornar um `string` onde todos,
    exceto os últimos quatro caracteres, são substituídos por um número (`#`) ou
    🐱. Essa função deve sempre manter os quatro últimos caracteres intactos,
    mesmo quando a `string` for mais curta.
- `src/index.js`: aqui, você escreverá todo o código relacionado à interação do DOM
  (selecionar, atualizar e manipular elementos do DOM e eventos). Nesse arquivo,
  você precisará chamar as funções `validator.isValid` e `validator.maskify` conforme
  seja necessário para atualizar o resultado na tela (UI).
- `test/validator.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `validator.isValid()` e `validator.maskify()`.

---

