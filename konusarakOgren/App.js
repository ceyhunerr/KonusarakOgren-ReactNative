import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import CharView from './src/screens/CharView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './src/RootNavigation';
export default function App() {

    const Stack = createNativeStackNavigator();
   

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen  name='Home' component={Home} />
                <Stack.Screen screenOptions={{ headerShown: false }} name='Detail'  component={Detail} />
                <Stack.Screen screenOptions={{ headerShown: false }} name='CharView' component={CharView} />

            </Stack.Navigator>
        </NavigationContainer>
         
    
    ) 
        
        
          
            
        
      
    }


