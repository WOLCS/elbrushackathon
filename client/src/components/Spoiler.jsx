import React from 'react'
import { Text } from '@mantine/core'
import { Spoiler as MantineSpoiler } from '@mantine/core'
export const Spoiler = ({ elementText }) => {
   return (
      <MantineSpoiler maxHeight={25} showLabel="Подробнее" hideLabel="Скрыть">
         <Text fz="xl">{elementText}</Text>
      </MantineSpoiler>
   )
}
 