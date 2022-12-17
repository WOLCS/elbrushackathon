import { useParams } from 'react-router-dom'
import { Container, Flex } from '@mantine/core'
import { Button, Text, Spoiler, LoadingOverlay } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemeNodeQuery } from '../api/botApi'

const componentToType = {
   text: Text,
   spoiler: Spoiler,
   button: Button
}

export const SchemeNode = () => {
   const { schemeNodeId } = useParams()
   const { data: schemeNode, isLoading, isError } = useGetSchemeNodeQuery(schemeNodeId)

   return isLoading ? (
      <LoadingOverlay />
   ) : isError ? (
      <ServerErrorPage />
   ) : (
      <Container size="sm">
         <Flex gap="xl" align="stretch" direction="column">
            {schemeNode.elements?.map(({ elementType, elementText, schemeNodeId }) => {
               const Component = componentToType[elementType]
               return (
                  <Component key={elementText.substring(0, 8)} {...(elementType === 'button' && { schemeNodeId })}>
                     {elementText}
                  </Component>
               )
            })}
         </Flex>
      </Container>
   )
}
