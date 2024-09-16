import './page.scss';
import { Button } from '@/components/ui/Button';
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { user } from "@/data/user";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ProfileFeed } from '@/components/profile/ProfileFeed';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export default function Page() {
    const isMe = true;

    return (
        <div className="slug-page">
            <GeneralHeader backHref="/">
                <div className="username">Editar perfil</div>
            </GeneralHeader>
            <section className='section-profile'>

                <div className="cover" style={{
                    backgroundImage: 'url(' + user.cover + ')'
                }}>
                    <div className="edit-cover">
                        <FontAwesomeIcon icon={faCamera} className='icon' />
                    </div>
                    <div className="edit-cover">
                        <FontAwesomeIcon icon={faXmark} className='icon' />
                    </div>
                </div>

                <div className="profile">
                    <img src={user.avatar} alt={user.name} />
                    <div className="edit-pfp">
                        <div className="edit-settings">
                            <FontAwesomeIcon icon={faCamera} className='icon' />
                        </div>
                    </div>
                </div>

            </section>

            <section className='section-form'>
                <label>
                    <p>Nome</p>
                    <Input
                        placeholder='Digite seu nome'
                        value={user.name}
                    />
                </label>
                <label>
                    <p>Bio</p>
                    <Textarea
                        placeholder='Descreva você mesmo'
                        rows={4}
                        value={user.bio}
                    />
                </label>
                <label>
                    <p>Link</p>
                    <Input
                        placeholder='Digite um link'
                        value={user.link}
                    />
                </label>
                <Button
                    label='Salvar alterações'
                    size='lg'
                />
            </section>
        </div>
    );
}