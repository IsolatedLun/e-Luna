import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './features/Product-Slice/product-slice';

export const store = configureStore({
  reducer: {
    'product': productSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;