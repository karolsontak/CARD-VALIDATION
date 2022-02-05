# **PROJETO: Validador de Cartão de Crédito** 


## **ÍNDICE**

### [Introdução](#introdução)
### [Definição e objetivo do projeto](#definição)
### [Desenvolvimento](#desenvolvimento)
### [Interface do usuário (UI)](#interface)
### [UX (Design da experiência do usuário)](#design)
### [Considerações Gerais](#considerações)

_________________________________________________________________________________________________________

## **Introdução** <div id= "introdução"></div>

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


__________________________________________________________________________________________________________

## **Definição e objetivo do projeto** <div id= "definição"></div>


Este [projeto](https://karolsontak.github.io/card-validation-karolsontak/) foi desenvolvido para ser um aplicativo da Web que permite ao usuário
validar o número de um cartão de crédito.

A elaboração deste foi feita com foco em atender a necessidade de bancos que 
precisam disponibizar um teste seguro ao cliente para verificação de autenticidade
e desbloqueio de um novo cartão recebido.

Foi pensando em perfis de clientes que não se sentem seguros ligando na operadora
e/ou não querem vivenciar o incomodo de ter que se digirir a uma agência bancária
que esse projeto foi desenvolvido e tem o intuito de simplificar e facilitar a 
vida do usuário.

__________________________________________________________________________________________________________


## **Desenvolvimento** <div id= "desenvolvimento"></div>

O [protótipo](Protótipo.jpeg) da página foi rascunhado apenas para criar uma perspectiva do que seria o projeto

O planejamento de execução deste projeto foi construído a partir de pequenos passos ilustrados com auxílio do Trello.

O objetivo era destrinchar as etapas em pequenas aplicações a serem alcançadas aos poucos.

O propósito final: produzir um produto claro e de fácil manuseio passando por todos os objetivos de aprendizagem.

A primeira etapa de desenvolvimento foi feita através do HTML e CSS se utilizando, por exemplo, de aplicação de semântica, uso de seletores, box model, display e o resultado foi uma página simples e com boa usabilidade.

A partir da criação do layout da página, a próxima etapa executada foi iniciada pelo arquivo de nome INDEX.JS ao qual é responsável por receber todos os seletores de DOM, gerenciadores de eventos de DOM e manipulação dinâmica de DOM. 

A etapa seguinte foi executada a partir do arquivo VALIDATION.JS que é responsável por armazenar as aplicações do algoritmo de Luhn, criação de laços, condicionais, parâmetros e hospeda também as duas funções de teste. No decorrer das etapas foram sendo criadas as interações entre os arquivos e feito a utilização de módulo.

As atualizações do projeto ao GitHub foram feitas através dos comandos 'git' pelo terminal
__________________________________________________________________________________________________________


## **Interface do usuário (UI)** <div id= "interface"></div>

A interface permite ao usuário:

- [x]  Inserir o número do cartão que deseja validar.
- [x]  Constatar se o resultado é válido ou não.
- [x]  Constatar que todos os dígitos do número do cartão, exceto os últimos 4
  caracteres foram ocultados.

__________________________________________________________________________________________________________


## **UX (Design da experiência do usuário)** <div id= "design"></div>

O design da experiência do usuário foi estruturada com ideias de objetividade.
Por isso, o layout da página tem o intuito de entregar apenas informações diretas 
e uma estética clean (limpa) para que o usuário consiga navegar com agilidade
e ter um retorno rápido e prático. 

__________________________________________________________________________________________________________


## **Considerações Gerais** <div id= "considerações"></div>

- O planejamento deste projeto se encontra no [Trello](https://trello.com/b/JsA4Whwv/card-validation)
- O repositório deste projeto se encontra no [GitHub](https://github.com/karolsontak/card-validation-karolsontak)
- O deploy deste projeto está hospedado no [GitPages](https://karolsontak.github.io/card-validation-karolsontak/)
- Este projeto não se utiliza de bibliotecas nem farmworks, apenas o uso de Vanilla JavaScript.
- Foram executados dois testes: validator.isValid e validator.maskify. 
- Os [testes unitários](Testes.jpeg) cobriram 100% dos statements, functions e lines e branches.
- Este projeto conta com o uso de SSH key associada a conta do GitHub.
- Este projeto foi desenvolvido por [Karol Sontak](https://github.com/karolsontak).