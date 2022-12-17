import { Container } from '@mantine/core'
import { Button, Text, Spoiler } from '../components'
import { ServerErrorPage } from './500'
import { useGetSchemeNodeQuery } from '../api/botApi'
import { useParams } from 'react-router-dom'

const componentToType = {
   text: Text,
   spoiler: Spoiler,
   button: Button
}

export const SchemeNode = () => {
   const { schemeNodeId } = useParams()
   const { data: schemeNode, isLoading, isError, isSuccess } = useGetSchemeNodeQuery(schemeNodeId)

   if (isLoading) {
      return <h2>Loading...</h2>
   }

   if (isError) {
      return <ServerErrorPage />
   }
   if (isSuccess) {
      const { elements } = schemeNode
      return (
         <Container>
            {elements?.map(({ elementType, elementText, schemeNodeId }) => {
               console.log(elementType, elementText, schemeNodeId)

               const Component = componentToType[elementType]
               const props = {
                  children: elementText,
                  key: elementText.substring(0, 8),
                  ...(elementType === 'button' && { schemeNodeId })
               }
               return <Component {...props} />
            })}
         </Container>
      )
   }
   return <h3>Strange...</h3>
}
