import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 

import Stack from './stackNavigation';

export default function Navegacao() {
  return (
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
  );
}