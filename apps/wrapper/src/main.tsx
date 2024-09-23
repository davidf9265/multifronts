import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { addToStore } from './redux/features/cartSlice';
import TicketingApp from './ticketingApp/TicketingApp';
import DonationApp from './donationApp/DonationApp';

const ticketing = ReactDOM.createRoot(
    document.getElementById('veevart_tickets') as HTMLElement
);

const donations = ReactDOM.createRoot(
    document.getElementById('veevart_donations') as HTMLElement
);

if (ticketing) {
    ticketing.render(
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <TicketingApp />
                </Provider>
            </BrowserRouter>
        </StrictMode>
    );
}

if (donations) {
    donations.render(
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <DonationApp />
                </Provider>
            </BrowserRouter>
        </StrictMode>
    );
}
