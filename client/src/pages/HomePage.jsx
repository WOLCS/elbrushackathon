import { Link } from 'react-router-dom'
import { Flex, Button, Title, Container, Center } from '@mantine/core'

import { LoadingOverlay } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemesQuery } from '../api/botApi'
import '../../styles.css'

export const HomePage = () => {
   const { data: categories, isLoading, isSuccess, isError } = useGetSchemesQuery()

   return isLoading ? (
      <LoadingOverlay />
   ) : isError ? (
      <ServerErrorPage />
   ) : (
      <Container className="homeTitle">
         <Center style={{ width: 500, height: 200 }}>
            <Title order={1}>Выбери тему обучения</Title>
         </Center>
         <Flex
            mih={150}
            bg="rgb(255, 255, 255)"
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
         >
            {categories?.map(({ title, startSchemeNodeId }) => (
               <Link to={'/' + startSchemeNodeId} key={title}>
                  <Button className="categoryButton" radius="md" size="xl" uppercase>
                     {title}
                  </Button>
               </Link>
            ))}
         </Flex>
      </Container>
   )
}
