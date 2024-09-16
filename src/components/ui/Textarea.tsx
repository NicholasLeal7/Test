import './Textarea.scss';

type Props = {
    placeholder: string,
    rows: number,
    value?: string
};
export const Textarea = ({ placeholder, rows, value }: Props) => {
    return (
        <div className="textArea">
            <textarea name="" id="" placeholder={placeholder} value={value} rows={rows}></textarea>
        </div>
    );
};