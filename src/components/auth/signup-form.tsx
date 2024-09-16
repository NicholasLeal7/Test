"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const SignUpForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [nameField, setNameField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    };

    return (
        <>
            <Input
                placeholder="Digite seu nome"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
            />

            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />
            <Button label="Criar conta" onClick={handleEnterButton} size="lg" />
        </>
    );
};