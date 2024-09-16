import './Button.scss';

type Props = {
    label: string,
    onClick?: () => void,
    size: 'lg' | 'md' | 'sm'
}
export const Button = ({ label, onClick, size }: Props) => {
    return (
        <div onClick={onClick} className={`btn-default ${size}`}>
            {label}
        </div>
    );
};