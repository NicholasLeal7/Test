import Link from 'next/link';
import './Nav-myprofile.scss';
import { user } from '@/data/user';

export const NavMyProfile = () => {
    return (
        <div className='navMyProfile'>
            <div className='img'>
                <Link href={`/${user.slug}`}>
                    <img src={user.avatar} alt={user.name}></img>
                </Link>
            </div>
            <div className="info">
                <Link className="username" href={`/${user.slug}`}>
                    {user.name}
                </Link>
                <div>@{user.slug}</div>
            </div>
        </div>
    );
};