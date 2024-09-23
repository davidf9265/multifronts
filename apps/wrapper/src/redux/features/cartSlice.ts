import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    items: { [key: string]: object | number | string | null }[];
    total: number;
}

const initialState: CartState = {
    items: [{ producto: 'Producto 1', precio: 100 }],
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
export const { addToStore, changeTotal, cleanStore } = cartSlice.actions;

export default cartSlice.reducer;
