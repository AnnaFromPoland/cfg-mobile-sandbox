import React from 'react';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Memes from '../screens/Memes';
import SignOut from '../screens/SignOut';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: '#EE6983',
        tabBarInactiveTintColor: '#850E35',
        tabBarInactiveBackgroundColor: '#FFF5E4',
        tabBarActiveBackgroundColor: '#FFF5E4',
        tabBarStyle: {position: 'absolute'},
        tabBarBackground: () => (<BlurView tint='light' intensity={100} style={StyleSheet.absoluteFill} />)
      }}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name='home-outline' color={color} size={size} />)
          }} />
        <Tab.Screen name='AboutUs' component={AboutUs} options={{
            tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name='account-multiple' color={color} size={size} />)
        }}/>
        <Tab.Screen name='Memes' component={Memes} options={{
            tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name='emoticon-happy' color={color} size={size} />)
        }}/>
        <Tab.Screen name='SignOut' component={SignOut} options={{
            tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name='logout' color={color} size={size} />)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}