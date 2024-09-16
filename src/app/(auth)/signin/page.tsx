'use  client';

import { Logo } from '@/components/ui/Logo';
import './page.scss';
import Link from 'next/link';
import { SigninForm } from '@/components/auth/signin-form';

export default function Page() {
    return (
        <div className="login-wrapper">
            <Logo size={56} />
            <h1>Entre na sua conta</h1>
            <div className='form'>
                <SigninForm />
            </div>
            <div className="signup">
                <div className="">Ainda não tem uma conta?</div>
                <Link href="/signup" >Cadastre-se</Link>
            </div>
        </div>
    );
}