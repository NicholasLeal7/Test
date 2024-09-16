"use client";

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Nav-logout.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';

export const NavLogout = () => {
    const router = useRouter();

    const handleClick = () => {
        router.replace('/signin');
    };

    return (
        <div onClick={handleClick} className='navLogout'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon' />
            <div>Sair</div>
        </div>
    )
};