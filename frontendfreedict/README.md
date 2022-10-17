<h1>API Free Dict</h1>

<h2> Objetivo:</h2>

<p>O projeto tem como objetivo principal possibilitar que o usuário consiga acessar um acervo de palavras em inglês e para cada palavra disponível verificar seu tipo, pronuncia, aplicação e etc</p>

<p>Para poder acessar o dashboard e ultilizar as funcionalidades deverá ser feito um cadastro e posteriormente o longin </p>

<a href="https://ibb.co/PF5c7zG"><img src="https://i.ibb.co/YPtczTB/MyDaily.png" alt="MyDaily" border="0"></a>

<p>Dentre as funcionalidades temos: </p>

<ul>
<li> Logar e deslogar : </li>
<p>Para entrar e sair da aplicação respectivamente</p>

<li> Listagem de todas as palavras do acervo : </li>

<p> Ao acessar a página o usuário conseguirá ver em um quadro com com todas as palavras que estão no acervo. Esse quadro tem scroll infinito então ao chegar no final de cada lista serão renderizadas novas palavras.</p>

<li> Consulta de cada palavra do acervo : </li>

<p>No quandro onde estão os cards com cada palavra, basta dar um clique na palavra escolhida que ao lado teremos um card com todas as informações disponíveis da palavra.

Obs1: Nem todas palavras terão todas as informações, porém a aplicação irá entregar todas que estiverem disponíveis.

Obs2: A aplicação carregará por padrão a lista com todas as palavras disponíveis no acervo, caso o usuário tenha escolhido ver outra seção basta clicar na aba "Words List" que poderá ver todas as palavras novamente.

Obs3: Sempre que uma palavra for clicada será automaticamente inserida no histórico de palavras individual do usuário logado.

Obs4: Existem dois botões: "voltar" e "proximo". Eles tem a funcionalidade de retornar na palavra anterior na lista e na próxima palavra da lista respectivamente.

</p>

<li> Adicionar palavras aos favoritos : </li>

<p>Todo usuário poderá salvar cada palavra que desejar em uma seleção de favoritos, para tanto para clicar na palavra desejada e abaixo de suas informações háverá a opção de "favoritar" daí basta apenas um clique que a palavra está adiciona aos favoritos.

Obs: cada usuário terá sua lista individual de favoritos

</p>

<li> Ver todas as palavras dos favoritos : </li>

<p>Basta clicar na aba "Favorites Words" que aparecerá uma lista com todas as palavras dentro dessa seção.

Obs: cada usuário terá sua lista individual de favoritos

</p>

<li> Consulta de cada palavra dos favoritos : </li>

<p>Clique na aba "Favorite Words", daí basta dar um clique na palavra escolhida que ao lado teremos um card com todas as informações disponíveis da palavra.

Obs1: Nem todas palavras terão todas as informações, porém a aplicação irá entregar todas que estiverem disponíveis.

Obs2: Sempre que uma palavra for clicada será automaticamente inserida
no histórico de palavras individual do usuário logado

Obs3: Existem dois botões: "voltar" e "proximo". Eles tem a funcionalidade de retornar na palavra anterior na lista e na próxima palavra da lista respectivamente.

</p>

<li> Remover palavras da seção favoritos: </li>

<p>Para remover a palavra da seção favoritos o usuário deverá clicar na aba favoritos logo acima do quadro onde estão os cards com as palavras, dentro da seção favoritos basta clicar na palavra que se deseja excluir no quadro ao lado logo abaixo das informações da palavra basta clicar em "defavoritar" que a palavra será excluida dos favoritos.

</p>

<li> Remover todas as palavras da seção favoritos: </li>

<p>Basta clicar na na opção "Limpar Favoritos" que poderá remover todas as palavras que foram favoritadas até o momento.

</p>

<li> Ver todas as palavras do Histórico: </li>

<p>Basta clicar na aba "History" que poderá ver todas as palavras que foram consultadas até o momento.

</p>

<li> Remover todas as palavras do Histórico: </li>

<p>Basta clicar na na opção "Limpar Histórico" que poderá remover todas as palavras que foram consultadas até o momento.

</p>

<a href="https://my-daily-events-git-main-zecart22.vercel.app/" title="deploy">Deploy da aplicação</a></br>

<h4> Clone do repositório </h4>

- `https://github.com/zecart22/backendfreedict`

<h4> Instalando dependencias</h4>

- `yarn install`

<h4> Rodando projeto</h4>

- `yarn start`

<h4> Tecnologias utilizadas</h4>

- `ReactJS`
- `Typescript`
- `HTML5`
- `CSS`
- `Chakra UI`
- `Context API`
- `React Router Dom`
- `AXIOS`
- `Yup`

<h4> Por que da Stack ?</h4>

<a href="https://ibb.co/fxCMjy4"><img src="https://i.ibb.co/fxCMjy4/image6.png" alt="image6" border="0"></a>

<ul>
  <li> React foi utilizado por minha familiaridade com a ferramenta</li>
  <li>Typescript para tipagem que facilita o gerenciamento do projeto aumentando minha performace como desenvolvedor</li>
  <li>Chakra UI é uma poderosa Lib que utilizo muito para estilização das minhas aplicações, ela me ajuda a ganhar tempo e qualidade no trabalho em relação ao Syled Components ou CSS puro</li>
  <li>Context API para centralizar e gerenciar todas informações que eu preciso</li>
  <li>Axios para requisições</li>
  <p>Yup para montagem do schema e controle dos forms e envio do "data" em conformidade com o que se pede na documentação da API </p>

</ul>

<h4> Estrutura dos diretórios</h4>

-     src
      +---------assests
                +-------images : nesse diretório estão todas as imagens uitlizadas na aplicação.

      +----------components : nesse diretório estão todos componentes utilizados na aplicação.

      +----------contexts: nesse diretório estão centralizadas todas as variáveis da aplicação.

      +----------pages: nesse diretório estão todas as páginas da aplicação.

      +----------routes: nesse direitório estão todas as rotas das páginas da aplicação.

      +----------services: nesse diretório está localizada o link da API.

      +----------style: nesse diretório está localizado o Theme que trás todo padrão de estilização da aplicação.
