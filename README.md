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

![gráfico do algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## Resumo do projeto

Neste [projeto] (https://github.com/karolsontak/card-validation-karolsontak/settings/pages) foi desenvolvido um aplicativo da Web que permite ao usuário
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

### Considerações Gerais

- Este projeto foi desenvolvido individualmente
- Este projeto se encontra em repositório no GitHub
- Este projeto se encontra no GitPages
- Este projeto não se utiliza de bibliotecas nem farmworks, apenas o uso de Vanilla JavaScript.
