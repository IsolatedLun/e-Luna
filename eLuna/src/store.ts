import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './features/Product-Slice/product-slice';
import { productApi } from './services/productService';

export const store = configureStore({
  reducer: {
    'product': productSlice.reducer,
    [productApi.reducerPath]: productApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;