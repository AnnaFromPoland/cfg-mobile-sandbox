import React from 'react';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Memes from './screens/Memes';
import SignOut from './screens/SignOut';
import Icon from 'react-native-ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Image } from 'react-native';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: '#EE6983',
        tabBarInactiveTintColor: '#850E35',
        tabBarStyle: {position: 'absolute', paddingBottom: 10},
        tabBarBackground: () => (<BlurView tint='light' intensity={100} style={StyleSheet.absoluteFill} />)
      }}>
        <Tab.Screen name='Home' component={Home} navigationOptions={{
            tabBarIcon: ({ size, color }) => (<Icon name={'home'} color={color} size={size} />)
          }} />
        <Tab.Screen name='AboutUs' component={AboutUs} navigationOptions={{
            tabBarIcon: ({ size, color }) => (<Icon name={'people-outline'} color={color} size={size} />)
        }}/>
        <Tab.Screen name='Memes' component={Memes} navigationOptions={{
            tabBarIcon: ({ size, color }) => (<Icon name={'happy-outline'}   color={color} size={size} />)
        }}/>
        <Tab.Screen name='SignOut' component={SignOut} navigationOptions={{
            tabBarIcon: ({ size, color }) => (<Icon name={'sign-out-outline'}   color={color} size={size} />)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}