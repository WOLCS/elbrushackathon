import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'https://elbrushackathon-jet.vercel.app'

export const botApiSlice = createApi({
   reducerPath: 'botApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://elbrushackathon-jet.vercel.app' }),
   endpoints: builder => ({
      getSchemes: builder.query({
         query: () => '/api/scheme?short=true'
      }),
      getSchemesFull: builder.query({
         query: () => '/api/scheme'
      }),
      getSchemeNode: builder.query({
         query: id => ({ url: `/api/node/${id}` })
      }),
      getImages: builder.query({
         query: elementLink => ({ url: `/${elementLink}` })
      }),
      postCredentials: builder.mutation({
         query: credentials => ({
            url: '/api/auth/authenticate',
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
               'Content-type': 'application/json; charset=UTF-8'
            }
         })
      })
   })
})

export const {
   useGetSchemesQuery,
   useGetSchemesFullQuery,
   useGetSchemeNodeQuery,
   useGetImagesQuery,
   usePostCredentialsMutation
} = botApiSlice
