import React, {useState} from 'react'
import { Text, Button, Collapse } from '@mantine/core';

export const Spoiler = () => {
    const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle content
      </Button>

      <Collapse in={opened}>
      <Text fz="xl">Default text</Text>
      </Collapse>
    </>
  )
}
