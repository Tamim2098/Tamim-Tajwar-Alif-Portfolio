import './Navbar.css';
import Logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; 

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    const closeMobileMenu = () => {
        setIsMobile(false);
    };

    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobile]);

    return (
        <nav className='nav'>
            <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className='logo'
                onClick={closeMobileMenu}
            >
                <img src={Logo} alt="Logo" />
            </Link>

            <ul className={`nav-links-mobile ${isMobile ? 'open' : 'closed'}`}>
                <li>
                    <Link to="home" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="services" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={-70} onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>

            <ul className="nav-links">
                <li>
                    <Link to="home" smooth={true} duration={500} offset={-70}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-70}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="services" smooth={true} duration={500} offset={-70}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={-70}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className='mobile-menu-icon' onClick={toggleMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;
