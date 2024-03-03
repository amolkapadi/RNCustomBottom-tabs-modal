import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Buy from '../screens/Buy';
import Account from '../screens/Home';
import Dashboard from '../screens/Dashboard';

const MoreTabComponent = ({ openModal, focused }) => (
  <TouchableOpacity onPress={openModal}>
    <View style={{
      height: 50,
      width: 50,
      alignItems: 'center',
      marginBottom: 30,
      backgroundColor: '#e8eaf6',
      borderRadius: 10, padding: 5
    }}>
      <Image source={require('../assets/more.png')}
        style={{
          height: 40, width: 40,
          backgroundColor:focused ? 'blue' :'transparent'
        }}
      />
    </View>
  </TouchableOpacity>
)



export default function NavigationTabs() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }
  return (
    <View style={{flex:1}}>
      <Tab.Navigator
        screenOptions={({route }) => ({
          tabBarLabel: route.name === 'More' ? '\u200B' :route.name,
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'black',
          headerShown: false,
          tabBarStyle: { paddingBottom: 10, height: 60 },

        })}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("../assets/Home.png")}
                style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'black' }}
              />
            )
          }}
        />
        <Tab.Screen name="Buy" component={Buy}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("../assets/Buy.png")}
                style={{ width: 24, height: 20, tintColor: focused ? 'blue' : 'black' }}
              />
            )
          }} />

          <Tab.Screen 
              name='More'
              options={{
                tabBarIcon:({focused}) =>(
                  <MoreTabComponent openModal={openModal} focused={focused}/>
                ),
                tabBarShowLabel:false
              }}
          >
           {() => null} 
            </Tab.Screen>  

        <Tab.Screen name="Account" component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("../assets/Account.png")}
                style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'black' }}
              />
            )
          }} />
        <Tab.Screen name="Dashboard" component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image source={require("../assets/Dashboard.png")}
                style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'black' }}
              />
            )
          }} />
      </Tab.Navigator>
            
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', margin: 0 }}>
          <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 8, marginBottom: 100 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{fontWeight:'bold'}}>Modal Title</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image source={require('../assets/close.png')}
                  style={{
                    height: 20, width: 20
                  }}
                />
              </TouchableOpacity>
              
            </View>
              <Text >Custom Modal In Bottom Tabs IN React Native </Text>

          </View>
        </View>

      </Modal>
    </View>
  )
}