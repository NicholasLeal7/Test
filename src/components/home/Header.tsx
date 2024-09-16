"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../ui/Logo';
import './Header.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { HomeMenu } from './HomeMenu';

export const HomeHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="logo">
                <Logo size={24} />
            </div>
            <div className="title">Pagina inicial</div>

            <div className="bars" onClick={() => setShowMenu(true)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            {showMenu &&
                <HomeMenu
                    closeAction={() => setShowMenu(false)}
                />}
        </header>
    );
}