import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../ui/Logo';
import './HomeMenu.scss';
import { faHouse, faUserAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchInput } from '../ui/Search-input';
import { NavItem } from '../nav/Nav-item';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NavLogout } from '../nav/Nav-logout';

type Props = {
    closeAction: () => void;
}
export const HomeMenu = ({ closeAction }: Props) => {
    return (
        <div className="homeMenu">
            <div className="title">
                <Logo size={32} />
                <div className="close" onClick={closeAction}>
                    <FontAwesomeIcon icon={faXmark} className='close-icon' />
                </div>
            </div>

            <div className="search">
                <SearchInput />
            </div>

            <div className="menu">
                <NavItem href="/home" icon={faHouse} label="Página Inicial" />
                <NavItem href="/profile" icon={faUser} label="Meu Perfil" />
                <NavLogout />
            </div>
        </div>
    );
};