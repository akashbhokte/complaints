import {createStackNavigator} from '@react-navigation/stack';
import React ,{useReducer} from 'react';

import Home from '../screens/Home';
import History from '../screens/History';
import Profile from '../screens/Profile';
const Stack = createStackNavigator()

function AppStack() {

    const allScreenOptions = ({route}) => ({
        headerStyle: {
          backgroundColor: Colors.header,
        },
        headerTintColor: '#fff',
        title: route.name,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      });
      
    return (
             <Stack.Navigator screenOptions={allScreenOptions}>
                    <Stack.Screen component={Home} name="Home" />
                    <Stack.Screen component={History} name="History" />
                    <Stack.Screen component={Profile} name="Profile" />
            </Stack.Navigator>
    )
}

export default AppStack
