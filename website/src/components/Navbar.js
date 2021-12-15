import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import '../style/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className= "navbar">
            <div className= "navbar-container">
                <Link to="/" className="navbar-logo">
                    SOMAS 2021 <i className= 'fas fa-atom'/>
                </Link>
                <div className= 'menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/new-run' className='nav-links' onClick={closeMobileMenu}>
                            New Run
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/ci-output' className='nav-links' onClick={closeMobileMenu}>
                            CI Output
                        </Link>
                    </li>
                    <li className = 'nav-item'>
                        <Link to='/visualisations' className='nav-links' onClick={closeMobileMenu}>
                            Visualisations
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> WATCH THE TRAILER</Button>}
            </div>
          </nav>
        </>
    )
}

export default Navbar
