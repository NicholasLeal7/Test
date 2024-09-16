import { Button } from '@/components/ui/Button';
import './page.scss';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { user } from "@/data/user";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ProfileFeed } from '@/components/profile/ProfileFeed';

export default function Page() {
    const isMe = true;

    return (
        <div className="slug-page">
            <GeneralHeader backHref="/">
                <div className="username">{user.name}</div>
                <div className="postcount">{user.postCount} posts</div>
            </GeneralHeader>
            <section>

                <div className="cover" style={{
                    backgroundImage: 'url(' + user.cover + ')'
                }}>
                </div>

                <div className="profile">
                    <img src={user.avatar} alt={user.name} />
                    <div className="btn">
                        {isMe &&
                            <Link
                                href={`/${user.slug}/edit`}
                            >
                                <Button label='Editar Perfil' size='md' />
                            </Link>
                        }
                        {!isMe &&
                            <Button label='Editar Perfil' size='md' />
                        }
                    </div>
                </div>

                <div className="user-info">
                    <div className="name">{user.name}</div>
                    <div className="slug">@{user.slug}</div>
                    <div className="bio">{user.bio}</div>
                    {user.link &&
                        <div className="link">
                            <FontAwesomeIcon icon={faLink} className='icon' />
                            <Link
                                href={user.link}
                                target='_blank'
                            >
                                {user.link}
                            </Link>
                        </div>
                    }
                    <div className="follows">
                        <div className=""><span>99</span> Seguindo</div>
                        <div className=""><span>99</span> Seguidores</div>
                    </div>
                </div>

            </section>
            <ProfileFeed />
        </div>
    );
}