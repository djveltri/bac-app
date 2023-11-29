// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bac from './Bac';
import UserData from './UserData';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bac" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bac" component={Bac} />
        <Stack.Screen name="UserData" component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
