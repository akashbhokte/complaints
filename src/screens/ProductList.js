
import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Alert, View, Text, TextInput, Image,ScrollView} from 'react-native';
import {Button, Header, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/Colors'

import { SearchBar } from 'react-native-elements';
import { AuthContext} from '../auth/Auth';
import axios from 'axios';
import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Profile from './Profile';
import Product from './Product';
import { ListItem } from 'react-native-elements/dist/list/ListItem';


function ProductList(props) {
    const auth = useContext(AuthContext);

    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
    

const cat = [
    {
        "recno": 1,
        "tenantrecno": 1,
        "code": "1",
        "sectionrecno": 1,
        "descn": "Shrikhand",
        "descn1": "Shrikhand",
        "active": true,
        "shortdescn": "Shrikhand"
    },
    {
        "recno": 10,
        "tenantrecno": 1,
        "code": "10",
        "sectionrecno": 1,
        "descn": "Packed Mithai",
        "descn1": "Packed Mithai",
        "active": true,
        "shortdescn": "Packed Mithai"
    },
    {
        "recno": 11,
        "tenantrecno": 1,
        "code": "11",
        "sectionrecno": 1,
        "descn": "Flavoured Milk",
        "descn1": "Flavoured Milk",
        "active": true,
        "shortdescn": "Flavoured Milk"
    },
    {
        "recno": 12,
        "tenantrecno": 1,
        "code": "12",
        "sectionrecno": 1,
        "descn": "ButterMilk",
        "descn1": "ButterMilk",
        "active": true,
        "shortdescn": "ButterMilk"
    },
    {
        "recno": 13,
        "tenantrecno": 1,
        "code": "13",
        "sectionrecno": 1,
        "descn": "Mango Pulp",
        "descn1": "Mango Pulp",
        "active": true,
        "shortdescn": "Mango Pulp"
    },
    {
        "recno": 14,
        "tenantrecno": 1,
        "code": "14",
        "sectionrecno": 1,
        "descn": "Jam",
        "descn1": "Jam",
        "active": true,
        "shortdescn": "Jam"
    },
    {
        "recno": 15,
        "tenantrecno": 1,
        "code": "15",
        "sectionrecno": 1,
        "descn": "Ketchup",
        "descn1": "Ketchup",
        "active": true,
        "shortdescn": "Ketchup"
    },
    {
        "recno": 16,
        "tenantrecno": 1,
        "code": "16",
        "sectionrecno": 1,
        "descn": "Lassi",
        "descn1": "Lassi",
        "active": true,
        "shortdescn": "Lassi"
    },
    {
        "recno": 17,
        "tenantrecno": 1,
        "code": "17",
        "sectionrecno": 1,
        "descn": "Loni",
        "descn1": "Loni",
        "active": true,
        "shortdescn": "Loni"
    },
    {
        "recno": 18,
        "tenantrecno": 1,
        "code": "18",
        "sectionrecno": 1,
        "descn": "Festival Gift Pack",
        "descn1": "Festival Gift Pack",
        "active": true,
        "shortdescn": "Festival Gift P"
    },
    {
        "recno": 19,
        "tenantrecno": 1,
        "code": "19",
        "sectionrecno": 1,
        "descn": "Milk",
        "descn1": "Milk",
        "active": true,
        "shortdescn": "Milk"
    },
    {
        "recno": 2,
        "tenantrecno": 1,
        "code": "2",
        "sectionrecno": 1,
        "descn": "Dahi",
        "descn1": "Dahi",
        "active": true,
        "shortdescn": "Dahi"
    },
    {
        "recno": 20,
        "tenantrecno": 1,
        "code": "20",
        "sectionrecno": 1,
        "descn": "Ready to Drink",
        "descn1": "Ready to Drink",
        "active": true,
        "shortdescn": "Ready to Drink"
    },
    {
        "recno": 21,
        "tenantrecno": 1,
        "code": "21",
        "sectionrecno": 1,
        "descn": "ICECream",
        "descn1": "ICECream",
        "active": true,
        "shortdescn": "ICECream"
    },
    {
        "recno": 22,
        "tenantrecno": 1,
        "code": "22",
        "sectionrecno": 1,
        "descn": "Suchi Products",
        "descn1": "Suchi Products",
        "active": true,
        "shortdescn": "Suchi Products"
    },
    {
        "recno": 23,
        "tenantrecno": 1,
        "code": "23",
        "sectionrecno": 1,
        "descn": "Merchandizing",
        "descn1": "Merchandizing",
        "active": true,
        "shortdescn": "Merchandizing"
    },
    {
        "recno": 3,
        "tenantrecno": 1,
        "code": "3",
        "sectionrecno": 1,
        "descn": "Paneer",
        "descn1": "Paneer",
        "active": true,
        "shortdescn": "Paneer"
    },
    {
        "recno": 4,
        "tenantrecno": 1,
        "code": "4",
        "sectionrecno": 1,
        "descn": "Cheese",
        "descn1": "Cheese",
        "active": true,
        "shortdescn": "Cheese"
    },
    {
        "recno": 24,
        "tenantrecno": 1,
        "code": "44",
        "sectionrecno": 1,
        "descn": "Loose Mithat",
        "descn1": "Loose Mithai",
        "active": true,
        "shortdescn": "Loose Mithai"
    },
    {
        "recno": 5,
        "tenantrecno": 1,
        "code": "5",
        "sectionrecno": 1,
        "descn": "Milk Powder",
        "descn1": "Milk Powder",
        "active": true,
        "shortdescn": "Milk Powder"
    },
    {
        "recno": 6,
        "tenantrecno": 1,
        "code": "6",
        "sectionrecno": 1,
        "descn": "Instant Mix",
        "descn1": "Instant Mix",
        "active": true,
        "shortdescn": "Instant Mix"
    },
    {
        "recno": 7,
        "tenantrecno": 1,
        "code": "7",
        "sectionrecno": 1,
        "descn": "Ghee",
        "descn1": "Ghee",
        "active": true,
        "shortdescn": "Ghee"
    },
    {
        "recno": 8,
        "tenantrecno": 1,
        "code": "8",
        "sectionrecno": 1,
        "descn": "Bakarwadi",
        "descn1": "Bakarwadi",
        "active": true,
        "shortdescn": "Bakarwadi"
    },
    {
        "recno": 9,
        "tenantrecno": 1,
        "code": "9",
        "sectionrecno": 1,
        "descn": "Namkeen",
        "descn1": "Namkeen",
        "active": true,
        "shortdescn": "Namkeen"
    }
]

//console.log(cat);
const tablist = renderTabs(cat);
//console.log(tablist);



    function renderTabs(categories) {
        //console.log('renderTabs' + categories.length );
        if (categories.length > 0) {      
            return categories.map((cat, index) => (
                <Product key={cat.recno} tabLabel={cat.descn} />
            ));
        }
        else return [];
    }

  return (
    <View style={{ flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollableTabView 
                style={styles.scrollStyle}
                locked = {false}
                initialPage={0}
                tabBarPosition='top'
                onChangeTab={ (i,ref) => {
                        auth.dispatch({type: 'SHOWTAB'});
                        console.log('TAB  change');
                    }

                }
                renderTabBar={() => <ScrollableTabBar />}
            >
                {cat.map(category => (
                    <Product key={category.recno} recno={category.recno}  tabLabel={category.descn} />
                ))}
            </ScrollableTabView>
        </View>
    </View>
  );
}

export default ProductList;

const styles = StyleSheet.create({
    tabStyle: {},
   scrollStyle: {
     backgroundColor: 'white',
     marginTop: 8 ,
     
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