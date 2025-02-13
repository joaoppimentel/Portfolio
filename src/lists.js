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
    FigmaOriginal,
    PhpOriginal,
    LaravelOriginal,
    ZendOriginalWordmark,
    MysqlOriginal,
    PostgresqlOriginal,
    TypescriptPlain,
    BootstrapOriginal,
    DockerPlain,
    GitPlain,
    GithubOriginal,
    GitlabOriginal,
    JqueryOriginalWordmark,
    TypescriptOriginal,
    GitOriginal,
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
    },
    {
        name: 'PHP',
        icon: PhpOriginal,
    },
    {
        name: 'Laravel',
        icon: LaravelOriginal,
    },
    {
        name: 'Zend',
        icon: ZendOriginalWordmark,
    },
    {
        name: 'MySQL',
        icon: MysqlOriginal,
    },
    {
        name: 'PostgreSQL',
        icon: PostgresqlOriginal,
    },
    {
        name: 'TypeScript',
        icon: TypescriptPlain,
    },
    {
        name: 'Bootstrap',
        icon: BootstrapOriginal,
    },
    {
        name: 'Docker',
        icon: DockerPlain,
    },
    {
        name: 'Git',
        icon: GitPlain,
    },
    {
        name: 'GitHub',
        icon: GithubOriginal,
    },
    {
        name: 'GitLab',
        icon: GitlabOriginal,
    },
    {
        name: 'jQuery',
        icon: JqueryOriginalWordmark,
    },
];

import Fnaf from './assets/Projects/FNAF.png'
import LuSalgados from './assets/Projects/LuSalgados.png'
import Pastelaria from './assets/Projects/Pastelaria.png'
import PettLove from './assets/Projects/PettLove.png'

export const projects = [
    {
        image: Fnaf,
        title: 'Site Fnaf',
        icons: {
            Html5Original,
            Css3Original,
            JavascriptOriginal,
            GitPlain,
            GithubOriginal
        },
        repositorio: 'https://github.com/JotaPe36043/Fnaf',
        link: 'https://fnaf-one.vercel.app/',
        description: `Como um de meus primeiros projetos,
            consiste em um site dedicado ao filme 'Five Nights at Freddy's',
            uma adaptação cinematográfica do popular jogo de terror.
            O site oferece uma sinopse detalhada do filme,
            uma apresentação dos principais personagens e a incorporação do trailer oficial.
            Desenvolvido para fornecer informações abrangentes sobre o universo do filme e
            cativar os fãs da franquia.`
    },
    {
        image: LuSalgados,
        title: 'Projeto Site de Salgados',
        icons: {
            Html5Original,
            Css3Original,
            JavascriptOriginal,
            GitPlain,
            GithubOriginal
        },
        repositorio: 'https://github.com/JotaPe36043/Lu-Salgados',
        link: 'https://salgados-da-lu.vercel.app/catalogo_produtos.html',
        description: `Desenvolvi a seção de Produtos de um site para uma 
            empresa de salgados em colaboração com colegas da faculdade.
            Isso incluiu a criação da barra lateral, exemplos de produtos
            e garantindo a responsividade para diversos dispositivos. 
            Minha contribuição destacou-se pela criação de layouts atraentes
            e funcionais, além de assegurar uma experiência consistente em todas as plataformas.`
    },
    {
        image: Pastelaria,
        title: 'Site de Pastelaria em React',
        icons: {
            ReactOriginal,
            TailwindcssOriginal,
            Css3Original,
            JavascriptOriginal,
            GitPlain,
            GithubOriginal
        },
        repositorio: 'https://github.com/JotaPe36043/Pastelaria',
        link: 'https://pastelaria-mauve.vercel.app/',
        description: `Desenvolvi este projeto com paixão e criatividade
            para oferecer uma experiência digital única para uma pastelaria fictícia.
            Utilizando a biblioteca React, criei um site dinâmico e envolvente,
            onde os visitantes podem explorar o cardápio delicioso da pastelaria com
            apenas alguns cliques. A interface elegante e funcional foi projetada
            para proporcionar uma jornada gastronômica online, com imagens apetitosas
            e uma navegação intuitiva. Se você está pronto para uma aventura culinária virtual,
            não deixe de conferir este projeto incrível!`
    },
    {
        image: PettLove,
        title: 'Pett Love',
        icons: {
            ReactOriginal,
            TailwindcssOriginal,
            TypescriptOriginal,
            GitPlain,
            GithubOriginal
        },
        repositorio: 'https://github.com/joaoppimentel/PetLove',
        link: 'https://pet-love-ten.vercel.app/',
        description: `Pet Love é uma plataforma interativa desenvolvida com React,
            Tailwind CSS e TypeScript, onde os donos de animais podem visualizar e conectar
            seus pets com outros. O projeto possui um design responsivo e moderno,
            destacando os pares de pets de forma dinâmica.
            O código é versionado com Git e hospedado no GitHub.`
    }
]

import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const contacts = [
    {
        icon: BsTelephone,
        name: 'Telefone',
        content: '(43) 9 8486-6730',
        link: 'https://wa.me/5543984866730'
    },
    {
        icon: MdOutlineMail,
        name: 'Email',
        content: 'joaopedroap50@gmail.com',
        link: 'mailto:joaopedroap50@gmail.com'
    },
    {
        icon: FaGithub,
        name: 'GitHub',
        content: '@joaoppimentel',
        link: 'https://github.com/joaoppimentel/'
    },
    {
        icon: FaLinkedinIn,
        name: 'LinkedIn',
        content: '@joaoppimentel',
        link: 'https://www.linkedin.com/in/joaoppimentel/'
    },
]
