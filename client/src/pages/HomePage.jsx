import { useSelector } from 'react-redux'
import { selectSchemes } from '../store/botReducer'
import { Flex, Button, Title, Container, Center} from '@mantine/core';

export const HomePage = () => {
   const categories = useSelector(selectSchemes)
   return (
      <> <Container><Center style={{ width: 400, height: 200 }}>
    <Title order={1}>HOME PAGE</Title>
    </Center>
         <Flex
      mih={150}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >   
         {categories.map(category => (
               <Button key={category} radius="md" size="xl" uppercase>{category}</Button>
         ))}
               
         </Flex>
      </Container>
      </>
   )
}
