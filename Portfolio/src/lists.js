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
    FigmaOriginal} from "devicons-react"

import Fnaf from './assets/Projects/FNAF.png'
import HashTaurante from './assets/Projects/HashTaurante.png'

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
            description: "Página do 'HashTaurante' é um projeto desenvolvido durante um intensivão de JavaScript pela Hashtag Treinamentos no YouTube. Trata-se de uma aplicação web em React que simula uma página de restaurante, onde os usuários podem visualizar e navegar por diferentes categorias de pratos, como principais, sobremesas e bebidas. Utilizando tecnologias como React, HTML5, CSS3 (SCSS) e JavaScript, o projeto também emprega um banco de dados local para armazenar informações dos produtos. Esta iniciativa simples, porém educativa, oferece uma introdução ao desenvolvimento web com React.js e destaca o potencial desta biblioteca para criar interfaces dinâmicas e interativas."
        }
    ]