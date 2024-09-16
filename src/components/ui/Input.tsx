"use client";

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import './Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    placeholder: string,
    value?: string,
    onChange?: (newValue: string) => void,
    onEnter?: () => void,
    password?: boolean,
    icon?: IconDefinition,
    filled?: boolean
}
export const Input = ({ placeholder, password, icon, value, onChange, onEnter, filled }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter' && onEnter) {
            onEnter();
        }
    };

    return (
        <div className={`input-field ${filled ? 'filled' : ''}`}>
            {icon && <FontAwesomeIcon icon={icon} className='icon' />}
            <input
                type={password && !showPassword ? 'password' : 'text'}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            {
                password &&
                <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                    className='icon-eye'
                />
            }
        </div>
    );
};