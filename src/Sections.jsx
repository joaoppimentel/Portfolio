import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Image from './assets/Programmer.png';
import { icons, projects, contacts } from './lists.js';
import { MdClose } from "react-icons/md";
import Curriculo from './assets/Curriculo.pdf'
import EnglishCV from './assets/EnglishCV.pdf'


export default function Sections() {
    return (<>
        <div className="sections-container">
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contatos />
        </div>
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
                        <a id="contact-button" href="mailto:joaopedroap50@gmail.com">Entrar em Contato</a>
                        <a id="download" href={Curriculo} download>Download CV (Portuguese)</a>
                        <a id="download" href={EnglishCV} download>Download CV (English)</a>
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
                    Desenvolvedor Full Stack com experiência em criar soluções web robustas e escaláveis.
                    No front-end, utilizo React.js e Next.js com TypeScript e Scss para desenvolver interfaces modernas e responsivas.
                    No back-end, trabalho com PHP e Node.js (TypeScript), utilizando MySQL e PostgreSQL como banco de dados.
                    Emprego Git e GitLab para controle de versão e colaboração em projetos.
                </p>
            </div>
        </section>
    );
}

function Habilidades() {
    const appeared = useScrollRead('.section#habilidades');

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
        <section className={`section ${appeared ? 'active' : ''}`} id="habilidades">
            <h3>Habilidades</h3>
            <div className="habilities">
                {listaIcons}
            </div>
        </section>
    );
}

function Projetos() {
    const appeared = useScrollRead('.section#projects');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjectKey, setSelectedProjectKey] = useState(0);

    const handleModalToggle = (key) => {
        setIsModalOpen(!isModalOpen);
        setSelectedProjectKey(key);
        document.body.style.overflow = isModalOpen ? 'auto' : 'hidden';
    };

    const listaProjects = projects.map((p, i) => {
        return (
            <div key={i} className="project" onClick={() => handleModalToggle(i)}>
                <img src={p.image} alt={p.title} />
                <div className="info">
                    <h2>{p.title}</h2>
                    <div className="icons">
                        {Object.values(p.icons).map((Icon, index) => (
                            <Icon key={index} size={15} />
                        ))}
                    </div>
                </div>
            </div>
        );
    });

    return <>
        <section className={`section ${appeared ? 'active' : ''}`} id="projects">
            <h3>Projetos</h3>
            <div className="inner">
                {listaProjects}
            </div>
        </section>
        <Modal isModalOpen={isModalOpen} selectedProjectKey={selectedProjectKey} handleModalToggle={handleModalToggle} />
    </>
}

function Modal({ selectedProjectKey, isModalOpen, handleModalToggle }) {
    let project = projects[selectedProjectKey];



    return <div className="modal" style={{ display: isModalOpen ? 'flex' : 'none' }} >
        <div className="container">
            <button onClick={() => handleModalToggle(selectedProjectKey)}>
                <MdClose size={"2rem"} color={'#9c0101'} />
            </button>
            <div className="inner">
                <div className="modal-data">
                    <img src={project.image} alt="" />
                    <div className="modal-links">
                        <a href={project.link} target='__blank'>Acessar Projeto</a>
                        <a href={project.repositorio} target='__blank'>Acessar Repositório</a>
                    </div>
                </div>
                <div className="description">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h3>Tecnologias Utilizadas</h3>
                    <div className="tecnologies">
                        {Object.values(project.icons).map((Icon, index) => (
                            <Icon key={index} size={60} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

Modal.propTypes = {
    selectedProjectKey: PropTypes.number.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    handleModalToggle: PropTypes.func.isRequired
};

function Contatos() {
    const appeared = useScrollRead('.section#contact');

    const listaContatos = contacts.map((c, i) => {
        return (
            <a key={i} href={c.link} target='__blank' className="contato">
                <div className="contact-icon">
                    <c.icon color='#9c0101' size={30} />
                </div>
                <h3>{c.name}</h3>
                <p>{c.content}</p>
            </a>
        );
    });

    return <section className={`section ${appeared ? 'active' : ''}`} id="contact">
        <h3>Contatos</h3>
        <div className="inner">
            {listaContatos}
        </div>
    </section>
}


