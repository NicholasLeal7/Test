'use  client';

import { Logo } from '@/components/ui/Logo';
import './page.scss';
import Link from 'next/link';
import { SignUpForm } from '@/components/auth/signup-form';

export default function Page() {
    return (
        <div className="register-wrapper">
            <Logo size={56} />
            <h1>Crie sua conta</h1>
            <div className='form'>
                <SignUpForm />
            </div>
            <div className="signin">
                <div className="">Já tem uma conta?</div>
                <Link href="/signin" >Entrar no Z</Link>
            </div>
        </div>
    );
}