
import React, {useContext, useState} from 'react';import { View, Text } from 'react-native';
import {AuthContext} from '../auth/Auth';

function History() {
    const auth = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
    </View>
  );
}

export default History;
