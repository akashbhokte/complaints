
import React, {useContext, useState} from 'react';import { View, Text } from 'react-native';
import {AuthContext} from '../auth/Auth';

function Cart(props) {
    const auth = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cart Screen</Text>
      <Text>{props.tabLabel}</Text>
    </View>
  );
}

export default Cart;
