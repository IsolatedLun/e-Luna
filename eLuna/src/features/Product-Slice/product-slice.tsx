import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../services/productService";
import { INF_AddToCartPayload, INF_ProductState, INF_RemoveFromCartPayload } from "./types";

const initialState: INF_ProductState = {
    cart: {
        items: {},
        total: 0,
    },

    products: []
}

export const productSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {
        addToCart(state, action: INF_AddToCartPayload) {
            const product = action.payload.product;

            if(!state.cart.items[product.id]) {
                state.cart.items[product.id] = product;
                state.cart.total += product.actual_price;
            }
        },

        removeFromCart(state, action: INF_RemoveFromCartPayload) {
            if(state.cart.items[action.payload.id]) {
                delete state.cart.items[action.payload.id];

                state.cart.total -= action.payload.price;
            }
        },
    },

    extraReducers: (builder) => {
        builder.addMatcher(productApi.endpoints.getFilteredProducts.matchFulfilled, (state, action) => {
            state.products = action.payload
        })
    }

})

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;