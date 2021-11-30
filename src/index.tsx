import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FormContextProvider } from './common/FormContext';

ReactDOM.render(
    <React.StrictMode>
        <FormContextProvider>
            <App />
        </FormContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
