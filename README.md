# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

clone this repo, cd into the folder and

```
npm i
```

then run

```
npm start
```

## Usage

Usage example:

```tsx
import { FunctionComponent, SyntheticEvent } from 'react';
import { useForm } from './common/FormContext';
import Form from './Components/Form';
import FormInput, { InputConfig } from './Components/FormInput';

const usernameInputConfig: InputConfig = {
    validation: {
        required: true,
        minLength: 6,
    },
    errorMessage:
        'Username is required and should be at least 6 characters long.',
};

const ExampleUsage: FunctionComponent = () => {
    const { form } = useForm();

    const onSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();

        alert(
            `Your information was succesfully submitted:\n ${Object.values(
                form
            ).join('\n')}`
        );
    };

    return (
        <div>
            <header>
                <h1>Form Example</h1>
                <Form onSubmit={onSubmit} btnText={'submit'}>
                    <FormInput
                        name='username'
                        label='username'
                        config={usernameInputConfig}
                    />
                    <FormInput name='password' label='password' />
                </Form>
            </header>
        </div>
    );
};

export default ExampleUsage;
```

The components that will need access to the form data should be wrapped by the form context provider.

Example:

```tsx
import { FormContextProvider } from './common/FormContext';

ReactDOM.render(
    <FormContextProvider>
        <App />
    </FormContextProvider>
);
```

### `Hooks`

#### UseForm

Gives access to two objects:

```js
const { form, handleFormChange } = useForm();
```

|                    |                                                         |
| ------------------ | ------------------------------------------------------- |
| `form`             | Object that holds the form data submitted by the inputs |
| `handleFormChange` | Mutates the form state of the context provider          |

The `form` object structure is as follows:

```ts
interface Form {
    [key: string]: string | undefined;
}
```

### `Components`

There are two components `<Form>` and `<FormInput>`

#### Form

Takes in 2 properties:

| Props      |                                                                            |
| ---------- | -------------------------------------------------------------------------- |
| `onSubmit` | Required. Function that defines what to do when the form data is submitted |
| `btnText`  | Required. String that sets the text content of the submit button           |

Example:

```tsx
<Form onSubmit={onSubmit} btnText={'submit'}></Form>
```

#### FormInput

Takes in 3 properties:

| Props    |                                                                                      |
| -------- | ------------------------------------------------------------------------------------ |
| `name`   | Required. String that sets the name necessary to identify the input in the form data |
| `label`  | Required. String that sets the text content for the label                            |
| `config` | Optional. Object that defines the validation configuration                           |

Example:

```tsx
<FormInput name='username' label='username' config={usernameInputConfig} />
```

### `Validation`

The validation is handled by html buit-in form validation for simplicity and efficiency purposes.

It is configured by passing in a configuration object to the 'FormInput' component.

The config object structure looks as follows:

```ts
interface Validation {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}

interface Config {
    validation: Validation;
    errorMessage?: string;
}
```

The `InputConfig` type can be imported from `Components/FormInput`

Example:

```tsx
import { InputConfig } from './Components/FormInput';

const emailInputConfig: InputConfig = {
    validation: {
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
        required: true,
    },
    errorMessage:
        'E-mail is required and it should follow an e-mail adrress pattern.',
};
```

The `errorMessage` will be shown when the defined validation is not fulfilled.

## Guiding principles

-   Reusability
-   Simplicity
-   Efficiency
-   Minimal/small
