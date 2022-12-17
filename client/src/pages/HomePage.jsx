import { Link } from 'react-router-dom'
import { Flex, Button, Title, Container, Center } from '@mantine/core'
import { ServerErrorPage } from './500'
import { useGetSchemesQuery } from '../api/botApi'
import '../../styles.css'
import jwt_decode from 'jwt-decode';

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
      <Container className="homeTitle">
         <Center style={{ width: 500, height: 200 }}>
            <Title order={1}>HOME PAGE</Title>
            <Flex
               mih={150}
               bg="rgb(255, 255, 255)"
               gap="md"
               justify="center"
               align="center"
               direction="row"
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
            {/* {role==='ROLE_ADMIN'&&(<Button className="categoryButton" radius="md" size="xl" uppercase>
                        Edit
                     </Button>)} */}
         </Center>
      </Container>
   )
}
