import { 
    Html5Original, 
    Css3Original, 
    SassOriginal,
    TailwindcssOriginal,
    JavascriptOriginal,
    ReactOriginal,
    CsharpOriginal, 
    DotnetcoreOriginal,
    PythonOriginal} from "devicons-react"

import Fnaf from './assets/Projects/FNAF.png'

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
            }
        }
    ]