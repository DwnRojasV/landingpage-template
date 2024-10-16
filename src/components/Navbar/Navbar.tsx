/**
 * Navbar component
 * this component renders the navbar menu at the beginning of the application
 */
import React, { useState } from "react";
import './navbar.css';

interface NavbarProps {
    urlLogo: string;
    altLogo: string;
    fontLogo: string;
    textLogo: string;
    sections: string[];
    activeSection: string;
    onClick: (section: string) => void;
}
/**
 * @typedef {Object} NavbarProps
 * @property {string} urlLogo - Path or URL of the logo image
 * @property {string} altLogo - Alternative texto to describe the logo image
 * @property {string} fontLogo - Font family value for logo font
 * @property {string[]} sections - array with the sections of the landig page that will be displayed in the navbar
 * @property {string} activeSection - string with the active section
 */
const Navbar: React.FC<NavbarProps> = ({
    urlLogo,
    altLogo,
    fontLogo,
    textLogo,
    sections,
    activeSection,
    onClick,
}) => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const handleMenuToggle = ()=>{
        const screenWidth = window.innerWidth;
        if (screenWidth <= 900 ) {
            setMenuOpen(!isMenuOpen);
        }
    }
    const fontTextLogo: object = {
        fontFamily: fontLogo
    }


    return (
        <nav className="navbar">
            <a href={`#${sections[0]}`} className="navbar__logo">
                <img src={urlLogo} alt={altLogo} className="navbar__logo--img" />
                <span style={fontTextLogo} className="navbar__logo--txt">{textLogo}</span>
            </a>
            <ul className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}>
                {sections.map(section => (
                    <li
                        key={section}
                        className={activeSection === section ? "active" : ""}
                        onClick={() => {onClick(section); setTimeout(handleMenuToggle,500)}}
                    >
                        <span className="navbar__nav--text">{section}</span>
                    </li>
                ))}
            </ul>
            <button className="navbar__toggle" onClick={handleMenuToggle}>
                ☰
            </button>
        </nav>
    )
}

export default Navbar;