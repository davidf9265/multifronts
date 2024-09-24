import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartState {
    items: { [key: string]: object | number | string | null }[];
    total: number;
}

const persistedStoreString = localStorage.getItem(
    'veevart_apps_store'
) as string;

const persistedStore = JSON.parse(
    persistedStoreString || '{}'
) as unknown as RootState;
const initialState: CartState = {
    items: persistedStore?.cartReducer?.items || [
        { producto: 'Producto 1', precio: 100 },
    ],
    total: 0,
};

/**
 * @description This is a redux slice that contains the cart state and actions
 */
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToStore: (state) => {
            state.items.push({ id: 1, name: 'Product 1', price: 100 });
        },
        replaceCart: (state, action: PayloadAction<CartState>) => {
            console.log(action.payload);
            state.items = action.payload.items;
            state.total = action.payload.total;
        },
        changeTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        },
        cleanStore: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToStore, changeTotal, cleanStore, replaceCart } =
    cartSlice.actions;

export default cartSlice.reducer;
