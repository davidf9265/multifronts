import { combineReducers, configureStore } from '@reduxjs/toolkit';

import cartReducer, { replaceCart } from './features/cartSlice';

const rootReducer = combineReducers({
    cartReducer,
});

const configuredStore = configureStore({
    reducer: rootReducer,
});
// Subscribe to store updates to save to localStorage
configuredStore.subscribe(() => {
    const state = configuredStore.getState();
    localStorage.setItem('veevart_apps_store', JSON.stringify(state));
});

// mount storage listener
window.addEventListener('storage', (event) => {
    if (event?.storageArea && event.storageArea['veevart_apps_store']) {
        const persistedStoreString = localStorage.getItem(
            'veevart_apps_store'
        ) as string;

        const persistedStore = JSON.parse(
            persistedStoreString || '{}'
        ) as unknown as RootState;

        configuredStore.dispatch(replaceCart(persistedStore.cartReducer));
    }
});

export const store = configuredStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
