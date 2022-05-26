import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Product } from '../components/Views/ProductView/types';
import { API_URL } from '../consts'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
      baseUrl: API_URL + '/products/',
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
    }),

    getProduct: builder.query<INF_Product, any>({
        query: ({ id, name } : { id: string, name: string }) => ({
            url: `product/${id}/${name}`,
            method: 'GET'
        })
    }),

    getFilteredProducts: builder.mutation<INF_Product[], any>({
      query: (filterSet) => ({
          url: 'filtered',
          method: 'POST',
          body: filterSet
      })
    })
  }),
})


export const { useGetProductsQuery, useGetFilteredProductsMutation,
    useGetProductQuery } = productApi;