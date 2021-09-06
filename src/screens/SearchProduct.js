
import React, {useContext, useState} from 'react';import { View, Text } from 'react-native';
import {AuthContext} from '../auth/Auth';
import { SearchBar } from 'react-native-elements';

function Search(props) {
    const auth = useContext(AuthContext);
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',marginTop:5 }}>
      <SearchBar
        inputStyle={{backgroundColor: 'white'}}
        containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5,width:'95%'}}
        platform='android'
        placeholderTextColor={'#g5g5g5'}
        placeholder={'Type here'}/>
    </View>
  );
}

export default Search;
