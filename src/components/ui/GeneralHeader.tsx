import './GeneralHeader.scss';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    backHref: string
}
export const GeneralHeader = ({ children, backHref }: Props) => {
    return (
        <header className='general-header'>
            <Link href={backHref} className='back'>
                <FontAwesomeIcon icon={faArrowLeft} className='icon' />
            </Link>
            <div className="content">
                {children}
            </div>
        </header>
    );
}