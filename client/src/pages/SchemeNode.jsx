import { Flex, Container } from "@mantine/core"
import { ButtonItem, Spoiler, TextPage } from "../components"

export const SchemeNode = () => {
   return (  <Container>
      <TextPage />
      <Spoiler />
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <ButtonItem/>
      <ButtonItem/>
   
    </Flex></Container>)
}
