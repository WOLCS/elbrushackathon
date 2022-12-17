import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://elbrushackathon-jet.vercel.app/api'

export const botApiSlice = createApi({
   reducerPath: 'botApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: builder => ({
      getSchemes: builder.query({ query: () => '/scheme?short=true' }),
      getSchemeNode: builder.query({ query: id => `/node/${id}` })
   })
})

export const { useGetSchemesQuery, useGetSchemeNodeQuery } = botApiSlice
