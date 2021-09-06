
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

function AppDrawer() {

    //const auth = useContext(AuthContext);
    console.log('AppDrawer');
  
    return (
      <Drawer.Navigator>
        <Drawer.Screen component={AppStack} name="Home" />
      </Drawer.Navigator>
    
  );
}

export default AppDrawer;
