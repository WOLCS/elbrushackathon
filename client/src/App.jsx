import React from 'react'
import { Flex, Button, Container } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import ButtonItem from './Button.jsx';
import Spoiler from './Spoiler.jsx';

import TextPage from './TextPage.jsx';


export const App = () => {
  return (
    <Container>
      <TextPage />
      <Spoiler />
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button><ButtonItem/></Button>
      <Button><ButtonItem/></Button>
   
    </Flex></Container>
  );
}
    
  
  

