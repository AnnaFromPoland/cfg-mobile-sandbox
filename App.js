import React from 'react';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Memes from './screens/Memes';
import SignOut from './screens/SignOut';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='AboutUs' component={AboutUs} />
        <Tab.Screen name='Memes' component={Memes} />
        <Tab.Screen name='SignOut' component={SignOut} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}