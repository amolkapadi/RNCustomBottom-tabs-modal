import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Buy from '../screens/Buy'
import Dashboard from '../screens/Dashboard'
import Account from '../screens/Account'
const Tab = createBottomTabNavigator();


const MoreTabComponent = ({ openModal, focused }) => (
    <TouchableOpacity onPress={openModal}>
        <View style={{   width: 50,
                    height: 50,alignItems: 'center', marginBottom: 30, backgroundColor: '#e8eaf6', borderRadius: 10, padding: 5 }}>
            <Image
                source={require('../assets/more.png')}
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: focused ? 'red' : 'transparent',
                }}
            />
        </View>
    </TouchableOpacity>
);

export default function NavigationTabs() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabel: route.name === 'More' ? '\u200B' : route.name,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false,
                    tabBarStyle: { paddingBottom: 10, height: 60 },
                    contentStyle: { marginBottom: 18 },
                })}
            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image source={require('../assets/Home.png')}
                                style={{ width: 20, height: 20, tintColor: focused ? 'red' : 'black' }}
                            />
                        )
                    }} />
                <Tab.Screen name="Account" component={Account}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image source={require('../assets/Account.png')}
                                style={{ width: 20, height: 20, tintColor: focused ? 'red' : 'black' }}
                            />
                        )
                    }} />
                <Tab.Screen
                    name="More"
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MoreTabComponent openModal={openModal} focused={focused} />
                        ),
                        tabBarShowLabel: false,
                    }}

                >
                    {() => null}
                </Tab.Screen>
                <Tab.Screen name="Buy" component={Buy}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image source={require('../assets/Buy.png')}
                                style={{ width: 25, height: 20, tintColor: focused ? 'red' : 'black' }}
                            />
                        )
                    }} />
                <Tab.Screen name="Dashboard" component={Dashboard}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image source={require('../assets/Dashboard.png')}
                                style={{ width: 20, height: 20, tintColor: focused ? 'red' : 'black' }}
                            />
                        )
                    }} />

            </Tab.Navigator>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', margin: 0 }}>
                    <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 8, marginBottom: 100 }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
                                Modal Title
                            </Text>
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={require('../assets/close.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <Text>More Tab Content</Text>

                    </View>
                </View>
            </Modal>

        </View>
    )
}