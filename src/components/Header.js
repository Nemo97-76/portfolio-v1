import * as React from 'react';
import MenuButton from './menu.Button.js';
import { Link } from 'react-router-dom';

export default function Header() {
    window.addEventListener('scroll', () => {
        var header = document.getElementById('header');
        var scrollPosition = /* window.pageYOffset || */ document.documentElement.scrollTop;
        if (scrollPosition > 0) {
            header.style.backgroundColor = '#01757a'
        } else {
            header.style.backgroundColor = 'transparent'
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
