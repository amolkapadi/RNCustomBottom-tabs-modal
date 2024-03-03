import { View, Text } from 'react-native'
import React from 'react'
import NavigationTabs from './Navigation/NavigationTabs'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  )
}