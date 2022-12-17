import { Link } from 'react-router-dom'
import { Flex, Button, Title, Container, Center } from '@mantine/core'
import { LoadingOverlay } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemesQuery } from '../api/botApi'
import '../../styles.css'
import jwt_decode from 'jwt-decode';

export const HomePage = () => {
   const { data: categories, isLoading, isSuccess, isError } = useGetSchemesQuery()
   console.log(categories, isLoading, isSuccess)

   return isLoading ? (
      <LoadingOverlay />
   ) : isError ? (
      <ServerErrorPage />
   ) : (
      <Container>
         <Center>
            <Flex gap="xl" align="center" direction="column">
               <Title order={1}>Выбери тему обучения</Title>
               <Flex gap="xl" align="center" direction="column">
                  {categories?.map(({ title, startSchemeNodeId }) => (
                     <Link to={'/' + startSchemeNodeId} key={title}>
                        <Button className="categoryButton" radius="md" size="xl" uppercase>
                           {title}
                        </Button>
                     </Link>
                  ))}
               </Flex>
            </Flex>
            {/* {role==='ROLE_ADMIN'&&(<Button className="categoryButton" radius="md" size="xl" uppercase>
                        Edit
                     </Button>)} */}
         </Center>
      </Container>
   )
}
