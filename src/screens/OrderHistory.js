import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Alert, View, Text, TextInput, FlatList,Image} from 'react-native';
import {Button, Header, Input,Divider} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors';
import strings from '../assets/Strings';
import styles from '../assets/Styles';
import {AuthContext} from '../auth/Auth';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import {api}  from '../../api/serverrequest'
import * as serverAPI from '../api/serverrequest'
import { ScrollView } from 'react-native';



function OrderHistory({navigation, route}) {
    const auth = useContext(AuthContext);
    const [otpvalue, setOtpvalue] = useState(0);
    const [loading, setLoading] = useState(false);


    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;


    const orderdata = [
        {
            "recno": 1,
            "tenantrecno": 1,
            "custrecno": "1",
            "orderno":1,
            "orderdate":"24-AUG-2021",
            "orderamt":"Rs.780",
            "status":"Pending",
            "time":"02:00 PM",
            "paymentmethod":"UPI",
            "items":[
                {
                    "recno": 1,
                    "ammount": "300g",
                    "descn": "Shrikhand",
                    "salerate": "Rs. 200",
                    "qty":2,
                },
                {
                    "recno": 10,
                    "ammount": "100g",
                    "descn": "Packed Mithai",
                    "salerate": "Rs. 450",
                    "qty":2,
                },
                {
                    "recno": 11,
                    "ammount": "1kg",
                    "descn": "Flavoured Milk",
                    "salerate": "Rs. 120",
                    "qty":2,

                },
            ]
        },
        {
            "recno": 2,
            "tenantrecno": 1,
            "custrecno": "1",
            "orderno":2,
            "orderdate":"30-JUL-2021",
            "orderamt":"Rs.500",
            "status":"Delivered",
            "time":"11:00 AM",
            "paymentmethod":"Card",
            "items":[
                {
                    "recno": 1,
                    "ammount": "250g",
                    "descn": "Shrikhand",
                    "salerate": "Rs. 200",
                    "qty":2,
                },
                {
                    "recno": 10,
                    "ammount": "300g",
                    "descn": "Packed Mithai",
                    "salerate": "Rs. 450",
                    "qty":3,
                },
                {
                    "recno": 11,
                    "ammount": "500g",
                    "descn": "Flavoured Milk",
                    "salerate": "Rs. 120",
                    "qty":1,
                },
            ]
        },
    ]

    function renderItems({ item, index }) {
      
        return (
        <View>
            <View style={{flexDirection: 'column',flex:1,padding:10,marginLeft:20,marginRight:20}}>
                  <View style={{flexDirection: 'column',flex:1}}> 
                    <View style={{flex:70,margin:5}}> 
                            <Text>Order No {item.orderno}</Text>
                            <Text>Order Date {item.orderdate}</Text>
                            <Text>Order Status {item.status}</Text>
                            <Text>Amount {item.orderamt}</Text>
                            <Text style={{color: 'blue',marginTop:20}}
                                onPress={() => {
                                    navigation.navigate('ShowDetails',{item:item})
                                    console.log('Details')
                                    
                                    }}>
                                Show Details
                            </Text>
                    </View>
                    <Divider orientation="horizontal" width={1} />
                  </View>
            </View>
        </View>
          
        );
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
                            centerComponent={<Text style={{fontSize: 20}}>Order History</Text>}
                            backgroundColor={Colors.header}
                        />
                        <FlatList
                            data={orderdata}
                            renderItem={renderItems}
                            showsVerticalScrollIndicator={true}
                            keyExtractor={(item) => item.recno.toString()}
                        />
                
                    </View>
                    
        </SafeAreaView>
    )
}
export default OrderHistory;