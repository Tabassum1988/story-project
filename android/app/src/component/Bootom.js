import React from 'react';
import { View, Text ,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Dash from './Dash';
import Personal from './Personal';
// import {  } from 'react-native-reanimated/lib/typescript/Animated';
const Bottom = createBottomTabNavigator();

const Bootom = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Dash} options={{headerShown:false,tabBarIcon:()=>{
        return(
          <Image source={require("../images/home.png")} style={{width:20,height:20}}/>
        )
      }}} />
      <Bottom.Screen name="Premium Story" component={Screen2} options={{headerShown:false,tabBarIcon:()=>{
        return(
          <Image source={require("../images/pre.png")} style={{width:20,height:20}}/>
        )
      }}} />
      <Bottom.Screen name="My Profile" component={Personal} options={{headerShown:false, tabBarIcon:tabInfo=>{
        return(
          <Image source={require("../images/user1.png")} style={{width:20,height:20,tintColor:tabInfo.focus?'skyblue':'golden'}}/>
        )
      }}}/>
       
    </Bottom.Navigator>
  );
}

export default Bootom;
