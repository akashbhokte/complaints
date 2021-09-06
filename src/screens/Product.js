
import React, {useContext, useState} from 'react';
import { View, Text, Image,FlatList,Button } from 'react-native';
import { CommonActions } from "@react-navigation/native";
import {AuthContext} from '../auth/Auth';
import data_productList from '../data/data_productlist';
import { useNavigation } from '@react-navigation/native';
import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors'
import { Divider } from 'react-native-elements';

let offset = 0;

function Product(props) {

  const navigation = useNavigation();
  const auth = useContext(AuthContext);

  
function onScrollHandler (e) {
  //console.log(e);
  
  const currentOffset = e.nativeEvent.contentOffset.y;
  var direction = currentOffset > offset ? "down" : "up";
  offset = currentOffset;
  console.log('direction' + direction);

  if (direction === "down") {
    //console.log('1');
    //console.log(auth.state);
    //navigation.setOptions({ tabBarVisible: false })
    //navigation.dispatch(CommonActions.setParams({tabBarVisible: false,}));
    auth.dispatch({type: 'HIDETAB'});
   
  } else {
    //console.log('2');
    //console.log(auth.state);
    auth.dispatch({type: 'SHOWTAB'});
     //navigation.setOptions({ tabBarVisible: true })
     //navigation.dispatch(CommonActions.setParams({tabBarVisible: true,}));
   }
};

const removeHandler = (item) => {
    const isSignedIn = auth.state.isSignedIn;
    if (!isSignedIn) {
       //return;
       //TODO: navigate to Login / Signup
       navigation.navigate('Login');
    }
      console.log('removeHandler');
};


const addHandler = (item) => {
  const isSignedIn = auth.state.isSignedIn;
  if (!isSignedIn)  {
    //TODO: navigate to Login / Signup
    navigation.navigate('Login');
  }
    console.log('addHandler');
};
    
    let local_recno = props.recno
    //console.log(props);
   // console.log("render cat = " + local_recno);

    const filterItems = (arr, query) => {
      return arr.filter(el => el.categoryrecno ==  query)
    }

    const categoryitems = filterItems(data_productList,props.recno);
    //console.log('categoryitems' + JSON.stringify(categoryitems));

    function renderItems({ item, index }) {
      
      return (
        <View>
          <View style={{flexDirection: 'column',flex:1,padding:10}}>
            <View style={{flexDirection: 'column',flex:1}}> 
                <View style={{flexDirection: 'row',flex:1}}> 
                  <View style={{flex:30}}>
                      <View style={{flex:1}}>
                          <Image style={{flex:1,width:100,height:100}} 
                            source={{uri: `data:image/png;base64,${item.logo}`}}>
                          </Image>
                      </View>
                  </View>
                  <View style={{flex:70}}> 
                    <View style={{flexDirection: 'column',padding:2}}>
                        <Text>{item.shortdescn}</Text>
                        <Text>Rs.{item.salerate}</Text>  
                    </View>

                  </View>
                </View>
            </View>
            <View style={{flexDirection: 'column',flex:1,alignItems:'flex-end',marginRight:25}}> 
                <View style={{flexDirection: 'row'}}>
                    <Icon
                          color={Colors.header}
                          style={{fontSize: 30}}
                          name="remove-circle-outline"
                          onPress={() => removeHandler(item)}
                        />
                      <Icon   
                          color={Colors.header}
                          style={{fontSize: 30}}
                          name="add-circle-outline"
                          onPress={() => addHandler(item)}
                        />
                        
                </View>
            </View>
          </View>

          <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.3,
                marginLeft: 5,
                marginRight: 5
              }}
            />
        </View>
        
      );
    }

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <View style={{ height: '95%',width:'98%' }}>
              <FlatList
                data={categoryitems}
                renderItem={renderItems}
                showsVerticalScrollIndicator={true}
                onScroll={onScrollHandler}                                
                keyExtractor={(item) => item.recno.toString()}
              />
     </View>
    </View>
     
  );
}

export default Product;
