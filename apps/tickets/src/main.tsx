import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as EinziProvider } from 'einzi';

import App from './app/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <EinziProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EinziProvider>
    </StrictMode>
);
