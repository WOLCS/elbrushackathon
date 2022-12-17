import { Container } from '@mantine/core'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectSchemeNode } from '../store/botReducer'
import { Button, Text } from '../components'

const componentToType = {
   text: Text,
   spoiler: Text,
   button: Button
}

export const SchemeNode = () => {
   const { schemeId, schemeNodeId } = useParams()
   const { elements } = useSelector(selectSchemeNode(schemeId, schemeNodeId))

   return (
      <Container>
         {elements?.map(({ elementType, elementText, nextSchemeId, nextSchemeNodeId }) => {
            console.log(elementType, elementText, nextSchemeId, nextSchemeNodeId)

            const Component = componentToType[elementType]
            const props = {
               children: elementText,
               key: elementText.substring(0, 12),
               ...(elementType === 'button' && { nextSchemeId, nextSchemeNodeId })
            }
            return <Component {...props} />
         })}
      </Container>
   )
}
