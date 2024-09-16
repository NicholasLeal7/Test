"use client";

import './Nav-item.scss';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { usePathname } from 'next/navigation';

type Props = {
    label: string,
    icon: IconDefinition,
    href: string,
    active?: boolean
}
export const NavItem = ({ label, icon, href, active }: Props) => {
    const pathName = usePathname();
    const isMe = pathName === href;

    return (
        <Link href={href} className={`navItem ${isMe && 'active'}`}>
            <FontAwesomeIcon icon={icon} className='icon' />
            <div>{label}</div>
        </Link>
    )
};