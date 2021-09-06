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

import * as serverAPI from '../../api/serverrequest.js'



function Register({navigation, route}) {
    const auth = useContext(AuthContext);

  const [custname, setCustname] = useState('');
  const [mobile, setMobile] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [data, setShow] = useState({
    email: '',
    password: '',
    checkInputText: false,
    notTen: false,
    secureTextEntry: true,
  });

  useEffect(() => {
    console.log('Log in page mounted');
  }, []);
  
  const [tp, setTp] = useState('');
  const checkMob = (text) => {
    if (text.length == 10) {
      setShow({
        ...data,
        email: text,
        checkInputText: true,
      });
    } else {
      setShow({
        ...data,
        email: text,
        notTen: true,
      });
    }
  };

  function pass(val) {
    setShow({
      ...data,
      password: val,
    });
  }

  const updateToggle = () => {
    setShow({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  async function submitHandler() {
    console.log("submitHandler");
    console.log(mobile);
    console.log(password);

    let data = {
        "mobile" : mobile,
        "descn" : custname,
        "loginid" : username,
        "pwd" : password,
        "tenantrecno" : 1
    }
  
    
    try {

            setLoading(true);
            console.log(data);
           const loginResponse = await serverAPI.registerCustomer(data);

            // sample for testing
            /*
            const custObject = {
                "recno": 249646,
                "tenantrecno": 1,
                "shortguid": "7925e519-4299-4402-a1ae-8f81f9251f9a",
                "domainrecno": 0,
                "code": "9881902260",
                "descn": "Mandar Pendse",
                "descn1": null,
                "address": null,
                "address1": null,
                "pincode": null,
                "latitude": null,
                "longitude": null,
                "pan": null,
                "gstn": null,
                "phone": null,
                "mailid": null,
                "mobile": "9881902260",
                "languagerecno": null,
                "logo": null,
                "logoHD": null,
                "logohighres": null,
                "active": null,
                "aadhar": null,
                "loginid": "mandar",
                "pwd": "mandar123",
                "ifsc": null,
                "acountno": null,
                "firebasetoken": null,
                "creditallowed": 0,
                "staterecno": null,
                "districtrecno": null,
                "cityrecno": null,
                "regionrecno": null,
                "dob": 0,
                "opendate": 0,
                "customertyperecno": 1,
                "otp": "6337",
                "otpdate": 0,
                "otptime": 0,
                "id": null,
                "uploadedtoscm": 0
            }
            */
            console.log('loginResponse');
           //console.log(loginResponse.data.Sucess);
           //navigation.navigate('Otp');
            let custObject = loginResponse.data.Cusomter;
           console.log(custObject);
           navigation.navigate('Otp', {
            customer: custObject
          });
            setLoading(false);
            //await AsyncStorage.setItem('loggedinuser', JSON.stringify(loginResponse.data.Cusomter));
            //auth.dispatch({type: 'SIGN_IN', data: loginResponse.data.Cusomter});
            //navigation.navigate('Home');
            
            //if (loginResponse.data.Sucess)  {
              //      console.log('OTP' + loginResponse.data.Cusomter.otp);


            //}  else {

                //TODO: alert user of error 
           // }

  
  
      }catch(e) {
        setLoading(false);
        console.log(e);
      }
    
      
  }
      
    return (
    <SafeAreaView style={{ flex: 1 }}>
      
            <View style={{flex: 20}}>
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
                centerComponent={<Text style={{fontSize: 20,color:Colors.bgc}}>Register</Text>}
                backgroundColor={Colors.header}
            />

            
        <View style={localstyles.container}>
        
        <Image
                style={localstyles.img}
                source={require('../../assets/img/XpressLogo.png')}
                resizeMode="contain"></Image>


        <View style={{justifyContent: 'center', alignItems: 'center',flex:15}}>
            <View
                style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                }}>
            
            <TextInput
              maxLength={30}
              placeholder={'Name'}
              style={localstyles.placeholder}
              keyboardType="default"
              onChangeText={(text) => {
                console.log(text);
                setCustname(text);
            }}></TextInput>

            </View>            

        </View>

        <View style={{justifyContent: 'center', alignItems: 'center',flex:15}}>
            <View
                style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                }}>
            
            <TextInput
              maxLength={10}
              placeholder={'Mobile No'}
              style={localstyles.placeholder}
              keyboardType="phone-pad"
              onChangeText={(text) => {
                console.log(text);
                setMobile(text);
            }}></TextInput>

            </View>            

        </View>


        <View style={{justifyContent: 'center', alignItems: 'center',flex:15}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              maxLength={20}
              placeholder={'Login Id'}
              style={localstyles.placeholder}
              keyboardType="default"
              onChangeText={(text) => {
                setTp(text);
                setUsername(text);
              }}></TextInput>
            {/* {data.notTen ? <Icon name="done-outline" style={{fontSize : 20, paddingRight : 10}}/> : null} */}
        </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',flex:15}}>
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: '#000',
            }}>
            
            <TextInput
              placeholder={strings.Password}
              secureTextEntry={data.secureTextEntry ? true : false}
              // secureTextEntry={true}
              style={localstyles.placeholder}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <TouchableOpacity onPress={updateToggle}>
              {data.secureTextEntry ? (
                <Icon
                  name="remove-red-eye"
                  style={{paddingRight: 10, fontSize: 20, margin: 0}}
                />
              ) : (
                <Icon
                  name="visibility-off"
                  style={{paddingRight: 10, fontSize: 20, margin: 0}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center',flex:40}}>
        <View style={{padding: 20, flex: 2}}>
          <View style={{padding: 15}}>
          <Button style={localstyles.button}
            title="Register"
            onPress={submitHandler}
            />          
          </View>

          {loading &&
            <View style={styles.loading}>
              <ActivityIndicator size='large' />
            </View>
          } 

          </View>
          
        </View>
      </View>
        </View>
    </SafeAreaView>
  );
}

export default Register;

const localstyles = StyleSheet.create({
    container: {
      flex: 80,
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow:1,
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
      marginTop: 10,
      justifyContent: 'space-between',
      padding: 10,
  
      // alignItems: 'center',
      // alignContent : 'center'
    },
    placeholder: {
      display: 'flex',
      flex: 1,
      textAlign: 'center',
      letterSpacing: 1,
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
  