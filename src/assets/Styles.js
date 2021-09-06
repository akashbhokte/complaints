import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from './Colors';


const styles = StyleSheet.create({
    cardView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      backgroundColor: Colors.bgc,
    },
    heading: {
      paddingTop:15,
      textAlign: 'center',
      fontSize: 25,
    },
    image: {
      width: 82,
      height: 69,
    },
    text18:{
      fontSize:18,
      padding:2,
    },
    text20:{
      fontSize:20,
      padding:2,
    },
    colorGold: {
      backgroundColor:'gold'
    },
    colorDodger: {
      backgroundColor:'dodgerblue'
    },
    flex1:{flex: 1},
  });

export default styles;