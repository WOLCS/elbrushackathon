import { Spoiler as BaseSpoiler } from '@mantine/core'
import { Text } from './Text'

export const Spoiler = ({ children }) => {
   return (
      <BaseSpoiler maxHeight={5} showLabel="Show more" hideLabel="Hide">
         <Text fz="xl">{children}</Text>
      </BaseSpoiler>
   )
}
