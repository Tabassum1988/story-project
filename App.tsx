



import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './android/app/src/component/Signup';
import Login from './android/app/src/component/Login';
import Dashboard from './android/app/src/component/Dashboard';
// import Dashnav from './android/app/src/component/Dashnav';
// import HomeScreen from './android/app/src/component/HomeScreen';
import DrawerNavigator from './android/app/src/component/DrawerNavigator';
 import Personal from './android/app/src/component/Personal';
// import Linkform from './android/app/src/component/Linkform';
import Screen3 from './android/app/src/component/Screen3';
import Linkform from './android/app/src/component/Linkform';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} /> 
        <Stack.Screen name="Personal" component={Personal} /> 
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Linkform" component={Linkform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;