import { FunctionComponent, SyntheticEvent } from 'react';
import Form from './Components/Form';
import FormInput, { InputConfig } from './Components/FormInput';

const App: FunctionComponent = () => {
    const usernameInputConfig: InputConfig = {
        validation: {
            required: true,
            minLength: 6,
        },
        errorMessage:
            'Username is required and should be at least 6 characters long.',
    };

    const emailInputConfig: InputConfig = {
        validation: {
            pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
            required: true,
        },
        errorMessage:
            'E-mail is required and it should follow an e-mail adrress pattern.',
    };

    const passwordInputConfig: InputConfig = {
        validation: {
            required: true,
            pattern:
                '(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*',
        },
        errorMessage:
            'Password is required and it must contain at least 6 characters, one number, one uppercase and lowercase letter, and a special character',
    };

    const onSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        alert('Your information was succesfully submitted');
    };

    return (
        <div className='app'>
            <header>
                <h1>Form Example</h1>
                <Form onSubmit={onSubmit} btnText={'submit'}>
                    <FormInput
                        name='username'
                        label='username'
                        config={usernameInputConfig}
                    />
                    <FormInput
                        name='password'
                        label='password'
                        config={passwordInputConfig}
                    />
                    <FormInput
                        name='email'
                        label='email'
                        config={emailInputConfig}
                    />
                </Form>
            </header>
        </div>
    );
};

export default App;
