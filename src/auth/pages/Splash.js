import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';

function splash() {
    console.log("splash Screen");

//  const auth = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{flex:10}}>
        <View style={{flex:1, flexDirection:'row'}}>
        <View style={styles.imageView}>
            <Image
              style={{width:Dimensions.get('screen').width/2.5}}
              resizeMode="contain"
              source= {require('../../assets/img/BGCLogo.jpg')}
              
            />
          </View>
          <View style={styles.imageView}>
            <Image
              style={{width:Dimensions.get('screen').width/2.5}}
              resizeMode="contain"
              source= {require('../../assets/img/2ChitleBandhu.png')}
              
            />
          </View>
        </View>
      </View>
      <View style={{flex:1}}>
        <Text style={styles.heading}> </Text>
        <ActivityIndicator size="large" color="#330066" animating />
        {/* <Text>{auth.state.statusText}</Text>  * FIXME */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: '50%',
    width: '60%',
    alignSelf: 'center',
  },
  imageView:{
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default splash;
