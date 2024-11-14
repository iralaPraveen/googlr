import './NavBar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRef, useState } from 'react';
import logo from "../../assets/logo.svg";
import underline from '../../assets/nav_underline.svg';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const NavBar = () => {
    const [menu, setMenu] = useState(" ");
    const menuRef = useRef();

    const openMenu = () => {
       
            menuRef.current.style.right = "0"; // Ensure the menu slides in from the right
        
    };

    const closeMenu = () => {
        
            menuRef.current.style.right = "-350px"; // Slides the menu out to the right
        
    };

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
                <li>
                    <AnchorLink className='anchor-link' href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src={underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About me</p>
                    </AnchorLink>
                    {menu === "about" && <img src={underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href="#services">
                        <p onClick={() => setMenu("services")}>Services</p>
                    </AnchorLink>
                    {menu === "services" && <img src={underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href="#work">
                        <p onClick={() => setMenu("work")}>My work</p>
                    </AnchorLink>
                    {menu === "work" && <img src={underline} alt="Underline" />}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" && <img src={underline} alt="Underline" />}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href="#contact">
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
}

export default NavBar;
