import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:"blue"}}>
      <Text style={{fontSize:20, backgroundColor:'red', textAlign:'center', color:'white', padding:10}}>Home</Text>
    </View>
  )
}