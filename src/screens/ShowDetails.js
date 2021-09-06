import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Alert, View, Text, TextInput, FlatList, Image } from 'react-native';
import { Button, Header, Input, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors';
import strings from '../assets/Strings';
import styles from '../assets/Styles';
import { AuthContext } from '../auth/Auth';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import {api}  from '../../api/serverrequest'
import * as serverAPI from '../api/serverrequest'
import { ScrollView } from 'react-native';
import { Card } from 'react-native-shadow-cards';



function ShowDetails({ navigation, route }) {
    const item = route.params.item
    const items = item.items

    console.log("items.....", items)
    const auth = useContext(AuthContext);
    const [otpvalue, setOtpvalue] = useState(0);
    const [loading, setLoading] = useState(false);


    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;



    function renderItems({ item, index }) {

        return (
            <View>
                <View style={{ flexDirection: 'column', flex: 1, padding: 10, marginLeft: 10, marginRight: 20, marginBottom: -20 }}>
                    <View style={{ flexDirection: 'column', flex: 1, }}>
                        <Card style={{ padding: 10, }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                {



                                    <View style={{ flex: 70, margin: 10, }}>
                                        {/* <Text>Order No {item.orderno}</Text>
                                        // <Text>Order Date {item.orderdate}</Text>
                                        // <Text>Order Status {item.status}</Text>
                                        // <Text>Amount {item.orderamt}</Text> */}


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <Text style={{ flex: 1 }}>{item.descn}</Text>

                                            <Text style={{ flex: 1, textAlign: 'right' }}>Amount: {item.ammount}</Text>
                                            <Divider orientation="horizontal" width={1} />
                                        </View>


                                        <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <Text style={{ flex: 1 }}>Price: {item.salerate}</Text>

                                            <Text style={{ flex: 1, textAlign: 'right' }}>Quantity: {item.qty}</Text>
                                            <Divider orientation="horizontal" width={1} />
                                        </View>

                                    </View>



                                }
                            </View>


                        </Card>

                    </View>
                </View>
            </View>

        );
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 }}>

                    <Header
                        leftComponent={
                            <Button
                                icon={
                                    <Icon
                                        name="arrow-back"
                                        style={{ fontSize: 18 }}
                                        type="MaterialIcons"
                                    />
                                }
                                type="clear"
                                onPress={() => navigation.goBack()}
                            />
                        }
                        centerComponent={<Text style={{ fontSize: 20 }}>Order Details</Text>}
                        backgroundColor={Colors.header}
                    />
                </View>
                {/* <View style={{ flexDirection: 'column', flex: 1, padding: 10, marginLeft: 10, marginRight: 20 }}>
                    <View style={{ flexDirection: 'column', flex: 1, marginRight:200}}></View>
                    <Card style={{ padding: 50, }}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                            {
                                <View style={{ flex: 1, }}>
                                    
                                    <Text>Order No {item.orderno}</Text>
                                    <Divider orientation="horizontal" width={1} />
                                    <Text>Order Date {item.orderdate}</Text>
                                    <Divider orientation="horizontal" width={1} />
                                    <Text>Order Status {item.status}</Text>
                                    <Divider orientation="horizontal" width={1} />
                                    <Text>Amount {item.orderamt}</Text>
                                    </View>
                                
                            }
                        </View>
                    </Card>
                </View> */}


                <View style={{ flexDirection: 'column', flex: 1, alignItems: "center", }}>
                    <Card style={{ padding: 11, flex: 1, }}>
                        <View style={{ flex: 1, flexDirection: 'column', }}>



                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <Text style={{ flex: 1, fontSize: 18 }}>Order No: {item.orderno}</Text>
                                <Text style={{ flex: 1, textAlign: 'right' }}>{item.orderdate}</Text>
                                <Divider orientation="horizontal" width={1} />

                            </View>

                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={{ flex: 1 }}>Amount: {item.orderamt}</Text>

                                <Text style={{ flex: 1, textAlign: 'right' }}>{item.time}</Text>
                                <Divider orientation="horizontal" width={1} />
                            </View>



                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <Text style={{ flex: 1 }}>Status: {item.status}</Text>

                                <Text style={{ flex: 1, textAlign: 'right' }}>{item.paymentmethod}</Text>
                                <Divider orientation="horizontal" width={1} />
                            </View>





                        </View>


                    </Card>

                </View>

                <View style={{ flex: 6 }}>

                    <FlatList
                        data={items}
                        renderItem={renderItems}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={(item) => item.recno.toString()} items
                    />
                </View>

            </View>

        </SafeAreaView >
    )
}
export default ShowDetails;