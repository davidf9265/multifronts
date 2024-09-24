import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TicketingApp from './ticketingApp/TicketingApp';
import DonationApp from './donationApp/DonationApp';
import { NextUIProvider } from '@nextui-org/react';

const ticketing = ReactDOM.createRoot(
    document.getElementById('veevart_tickets') as HTMLElement
);

const donations = ReactDOM.createRoot(
    document.getElementById('veevart_donations') as HTMLElement
);

if (ticketing) {
    ticketing.render(
        <StrictMode>
            <NextUIProvider>
                <BrowserRouter>
                    <Provider store={store}>
                        <TicketingApp />
                    </Provider>
                </BrowserRouter>
            </NextUIProvider>
        </StrictMode>
    );
}

if (donations) {
    donations.render(
        <StrictMode>
            <NextUIProvider>
                <BrowserRouter>
                    <Provider store={store}>
                        <DonationApp />
                    </Provider>
                </BrowserRouter>
            </NextUIProvider>
        </StrictMode>
    );
}
