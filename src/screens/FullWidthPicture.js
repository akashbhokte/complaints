
import React, {useContext, useState,useEffect} from 'react';
import { View, Text ,SafeAreaView,StyleSheet,Image,TouchableHighlight,ScrollView } from 'react-native';


const FullWidthPicture = ({ uri }) => {
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    if (uri) {
        console.log(uri);
      Image.getSize(uri, (width, height) => {
         setRatio(width / height);
      });
   }
  }, [uri]);

  return (
   <Image
     style={{ width: '100%', height: undefined, aspectRatio: ratio }}
     resizeMode="contain"
     source={{ uri }}
   />
 );
};
export default FullWidthPicture;