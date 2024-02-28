import PropTypes from 'prop-types';
import { useState } from 'react';

export function Header() {
    const [isMenuChecked, setMenuChecked] = useState(false);
    const [isColorChecked, setColorChecked] = useState(false);

    const menuCheckboxChange = () => {
        setMenuChecked(!isMenuChecked);
        document.body.style.overflow = isMenuChecked ? 'auto' : 'hidden';
    };

    const colorCheckboxChange = () => {
        setColorChecked(!isColorChecked);
        document.body.classList.toggle('light-mode');

    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="menu">
                        <input type="checkbox" name="menu" id="menu" style={{display:"none"}} onChange={menuCheckboxChange} />
                        <label htmlFor="menu">
                            <div className={`menu-bar ${isMenuChecked ? 'checked' : ''}`} id="bar-1"></div>
                            <div className={`menu-bar ${isMenuChecked ? 'checked' : ''}`} id="bar-2"></div>
                            <div className={`menu-bar ${isMenuChecked ? 'checked' : ''}`} id="bar-3"></div>
                        </label>
                    </div>
                    <a href="#sobre">
                        <h2>Portfólio</h2>
                    </a>
                    <label className='switch'>
                        <input type="checkbox" onChange={colorCheckboxChange}/>
                        <span className='slider round'></span>
                    </label>
                </div>
            </header>
            <Menu isMenuChecked={isMenuChecked} menuCheckboxChange={menuCheckboxChange} />
        </>
    );
}

function Menu({ isMenuChecked, menuCheckboxChange }) {
    return (
        <div className={`menu-open ${isMenuChecked ? 'visible' : ''}`} >
            <div className="container">
                <h2>Bem vindo ao meu Portfólio!</h2>
                <nav>
                    <ul>
                        <li><a href="#sobre" onClick={menuCheckboxChange}>Sobre</a></li>
                        <li><a href="#habilidades" onClick={menuCheckboxChange}>Habilidades</a></li>
                        <li><a href="#projetos" onClick={menuCheckboxChange}>Projetos</a></li>
                        <li><a href="#contato" onClick={menuCheckboxChange}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

Menu.propTypes = {
    isMenuChecked: PropTypes.bool.isRequired,
    menuCheckboxChange: PropTypes.func.isRequired
};
