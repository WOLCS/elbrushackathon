import { Text as BaseText } from '@mantine/core'

export const Text = ({ children }) => (
   <BaseText align="center" fz="xl">
      {children}
   </BaseText>
)
