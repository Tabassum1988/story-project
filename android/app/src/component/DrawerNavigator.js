
import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
// import HomeScreen from './HomeScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Bootom from './Bootom';
import DrawerFile from './DrawerFile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Story Hub" options={{headerShown: false}} component={Bootom} />
    <Drawer.Screen name="DrawerFile" component={DrawerFile} />
  </Drawer.Navigator>
  // <Text>hellow</Text>

  );
}

export default DrawerNavigator;
