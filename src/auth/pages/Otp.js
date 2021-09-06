import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Alert, View, Text, TextInput, Image} from 'react-native';
import {Button, Header, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/Colors';
import strings from '../../assets/Strings';
import styles from '../../assets/Styles';
import {AuthContext} from '../Auth';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import {api}  from '../../api/serverrequest'
import * as serverAPI from '../../api/serverrequest.js'



function Otp({navigation, route}) {
    const auth = useContext(AuthContext);
    const [otpvalue, setOtpvalue] = useState(0);
    const [loading, setLoading] = useState(false);

    const  custdetails  = route.params;

    console.log('OTP screen');
    console.log(custdetails);
    console.log('mobile');
    console.log(custdetails.customer.mobile);


    async function submitHandler() {
        
        
        try {
    
                setLoading(true);
                console.log('submit handler');
                console.log('mobile = ' + custdetails.mobile);
                console.log('otp = ' + otpvalue);
                const otpResponse = await serverAPI.validateOTP(custdetails.customer.mobile,otpvalue,custdetails.customer.pwd);
                console.log('otpResponse');
                console.log(otpResponse.data);
                setLoading(false);
                //await AsyncStorage.setItem('loggedinuser', JSON.stringify(loginResponse.data.Cusomter));
                //auth.dispatch({type: 'SIGN_IN', data: loginResponse.data.Cusomter});
                
                
                if (otpResponse.data.Sucess)  {
                    console.log('OTP Sucess');
                    await AsyncStorage.setItem('loggedinuser', JSON.stringify(custdetails.customer));
                    await AsyncStorage.setItem('SignInStatus', '1');

                    
                    auth.dispatch({type: 'SIGN_IN', data: custdetails.customer});
                    navigation.navigate('Home');
    
    
                }  else {
    
                    //TODO: alert user of error 
                    // invalid OTP
                }
    
      
      
          }catch(e) {
            setLoading(false);
            console.log(e);
          }
        
          
      }
  
      

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{flex: 1,flexDirection:'column'}}>
                <Header
                    leftComponent={
                    <Button
                        icon={
                        <Icon
                            name="arrow-back"
                            style={{fontSize: 18}}
                            type="MaterialIcons"
                        />
                        }
                        type="clear"
                        onPress={() => navigation.goBack()}
                    />
                    }
                    centerComponent={<Text style={{fontSize: 20}}>OTP</Text>}
                    backgroundColor={Colors.header}
                />
                <View style={localstyles.container}>
                <View style={{flex:20}}>

                
                    <Image
                    style={localstyles.img}
                    source={require('../../assets/img/XpressLogo.png')}
                    resizeMode="contain"></Image>
                
                </View>

                <View style={{flex:80,flexDirection:'column',margin:20,alignItems:'center'}}>
                    <Text>Enter OTP to Complete your Registration.</Text>
                    <View style={{flexDirection:'row'}}>
                    <TextInput
                            placeholder="OTP"
                            style={localstyles.placeholder}
                            maxLength={4}
                            keyboardType='number-pad'
                            onChangeText={(text) => {
                                setOtpvalue(text);
                            }}
                        />
                    </View>
                    <View style={{padding: 15}}>
                    <Button style={localstyles.button}
                        title="Contine"
                        onPress={submitHandler}
                        />          
                    </View>

                </View>

            </View>
                

        </View>

    </SafeAreaView>  

    )
}

export default Otp;

const localstyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.bgc,
    },
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    img: {
      width: Dimensions.get("screen").width/3,
      // position : 'absolute',
      // top : 0,
      // margin : 10
      display: 'flex',
      flex: 1,
      marginTop: 'auto',
      justifyContent: 'space-between',
      padding: 10,
  
      // alignItems: 'center',
      // alignContent : 'center'
    },
    placeholder: {
      display: 'flex',
      flex: 1,
      textAlign: 'center',
      letterSpacing: 5,
      fontWeight: 'bold',
      // fontFamily: 'roboto-regular',
      color: '#121212',
      height: 40,
      width: '50%',
      margin: 20,
      borderWidth: 0.5,
      borderColor: '#000000',
      borderRadius: 15,
      //  border:'solid 1px black',
      //  padding: 5
    },
  
    button: {
      backgroundColor: 'dodgerblue',
      padding: 10,
      margin: 10,
      justifyContent:'center',
      borderRadius: 12,
    },
    buttonText: {
      fontSize: 16,
      paddingHorizontal: 40,
      justifyContent:'center',
      textAlign:'center',
      color: 'white',
    },
  });
  