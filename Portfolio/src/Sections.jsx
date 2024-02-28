import Image from './assets/Programmer.png'
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

export default function Sections() {
    return (
        <div className="sections-container">
            <Sobre />
            <Habilidades />
        </div>
    )
}

function Sobre() {
    return <section className="section" id="sobre">
        <div className="me">
            <div className="typing-text">
                <h3>Olá, eu me chamo</h3>
                <h3>João Pedro</h3>
                <h3>Desenvolvedor Web</h3>
                <div className="buttons">
                    <a id="contact" href="mailto:joaopedroap50@gmail.com">Entrar em Contato</a>
                    <a id="download" href="https://drive.google.com/uc?export=download&id=1x4w_mjrV8pOSZkQ8VunW5eUEhFZ9y6T6">Download CV</a>
                </div>
            </div>
            <div className="image">
                <img src={Image} />
                <div className="shadow"></div>
            </div>
        </div>
        <div className="about">
            <h3>Sobre Mim</h3>
            <p>
                Sou um entusiasta do desenvolvimento de software com foco em interfaces dinâmicas e cativantes.<br/>
                Tenho experiência em HTML5, CSS3, JavaScript e React para frontend, e estou explorando Node.js, Python e C# para desenvolvimento backend.<br/>
                Sou adepto do Git/GitHub para versionamento de código e colaboração em projetos.<br/>
                Estou comprometido em continuar aprendendo e crescendo na área, buscando enfrentar novos desafios e contribuir para soluções inovadoras.<br/>
            </p>
        </div>
    </section>
}

function Habilidades() {

    const icons = [
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
    
    const listaIcons = icons.map(
        (t, i) => {
            return (
                <div key={i} className="tag">
                    <div className="icon">
                        <t.icon size={60} />
                    </div>
                    <h2>{t.name}</h2>
                </div>
            );
        }
    );

    return <section className="section" id="habilidades">
        <h3>Habilidades</h3>
        <div className="habilities">
            {listaIcons}
        </div>
        <p>TESTES</p>
    </section>
    


}