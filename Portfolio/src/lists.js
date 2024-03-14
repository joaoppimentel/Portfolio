import { 
    Html5Original, 
    Css3Original, 
    SassOriginal,
    TailwindcssOriginal,
    JavascriptOriginal,
    ReactOriginal,
    CsharpOriginal, 
    DotnetcoreOriginal,
    PythonOriginal,
    FigmaOriginal
} from "devicons-react"

export const icons = [
    {
        name: 'Html',
        icon: Html5Original
    },
    {
        name: 'Css',
        icon: Css3Original
    },
    {
        name: 'Sass',
        icon: SassOriginal
    },
    {
        name: 'Tailwind CSS',
        icon: TailwindcssOriginal
    },
    {
        name: 'JavaScript',
        icon: JavascriptOriginal
    },
    {
        name: 'React',
        icon: ReactOriginal
    },
    {
        name: 'C#',
        icon: CsharpOriginal
    },
    {
        name: '.NET',
            icon: DotnetcoreOriginal
        },
        {
            name: 'Python',
            icon: PythonOriginal
        },
        {
            name: 'Figma',
            icon: FigmaOriginal
        }
    ];

    import Fnaf from './assets/Projects/FNAF.png'
    import HashTaurante from './assets/Projects/HashTaurante.png'
    import LuSalgados from './assets/Projects/LuSalgados.png'
    
    export const projects = [
        {
            image: Fnaf,
            title: 'Site Fnaf',
            icons: {
                Html5Original,
                Css3Original,
                JavascriptOriginal
            },
            repositorio: 'https://github.com/JotaPe36043/Fnaf',
            link: 'https://fnaf-one.vercel.app/',
            description: "Este projeto consiste em um site dedicado ao filme 'Five Nights at Freddy's', uma adaptação cinematográfica do popular jogo de terror. O site oferece uma sinopse detalhada do filme, uma apresentação dos principais personagens e a incorporação do trailer oficial. Desenvolvido para fornecer informações abrangentes sobre o universo do filme e cativar os fãs da franquia."
        },
        {
            image: HashTaurante,
            title: 'Cardápio de Restaurante',
            icons: {
                ReactOriginal,
                Html5Original,
                SassOriginal,
                JavascriptOriginal
            },
            repositorio: 'https://github.com/JotaPe36043/HashTag-Cardapio-React',
            link: 'https://hash-tag-cardapio-react.vercel.app/',
            description: "Página do 'HashTaurante' é um projeto desenvolvido durante um intensivão de JavaScript pela Hashtag Treinamentos no YouTube. Trata-se de uma aplicação web em React que simula uma página de restaurante, onde os usuários podem visualizar e navegar por diferentes categorias de pratos, como principais, sobremesas e bebidas. Utilizando tecnologias como React, HTML5, CSS3 (SCSS) e JavaScript, o projeto também emprega um banco de dados local para armazenar informações dos produtos. Esta iniciativa simples, porém educativa, oferece uma introdução ao desenvolvimento web com React.js e destaca o potencial desta biblioteca para criar interfaces dinâmicas e interativas."
        },
        {
            image: LuSalgados,
            title: 'Projeto Site de Salgados',
            icons: {
                Html5Original,
                Css3Original,
                JavascriptOriginal
            },
            repositorio: 'https://github.com/JotaPe36043/Lu-Salgados',
            link: 'https://salgados-da-lu.vercel.app/catalogo_produtos.html',
            description: "Desenvolvi a seção de Produtos de um site para uma empresa de salgados em colaboração com colegas da faculdade. Isso incluiu a criação da barra lateral, exemplos de produtos e garantindo a responsividade para diversos dispositivos. Minha contribuição destacou-se pela criação de layouts atraentes e funcionais, além de assegurar uma experiência consistente em todas as plataformas."
        }
    ]

    import { BsTelephone } from 'react-icons/bs';
    import { MdOutlineMail } from "react-icons/md";
    import { FaLinkedinIn, FaGithub } from "react-icons/fa";
    
    export const contacts = [
        {
            icon:BsTelephone,
            name:'Telefone',
            content: '(43) 9 8486-6730',
            link:'https://wa.me/5543984866730'
        },
        {
            icon:MdOutlineMail,
            name:'Email',
            content: 'joaopedroap50@gmail.com',
            link:'mailto:joaopedroap50@gmail.com'
        },
        {
            icon:FaGithub,
            name:'GitHub',
            content: '@JotaPe36043',
            link:'https://github.com/JotaPe36043'
        },
        {
            icon:FaLinkedinIn,
            name:'LinkedIn',
            content: '@joaoppimentel',
            link:'https://www.linkedin.com/in/joaoppimentel/'
        },
    ]