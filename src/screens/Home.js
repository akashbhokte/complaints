import AsyncStorage from '@react-native-community/async-storage';
import React, { useContext, useEffect, useState, useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Alert, View, Text, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors'


import { AuthContext } from '../auth/Auth';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Profile from './Profile';
import Product from './Product';
import ProductList from './ProductList';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import Cart from './Cart';
import { useNavigation } from '@react-navigation/native';
import CustomTabBar from './MyTab';
import Search from './SearchProduct';


const Tab = createBottomTabNavigator();



function Home({ props }) {

    const auth = useContext(AuthContext);
    const navigation = useNavigation();
    const [showBottomBar, setshowBottomBar] = useState(true);

    useEffect(() => {
        console.log('Effect ');
        console.log(auth.state.showBottomBar);
    }, [auth.state.showBottomBar]);



    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                    centerComponent={<Text style={{ fontSize: 20, color: Colors.bgc }}>Chitale Express</Text>}
                    backgroundColor={Colors.header}
                />

                <Tab.Navigator initialRouteName="ProductList"
                    tabBar={(props) => <CustomTabBar {...props} tabVisible={auth.state.showBottomBar} />}
                >
                    <Tab.Screen name="Products" component={ProductList}
                        options={({ route }) => ({
                            tabBarLabel: 'Products',
                            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginLeft: 20, color: 'black' },
                            // tabBarStyle:{marginBottom:10},
                            headerShown: false,
                            // tabBarIcon: ({ color, size }) => (
                            //     <Icon
                            //         style={{ fontSize: 20 }}
                            //         name="person-outline"></Icon>
                            // ),

                        })}

                    />
                    <Tab.Screen name="Profile" component={Profile}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginLeft: 20, color: 'black' },
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Icon
                                    style={{ fontSize: 20 }}
                                    name="person-outline"></Icon>
                            ),
                        }}
                    />
                    <Tab.Screen name="Cart" component={Cart}
                        options={{
                            tabBarLabel: 'Cart',
                            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginLeft: 20, color: 'black' },
                            tabBarIcon: ({ color, size }) => (
                                <Icon
                                    style={{ fontSize: 20 }}
                                    name="cart-outline"></Icon>
                            ),
                        }}

                    />

                    <Tab.Screen name="Search" component={Search}
                        options={{
                            tabBarLabel: 'Search',
                            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginLeft: 20, color: 'black' },
                            headerShown: false,
                            tabBarIcon: ({ color, size }) => (
                                <Icon
                                    style={{ fontSize: 20 }}
                                    name="search-outline"></Icon>
                            ),
                        }}

                    />

                </Tab.Navigator>
            </View>
        </SafeAreaView>






    );
}

export default Home;



const styles = StyleSheet.create({
    tabStyle: {},
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