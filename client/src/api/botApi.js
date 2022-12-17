import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const botApiSlice = createApi({
   reducerPath: 'botApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://elbrushackathon-jet.vercel.app/api' }),
   endpoints: builder => ({
      getSchemes: builder.query({
         query: () => '/scheme?short=true'
      }),
      getSchemeNode: builder.query({
         query: id => ({ url: `/node/${id}` })
      })
   })
})

export const { useGetSchemesQuery, useGetSchemeNodeQuery } = botApiSlice
