
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import Colors from '../assets/Colors';
import { AuthContext } from '../auth/Auth';
import { Divider, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import axios from 'axios';

function Profile({ navigation, route }) {
  const auth = useContext(AuthContext);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // B-5 Fountain Head Apartment, Kothrud,Pune - 411029, Maharashtra, India
  const [FinalAddr, setFinalAddr] = useState("")


  useEffect(() => {
    console.log("reload...................")
    getdata()
  }, [])


  async function getdata() {
    console.log("hello")
    var resdata = await axios.post('http://dev.sutradhar.tech/sutrapos1/api/v1/customerbymobile/',{
      'mobile':'7038343454'
    });
    console.log('resdata is ',resdata.data.Customer.address)
    

    setFinalAddr(resdata.data.Customer.address+", "+resdata.data.Customer.address1+", "+ resdata.data.Customer.pincode+",India")




  }



  // console.log('auth.state.user');
  // console.log(auth.state.user);

  useEffect(() => {

    console.log('componentDidMount');
    //obj // 👈 null and undefined check
    // && Object.keys(obj).length === 0 && obj.constructor === Object

    if (!auth.state.isSignedIn) {
      navigation.navigate('Login');
    }

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  function navOrderHistory() {
    navigation.navigate('OrderHistory');
  }
  function navUpdateAddress() {
    navigation.navigate('UpdateAddress');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {
          auth.state.isSignedIn ?
            (
              <View style={localstyles.container}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignContent: 'stretch' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Profile</Text>
                  </View>
                  <View style={{
                    flexDirection: 'column', justifyContent: 'center', height: 225, width: windowWidth,
                    margin: 15,
                    padding: 25,
                    backgroundColor: Colors.header
                  }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: color.bgc }}>
                      <Avatar
                        size='large'
                        rounded
                        icon={{ name: 'person' }}
                        title={auth.state.user.descn.charAt(0)}
                        containerStyle={{ backgroundColor: '#AED6F1', margin: 15 }}
                      />
                    </View>
                    <View style={{ flexDirection: 'column', margin: 5, alignContent: 'center', alignItems: 'center' }} >
                      <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: Colors.bgc }}>{auth.state.user.descn}</Text>
                        <Text style={{ color: Colors.bgc }}>{auth.state.user.mobile}</Text>
                      </View>

                      <View style={{ flexDirection: 'column', marginTop: 5, padding: 5 }}>
                        <Button raised='true' style={{ padding: 10 }}
                          icon={
                            <Icon
                              name="pencil"
                              size={15}
                              color="white"
                            />
                          }
                          iconRight
                          title="Change"
                        />
                      </View>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-start', margin: 25 }}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 15 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Address</Text>
                      <Text style={{ fontSize: 18, margin: 15 }}>{FinalAddr}</Text>
                      <View style={{ flex: 1 }}>
                        <Button raised='true' style={{ alignSelf: 'stretch', width: windowWidth }}
                          icon={
                            <Icon
                              name="pencil"
                              size={15}
                              color="white"
                            />
                          }
                          iconRight
                          title="Update Address"
                          onPress={navUpdateAddress}
                        />
                      </View>

                    </View>
                  </View>

                  <View style={{ flex: 1, flexDirection: 'column', alignContent: 'flex-start', margin: 25 }}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 15 }}>

                      <View style={{ flex: 1 }}>
                        <Button raised='true' style={{ alignSelf: 'stretch' }}
                          icon={
                            <Icon
                              name="pencil"
                              size={15}
                              color="white"
                            />
                          }
                          iconRight
                          title="View Order History"
                          onPress={navOrderHistory}
                        />
                      </View>


                    </View>
                  </View>


                </View>
              </View>
            ) :
            (
              <View style={{ flex: 1, justifyContent: 'center', alignConten: 'center', backgroundColor: color.bgc }}>
                <Text style={{ margin: 25 }}>Please Login to View your Profile.</Text>
                <Button style={localstyles.button}
                  title="Login"
                  onPress={navigateToLogin}
                />
              </View>
            )
        }

      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;


const localstyles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.bgc,
  },

  scrollStyle: {
    backgroundColor: 'white',
    marginTop: 8,

    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 15,
  },
});
