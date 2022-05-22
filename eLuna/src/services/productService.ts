import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Product } from '../components/Views/ProductView/types';
import { API_URL } from '../consts'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
      baseUrl: API_URL + 'products',
      prepareHeaders: (headers, { getState }) => {
          return headers
      }
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<INF_Product[], void>({
        query: () => ({
            url: '',
            method: 'GET'
        })
    })
  }),
})


export const { useGetProductsQuery } = productApi;