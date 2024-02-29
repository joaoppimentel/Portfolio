import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Image from './assets/Programmer.png';
import { icons, projects } from './lists.js';


export default function Sections() {
    return (<>
            <div className="sections-container">
                <Sobre />
                <Habilidades />
                <Projetos />
            </div>
            <Modal/>
        </>
    )
}

function useScrollRead(className) {
    const [active, setActive] = useState(className === '.section#sobre');

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector(className);
            if (!element) return;

            const position = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (position.top < windowHeight / 2 && position.bottom >= windowHeight / 2) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [className]);

    return active;
}

function Sobre() {
    const appeared = useScrollRead('.section#sobre');

    return (
        <section className={`section ${appeared ? 'active' : ''}`} id="sobre">
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
    );
}

function Habilidades() {
    const [active, setActive] = useState(false);
    const appeared = useScrollRead('.section#habilidades');


    useEffect(() => {
        setActive(appeared);
    }, [appeared]);

    const listaIcons = icons.map((t, i) => {
        return (
            <div key={i} className='tag'>
                <div className="icon">
                    <t.icon size={60} />
                </div>
                <h2>{t.name}</h2>
            </div>
        );
    });

    return (
        <section className={`section ${active ? 'active' : ''}`} id="habilidades">
            <h3>Habilidades</h3>
            <div className="habilities">
                {listaIcons}
            </div>
        </section>
    );
}

function Projetos(){
    const appeared = useScrollRead('.section#projects');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const listaProjects = projects.map((p, i) => {
        return (
            <div key={i} className="project" onClick={handleModalToggle}>
                <img src={p.image} alt={p.title} />
                <div className="info">
                    <h2>{p.title}</h2>
                    <div className="icons">
                        {Object.values(p.icons).map((Icon, index) => (
                            <Icon key={index} size={15}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    });

    return <section className={`section ${appeared ? 'active' : ''}`} id="projects">
        <div className="inner">
            {listaProjects}
        </div>
    </section>
}

function Modal(){


    return <div className="modal">

    </div>
}

Modal.propTypes = {
    project: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
};



