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

function Login({navigation, route}) {
  const auth = useContext(AuthContext);
  const [mobile, setMobile] = useState(0);
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
    

    try {
      setLoading(true);
      const loginResponse = await serverAPI.userLogin(mobile,password);
      console.log('loginResponse');
      console.log(loginResponse.data.Sucess);
      setLoading(false);
      await AsyncStorage.setItem('loggedinuser', JSON.stringify(loginResponse.data.Cusomter));
      auth.dispatch({type: 'SIGN_IN', data: loginResponse.data.Cusomter});
      navigation.navigate('Home');


    }catch(e) {
      setLoading(false);
      console.log(e);
    }
    


    // testing only
      /*
    if (mobile=="1234"  && password =="password") {
      //auth.dispatch()
      const userdata = {
          "domainrecno":1,
          "tenantrecno":1,
          "userrecno":1
      }
      auth.dispatch({type: 'SIGN_IN', data: userdata});
      navigation.navigate('Home');

    }
    */
  }


  /*
  function validate() {
    if (password == '' || mobile == '') {
      alert("password or mobile number can't be empty");
    } else if (password > 5) {
      alert('Invalid mobile number');
    } else {
      submitHandler();
    }
  }
  */

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{flex: 1}}>
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
        centerComponent={<Text style={{fontSize: 20}}>Login</Text>}
        backgroundColor={Colors.header}
      />
      <View style={localstyles.container}>
        <Image
          style={localstyles.img}
          source={require('../../assets/img/XpressLogo.png')}
          resizeMode="contain"></Image>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="call" style={{fontSize: 20, paddingLeft: 10}} />

            <TextInput
              maxLength={10}
              placeholder={'Login Id'}
              style={localstyles.placeholder}
              keyboardType="phone-pad"
              onChangeText={(text) => {
                setMobile(text);
                checkMob(text);
                setTp(text);
              }}></TextInput>
            {data.checkInputText ? (
              data.notTen ? (
                <Icon
                  name="done-outline"
                  style={{fontSize: 20, paddingRight: 10, color: 'green'}}
                />
              ) : (
                <Icon
                  name="done-outline"
                  style={{fontSize: 20, paddingRight: 10}}
                />
              )
            ) : (
              <Icon
                name="done-outline"
                style={{fontSize: 20, paddingRight: 10}}
              />
            )}
            {/* {data.notTen ? <Icon name="done-outline" style={{fontSize : 20, paddingRight : 10}}/> : null} */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderColor: '#000',
            }}>
            <Icon
              name="lock-open"
              color="#000"
              style={{color: '#000', fontSize: 20, paddingLeft: 10}}
            />
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

        <View style={{padding: 20, flex: 2}}>
          <View style={{padding: 15}}>
          <Button style={localstyles.button}
            title="Login"
            onPress={submitHandler}
            />          
          </View>

          {loading &&
            <View style={styles.loading}>
              <ActivityIndicator size='large' />
            </View>
          } 


          <View style={{display: 'flex', alignItems: 'center', padding: 15}}>
            <Text
              style={{color: 'dodgerblue', fontSize: 20, margin: 8}}
              onPress={() =>
                navigation.navigate('ChangePassword', {
                  screen: 'ChangePassword',
                  params: {
                    screen: 'ShowPending',
                  },
                })
              }>
              Forgot password ?
            </Text>
          </View>
          
          <View style={{display: 'flex', alignItems: 'center', padding: 15}}>
            <Text
              style={{color: 'dodgerblue', fontSize: 20, margin: 8}}
              onPress={() =>
                navigation.navigate('Register')
              }>
              Register
            </Text>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

export default Login;

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
