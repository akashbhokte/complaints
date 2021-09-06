
import React, {useEffect, useState, useReducer, useMemo, useRef} from 'react';
import {Alert, View, PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from '../screens/Home_Test';
import SplashScreen from './pages/Splash';

//import AppDrawer  from '../navigation/AppDrawer';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from '../screens/Home';
import Otp from './pages/Otp';
import OrderHistory from  '../screens/OrderHistory';
import ShowDetails from '../screens/ShowDetails';
import UpdateAddress from '../screens/UpdateAddress';
import Profile from '../screens/Profile';
export const AuthContext = React.createContext();

 
const initialAppState = {
    isSignedIn: false,
    isLoading: true,
    showBottomBar:true,
    cart:[],
    user: {}
};

  const Stack = createNativeStackNavigator();


function reducer(prev, action) {
    switch (action.type) {
      case 'SIGN_IN':
        console.log('Auth Reducer: SIGN_IN fired. ', action.data);
        return {
          ...prev,
          isSignedIn: true,
          isLoading: false,
          user:action.data
        };
    case 'NEW_INSTALL':
        console.log("Auth: "+'New Install recieved.');
        return {
            ...prev,
            isLoading: false,
        };        
      case 'SIGN_OUT':
        return {
          ...prev,
          isSignedIn: false,
        };
      case 'LOADING':
        return {
          ...prev,
          isLoading: true,
        };
      case 'SHOWTAB':
        return {
          ...prev,
          showBottomBar: true,
        };
      case 'HIDETAB':
        return {
          ...prev,
          showBottomBar: false,
        };
  
    }
  }




function Auth() {
   
    console.log('Auth Com');

    const [state, dispatch] = useReducer(reducer, initialAppState);

    const Stack = createNativeStackNavigator();


    console.log('Auth' + state);
    
    
    useEffect(() => {
        const bootstrapAsync = async () => {
          let userdata, region, SignedIn, oneTimeData,language;
          try {
            SignedIn = await AsyncStorage.getItem('SignInStatus');
            userdata = await AsyncStorage.getItem('loggedinuser');
            console.log("SignedIn Status " + SignedIn);
            if (JSON.parse(SignedIn)) {
              dispatch({type: 'SIGN_IN', data: JSON.parse(userdata), dispatch: dispatch});
            } else {
               dispatch({type: 'NEW_INSTALL'});
            }
          } catch (e) {
            console.log(e);
          }
        };
        bootstrapAsync();
      }, []);
    

    return state.isLoading ? (
    
        <>
        <AuthContext.Provider value={{state: state, dispatch: dispatch}}>
         
          <SplashScreen />
         
        </AuthContext.Provider>
      </>  
    
  ) : (
      
    <>
      <AuthContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
        }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
              screenOptions={{
                headerShown: false
              }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Register" component={Register} /> 
            <Stack.Screen name="Otp" component={Otp} /> 
            <Stack.Screen name="OrderHistory" component={OrderHistory} /> 
            <Stack.Screen name="ShowDetails" component={ShowDetails} /> 
            <Stack.Screen name="UpdateAddress" component={UpdateAddress} /> 
            <Stack.Screen name="Profile" component={Profile} /> 
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </>
      
  )
}

export default Auth;