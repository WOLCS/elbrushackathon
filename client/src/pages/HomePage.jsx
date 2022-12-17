import { Link } from 'react-router-dom'
import { Flex, Button, Title, Container } from '@mantine/core'
import { ServerErrorPage } from './500'
import { useGetSchemesQuery } from '../api/botApi'

export const HomePage = () => {
   const { data: categories, isLoading, isSuccess, isError } = useGetSchemesQuery()
   console.log(categories, isLoading, isSuccess)

   if (isLoading) {
      return <h2>Loading...</h2>
   }

   if (isError) {
      return <ServerErrorPage />
   }

   return (
      <>
         <Container>
            <Title order={1}>HOME PAGE</Title>
            <Flex mih={150} bg="rgba(0, 0, 0, .3)" gap="md" justify="center" align="center" direction="row" wrap="wrap">
               {categories?.map(({ title, startSchemeNodeId }) => (
                  <Link to={'/' + startSchemeNodeId} key={title}>
                     <Button radius="md" size="xl" uppercase>
                        {title}
                     </Button>
                  </Link>
               ))}
            </Flex>
         </Container>
      </>
   )
}
