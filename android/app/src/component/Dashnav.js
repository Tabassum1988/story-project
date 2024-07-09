// import React from 'react';
// import { StyleSheet,View, Text } from 'react-native';

// const Dashnav = () => {
//   return (
   
//     <View style={styles.container}>
//         <View style={styles.botton6}>
//       <Text style={styles.title}>My Story Hub</Text>
//       </View>
//       <View style={styles.botton1}>
//       <Text style={styles.botton1Text}>All</Text>
//       </View>
//       <View style={styles.botton2}>
//       <Text style={styles.botton2Text}>Kids story</Text>
//       </View>
//       <View style={styles.botton3}>
//       <Text style={styles.botton3Text}>Animal story</Text>
//       </View>
//       <View style={styles.botton4}>
//       <Text style={styles.botton4Text}>Friends story</Text>
//       </View>
       
//        <View style={styles.botton5}>
//        <Text style={styles.botton5Text}>General</Text>
//        </View>
//     </View>
 
//   );
// }

// export default Dashnav;


// const styles = StyleSheet.create ({
//     container: {
//         padding:20,
//         fontSize: 50,
//           fontWeight:"500",
//           color:"black",
//     },
//     title: {
//         fontSize: 25,
//         fontWeight:"500",
//         color:"black",
//         textAlign:"center",
//         marginBottom:20,
//     },
//     botton1Text:{
//         fontSize:18,
//         fontWeight:"500",
//         color:"blue",
//         height:30,
//         width:100,
//        textAlign:"left"
//           },

//           botton2Text:{
//             fontSize:18,
//             fontWeight:"500",
//             color:"blue",
//             height:30,
//             width:100,
         
//           },






// })

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Dashnav() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// function AboutScreen() {
//   return (
//     <View>
//       <Text>About Screen</Text>
//     </View>
//   );
// }

