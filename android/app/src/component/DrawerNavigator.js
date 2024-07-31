
import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
// import HomeScreen from './HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Bootom from './Bootom';
import DrawerFile from './DrawerFile';
import Screen3 from './Screen3';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Welcome" options={{headerShown:false}} component={Bootom} />
    {/* <Drawer.Screen name="Screen3" component={Screen3} /> */}
  </Drawer.Navigator>
  // <Text>hellow</Text>

  );
}

export default DrawerNavigator;
