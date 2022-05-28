import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INF_Seller } from '../components/Views/SellerView/types';
import { API_URL } from '../consts'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
      baseUrl: API_URL + '/users/',
      prepareHeaders: (headers, { getState }) => {
          return headers
      }
  }),
  endpoints: (builder) => ({
    getUser: builder.query<INF_Seller, any>({
        query: ({ id, name }) => ({
            url: `user/${id}/${name}`,
            method: 'GET'
        })
    })
  }),
})


export const { useGetUserQuery } = userApi;