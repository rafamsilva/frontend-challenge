# Angular Test - Omdb Api

## Descrição

Projeto feito em angular 8 ontem existe uma tela de busca que consome a API do [OMDb API](http://www.omdbapi.com/) seguindo o layout disponível no [Marvel Prototype](https://marvelapp.com/3cj0i64/screen/52947277) e ao clicar em algum dos filmes, é mostrado o detalhe do mesmo.

A busca pode ser feita digitando o nome do filme e aguardando 1 segundo, onde já faz a busca automaticamente ou clicando na lupa para fazer a busca manualmente. Foi utilizado algumas poucas partes do CSS do [Bootstrap](https://getbootstrap.com/) juntamente com Flex Box CSS. Você também pode favoritar um filme caso queria clicando no botão de favorito no detalhe do mesmo.

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)

Após o download do NodeJS é necessário instalar o CLI do angular na versão 8, a qual esse projeto foi consturido.

```
npm i @angular/cli@8.3.25
```

## Instalação

Após o download do projeto, instale as dependências do mesmo, vá até o diretório raiz do projeto e execute o comando:

```
npm install
```

Após os passos anteriores estarem concluídos, podemos utilizar a nossa aplicação.
Vá até o diretório raiz do projeto e digite o comando:

```
ng s
```

Ou

```
npm start
```

O Serviço estará disponível na porta 4200.

http://localhost:4200

Para iniciar os testes, use o comando:

```
npm run test
```

## Coverage

### Análise Geral

!["Análise Geral"](https://imgur.com/7o6RmKG)
