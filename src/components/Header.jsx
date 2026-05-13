import * as React from 'react';
import MenuButton from './menu.Button.jsx';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
    window.addEventListener('scroll', () => {
        var header = document.getElementById('header');
        var scrollPosition = /* window.pageYOffset || */ document.documentElement.scrollTop;
        if (scrollPosition > 0) {
            header.style.backgroundColor = 'rgba(1,117,122,0.6)';
            header.style.backdropFilter = 'blur(15px) saturate(100%)';
            header.style.borderRadius = '0 0 12px 12px';
        } else {
            header.style.backgroundColor = 'transparent'
            header.style.backdropFilter = 'none';
            header.style.borderRadius = '0';
            header.style.border = 'none';
        }
    })
    return (
        <>
            <div id='header' className='navbar fixed-top'>
                <MenuButton />
                <Nav.Link href="#home" id='Name' className='navbar-brand'>
                    Tasneem Youssef
                </Nav.Link>
            </div>
        </>
    );
}       
