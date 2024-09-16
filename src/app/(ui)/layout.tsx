import { Logo } from '@/components/ui/Logo';
import './layout.scss';
import { ReactNode } from "react";
import { NavItem } from '@/components/nav/Nav-item';
import { faHouse, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLogout } from '@/components/nav/Nav-logout';
import { NavMyProfile } from '@/components/nav/Nav-myprofile';
import { SearchInput } from '@/components/ui/Search-input';
import { TrendingArea } from '@/components/ui/Trending-area';
import { RecommendationArea } from '@/components/ui/Recommendation-area';

type Props = {
    children: ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <main>
            <nav>
                <div className='top'>
                    <Logo size={24} />
                    <div className="navigation">
                        <NavItem href="/home" icon={faHouse} label="Página Inicial" />
                        <NavItem href="/profile" icon={faUserAlt} label="Meu Perfil" />
                    </div>
                </div>
                <div className='bottom'>
                    <NavLogout />
                    <NavMyProfile />
                </div>
            </nav>

            <section>{children}</section>

            <aside>
                <SearchInput hideOnSearch />
                <TrendingArea />
                <RecommendationArea />
            </aside>
        </main>
    )
}