# Website feito com React e Tailwind CSS

### Nesse projeto, o foco foi a utilização de tailwind, a funcionalidade do carrinho e a barra de navegação fixada.

## Tailwind CSS
- yarn add -D tailwindcss postcss autoprefixer;
- npx tailwindcss init -p (cria o arquivo tailwind.config);
- adicionar no tailwind.config: 
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

- adicionar no index.css:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Outras configurações
- yarn add react-icons
- Usar Pexels para obter imagens

## Sidebar

![](https://github.com/DersoAguiar/website-react-app/blob/master/.github/side-bar.gif)

## Componente de Carrinho
- Eu mesmo adicinei as funcionalidades de carrinho.
- Funcionallidades: adicionar produtos, mudar quantidade do produto e deletar produtos;
- Na tela do carrinho tem o preço e o valor total do carrinho;
- Caso o usuário clique no carrinho sem adicionar produto, uma mensagem irá aparecer: "Ops, loks like your cart is empty!";
- O CSS a responsividade não foi terminado, pois esse não era meu foco nesse projeto.

![](https://github.com/DersoAguiar/website-react-app/blob/master/.github/add-to-cart.gif)

## Fixed Navibar
- a navbar fora fixada no topo utilizando useState e useEffect e addEventListener;
- ao rolar pelo navegador, a barra ficará fixa no topoe mudará de cor de fundo;

![](https://github.com/DersoAguiar/website-react-app/blob/master/.github/fixed-navibar.gif)

