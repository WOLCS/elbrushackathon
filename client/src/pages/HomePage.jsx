import { Link } from 'react-router-dom'
import { Flex, Button, Title, Container, Center } from '@mantine/core'
import { LoadingOverlay } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemesQuery } from '../api/botApi'

export const HomePage = () => {
   const { data: categories, isLoading, isSuccess, isError } = useGetSchemesQuery()

   return isLoading ? (
      <LoadingOverlay />
   ) : isError ? (
      <ServerErrorPage />
   ) : (
      <Container className="homeTitle" bg="#f3f1f8;">
         <Center>
            <Title color={'#4520ab'} order={1}>
               ТEМА ОБУЧЕНИЯ
            </Title>
         </Center>
         <Flex mih={300} bg="#f3f1f8;" gap="md" justify="center" align="center" direction="column" wrap="wrap">
            {categories?.map(({ title, startSchemeNodeId }) => (
               <Link to={'/' + startSchemeNodeId} key={title}>
                  <Button className="categoryButton" size="xl" uppercase>
                     {title}
                  </Button>
               </Link>
            ))}
         </Flex>
      </Container>
   )
}
