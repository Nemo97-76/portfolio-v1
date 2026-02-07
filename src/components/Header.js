import * as React from 'react';
import MenuButton from './menu.Button.js';
import { Link } from 'react-router-dom';

export default function Header() {
    window.addEventListener('scroll', () => {
        var header = document.getElementById('header');
        var scrollPosition = /* window.pageYOffset || */ document.documentElement.scrollTop;
        if (scrollPosition > 0) {
            header.style.backgroundColor = 'rgba(1,117,122,0.69)';
            header.style.backdropFilter = 'blur(7px) saturate(100%)';
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
                <Link to={'/'} id='Name' className='navbar-brand'>
                    Tasneem Youssef
                </Link>
            </div>
        </>
    );
}
