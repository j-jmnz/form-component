import { FunctionComponent, useState } from 'react';
import { useForm } from '../common/FormContext';
import './FormInput.css';

interface Validation {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    focused?: string;
}

export interface InputConfig {
    validation: Validation;
    errorMessage?: string;
}

interface Props {
    label: string;
    name: string;
    config?: InputConfig;
}

const FormInput: FunctionComponent<Props> = ({ label, name, config }) => {
    const [focused, setFocused] = useState(false);
    const { form, handleFormChange } = useForm();

    return (
        <div className='form-input'>
            <label>{label}</label>
            <input
                value={form[name] || ''}
                name={name}
                onChange={handleFormChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                {...config?.validation}
            />
            <span>{config?.errorMessage}</span>
        </div>
    );
};

export default FormInput;
