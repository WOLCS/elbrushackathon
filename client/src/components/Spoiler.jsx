import React from 'react'
import { Text } from '@mantine/core';
import { Spoiler as MantineSpoiler} from '@mantine/core';
export const Spoiler = () => {
  return (
    <MantineSpoiler maxHeight={5} showLabel="Show more" hideLabel="Hide">
<Text fz="xl">Default text</Text>
</MantineSpoiler>
    
  )
}
