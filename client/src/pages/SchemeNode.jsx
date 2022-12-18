import { useParams } from 'react-router-dom'
import { Container, Flex } from '@mantine/core'
import { Button, Text, Spoiler, LoadingOverlay, Image } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemeNodeQuery } from '../api/botApi'
import '../../styles.css'

const componentToType = {
   text: Text,
   spoiler: Spoiler,
   button: Button,
   image: Image
}

export const SchemeNode = () => {
   const { schemeNodeId } = useParams()
   const { data: schemeNode, isLoading, isError } = useGetSchemeNodeQuery(schemeNodeId)

   return isLoading ? (
      <LoadingOverlay />
   ) : isError ? (
      <ServerErrorPage />
   ) : (
      <Container className='questionBody'>
         <Flex gap="xl" direction="column">
            {schemeNode.elements?.map(({ elementType, elementText, schemeNodeId, elementLink, next, elementId }) => {
               const Component = componentToType[elementType]
               return (
                  <Component
                     key={elementId}
                     nextSchemeNodeId={next}
                     {...(elementType === 'button' && { schemeNodeId })}
                     {...(elementType === 'image' && { elementLink, elementText })}
                     {...(elementType === 'spoiler' && { elementText })}
                  >
                     {elementText}
                  </Component>
               )
            })}
         </Flex>
      </Container>
   )
}
