import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RegisterScreen from './pages/Register';
import LoginScreen from './pages/Login';
import Home from '../screens/Home';
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
