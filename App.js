import React from 'react';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Memes from './screens/Memes';
import SignOut from './screens/SignOut';
import BlurView from 'expo-blur';
import Menu from './assets/icons/menu.svg'
import SignOut from './assets/icons/sign-out.svg'
import Memes from './assets/icons/sun.svg'
import AboutUs from './assets/icons/user-group.svg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        /* tabBarActiveTintColor: '#e91e63', */
      }}>
        <Tab.Screen name="Home" component={Home}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Menu color={'#850E35'} size={30} />
          ),
        }} />
        <Tab.Screen name='AboutUs' component={AboutUs} 
          options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color, size }) => (
            <AboutUs color={'#850E35'} size={30} />
          ),
        }} />
        <Tab.Screen name='Memes' component={Memes} 
          options={{
          tabBarLabel: 'Memes',
          tabBarIcon: ({ color, size }) => (
            <Memes color={'#850E35'} size={30} />
          ),
        }} />
        <Tab.Screen name='SignOut' component={SignOut} 
          options={{
          tabBarLabel: 'SignOut',
          tabBarIcon: ({ color, size }) => (
            <SignOut color={'#850E35'} size={30} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}