import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';


const CustomTabBar = (props) => {
   // console.log(props);
    if (props.tabVisible && props.tabVisible)
     {
        return <BottomTabBar {...props} />;
     }else {
         return null;
     }
        
};

export default CustomTabBar;