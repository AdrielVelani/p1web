## Sistema de Gerenciamento de Produtos

Esse projeto foi feito usando a plataforma Node.js com o objetivo de entender e usar o padrão MVC que significa Model View Controller. Isso ajuda a deixar o código mais organizado e fácil de crescer. Também foram criadas verificações para garantir que os dados que o usuário manda estejam certos.

## Ferramentas Usadas

  Documentação oficial do Node.js
  Express.js que é um framework baseado em Node.js
  Textos e materiais sobre a arquitetura MVC

## Como funciona o padrão MVC

# O padrão MVC divide o sistema em três partes

  Model
    Cuida de conversar com o banco de dados e define os dados e regras

  View
    Mostra as respostas para o usuário e cuida da parte visual da aplicação

  Controller
    Fica no meio do Model e da View processa os pedidos aplica regras e organiza os dados

# Na prática isso quer dizer

  Foram criadas rotas que chamam os controladores certos dependendo do que o usuário quer fazer
  Foram usados middlewares que tratam os pedidos antes de chegar nos controladores
  Cada parte tem sua responsabilidade para deixar o código mais organizado e fácil de mexer depois


## Desafios e como resolvemos

# Durante o desenvolvimento apareceram alguns problemas

  Rotas Dinâmicas
    Foi preciso organizar bem os controladores e middlewares para não dar conflito

  Validação dos Dados
    Escolher a melhor forma de validar os dados deu trabalho e precisou de testes

  Conexão com o Banco de Dados
    Era importante cuidar bem das conexões para não dar erro com vários pedidos ao mesmo tempo
    Além disso, tivemos dificuldade em utilizar a porta 3000, por esse motivo utilizamos a 200

# Como resolvemos

  Pesquisamos na documentação oficial e em materiais de apoio
  Criamos mensagens de erro específicas para facilitar na hora de achar os problemas
  Fizemos testes para garantir que tudo estava funcionando direitinho

# Como rodar o projeto

  1 Baixe o repositório
     git clone https://github.com/AdrielVelani/p1web.git

  2 Instale os pacotes necessários
     npm install

  3 Inicie o servidor
     npm start

  4 Acesse pelo navegador
     http://localhost:2000

## Validação dos Dados

As verificações foram feitas direto no código sem usar bibliotecas. Elas garantem que os dados estejam corretos antes de serem usados.

# Regras de validação

  Nome do produto
    Tem que ter pelo menos 3 letras

  Preço
    Tem que ser maior que 0

  Estoque
    Não pode ser negativo tem que ser 0 ou mais

## Testes

Tem imagens dos testes feitos nesse link
https://github.com/AdrielVelani/p1web/tree/master/Testes

Integrantes do grupo

  Vinicius Macedo
  https://github.com/vdeviant

  Adriel Velani
  https://github.com/AdrielVelani
