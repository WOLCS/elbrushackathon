import { useSelector } from 'react-redux'
import { selectSchemes } from '../store/botReducer'
import { Flex, Button, Title, Container, Center} from '@mantine/core';
import '../../styles.css';

export const HomePage = () => {
   const categories = useSelector(selectSchemes)
   return (
      <> <Container className="homeTitle"><Center style={{ width: 500, height: 200 }}>
    <Title order={1}>HOME PAGE</Title>
    </Center>
         <Flex
      mih={150}
      bg="rgb(255, 255, 255)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >   
         {categories.map(category => (
               <Button className="categoryButton"key={category} radius="md" size="xl" uppercase>{category}</Button>
         ))}
               
         </Flex>
      </Container>
      </>
   )
}
