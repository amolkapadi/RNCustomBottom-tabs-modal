import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationTabs from './Navigation/NavigationTabs'
export default function App() {
  return (
    <NavigationContainer>
        <NavigationTabs />
    </NavigationContainer>
  )
}