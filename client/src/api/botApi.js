import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://elbrushackathon-jet.vercel.app/api'

export const botApiSlice = createApi({
   reducerPath: 'botApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://elbrushackathon-jet.vercel.app' }),
   endpoints: builder => ({
      getSchemes: builder.query({
         query: () => '/api/scheme?short=true'
      }),
      getSchemeNode: builder.query({
         query: id => ({ url: `/api/node/${id}` })
      }),
      getImages: builder.query({
         query: elementLink => ({ url: `/${elementLink}`})
      })

   })
})

export const { useGetSchemesQuery, useGetSchemeNodeQuery, useGetImagesQuery } = botApiSlice
