import { FunctionComponent, ReactNode, SyntheticEvent } from 'react';
import './Form.css';

interface Props {
    children: ReactNode;
    btnText: string;
    onSubmit: (e: SyntheticEvent) => void;
}

const Form: FunctionComponent<Props> = ({ children, onSubmit, btnText }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <button>{btnText}</button>
        </form>
    );
};

export default Form;
