# Frontend Challenge - Mário Fonteles

Projeto realizado para a vaga de Dev Frontend Angular na Zup. O projeto foi desenvolvido utilizando o Angular 9 na sua release mais estável.

## Como rodar o projeto

Instalar dependências:

```
npm install
```

Iniciar servidor de desenvolvimento:
```
ng serve
```

O app estará disponível na url `http://localhost:4200/`.

## Rodando testes unitários

Os testes unitários nesse projeto foram feitos com [Karma](https://karma-runner.github.io) e [Jasmine](https://jasmine.github.io/).
 O comando `ng test` irá executar os testes.

## Project overview

O desafio foi concluído utilizando o Angular 9 no seu release estável mais recente.

Algumas features do projeto:

* Design responsivo utilizando Bootstrap 4 e SCSS
* Implementação de Infinite Scroll na listagem dos filmes
* Persistência simples dos filmes favoritados utilizando localStorage
* Cenários de estado vazio e tratamento de erros da API foram implementados
* Componente de loading implementado para as telas e alguns componentes
* Teste unitários implementados
* projeto concluído em 3 dias(iniciado na terça 31/03, concluído na quinta 02/04)
* Inicialente optei por não utilizar lazy-loading e shared modules dado o escopo do projeto, gostaria de ter tido tempo de implementar, mas preferi manter minha deadline para o dia 02/04
