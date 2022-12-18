import { Global } from '@mantine/core'

export const GlobalStyles = () => {
   return (
      <Global
         styles={[
            {
               '@font-face': {
                  fontFamily: 'RF-Rostin-Regular',
                  src: 'assets/fonts/RF-Rostin-Regular.woff format("woff2")',
                  fontWeight: 400,
                  fontStyle: 'regular'
               }
            },
            {
               '@font-face': {
                  fontFamily: 'RF-Rostin-Bold',
                  src: 'assets/fonts/RF-Rostin-Bold.woff format("woff2")',
                  fontWeight: 700,
                  fontStyle: 'bold'
               }
            }
         ]}
      />
   )
}
