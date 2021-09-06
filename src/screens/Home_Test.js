
import React, {useContext, useState,useEffect} from 'react';
import { View, Text ,SafeAreaView,StyleSheet,Image,TouchableHighlight,ScrollView } from 'react-native';
import {AuthContext} from '../auth/Auth';

import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import FullWidthPicture from './FullWidthPicture';


function Home() {
    //const auth = useContext(AuthContext);
    const [Imgsize, setImgsize] = useState({width:250,height:250});

   
    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
      ];

        
    useEffect(() => {
      // Update the document title using the browser API
      //document.title = `You clicked ${count} times`;
            Image.getSize('https://placeimg.com/640/640/nature'),
                (width, height) => {
                  this.setImgsize({ width, height });
                }
    });
    
      return (
        <ScrollView horizontal={true}>
        <ScrollView>
          <Image
             style={{ width: Imgsize.width, height: Imgsize.height }}
            source={{uri: 'https://placeimg.com/640/640/nature'}}
          />
        </ScrollView>
      </ScrollView>
        
    );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 160,
    height: 200
  },
  cover: {
    flex: 1,
    borderRadius: 15
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    color: "tomato"
  }
});

export default Home;
