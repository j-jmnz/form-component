import {
    ChangeEvent,
    createContext,
    ReactNode,
    useContext,
    useState,
} from 'react';

interface Form {
    [key: string]: string | undefined;
}

interface ContextReturn {
    form: Form;
    handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormContext = createContext<ContextReturn>({
    form: {},
    handleFormChange: () => {},
});

export const useForm = (): ContextReturn => {
    return useContext(FormContext);
};

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
    const [form, setForm] = useState({});

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <FormContext.Provider
            value={{
                form,
                handleFormChange,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
