import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Dashboard (){
  return (
    <View style={styles.container}>
      <View style={styles.botton6}>
      <Text style={styles.title}>My Story Hub</Text>
      </View>
      <View style={styles.botton1}>
      <Text style={styles.botton1Text}>All</Text>
      </View>
      <View style={styles.botton2}>
      <Text style={styles.botton2Text}>Kids story</Text>
      </View>
      <View style={styles.botton3}>
      <Text style={styles.botton3Text}>Animal story</Text>
      </View>
      <View style={styles.botton4}>
      <Text style={styles.botton4Text}>Friends story</Text>
      </View>
       
       <View style={styles.botton5}>
       <Text style={styles.botton5Text}>General</Text>
       </View>
        
        
     
        
        
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
      padding:20,
      alignSelf:"center",
      fontSize: 50,
        fontWeight:"500",
        color:"black",
  },
  title: {
    fontSize: 25,
    fontWeight:"500",
    color:"black",
    textAlign:"center",
    marginBottom:20,
},
botton1Text:{
  fontSize:18,
  fontWeight:"500",
  color:"blue",
  height:30,
  width:100,
 
    },
    botton1:{
      backgroundColor:'skyblue',
      borderRadius:8,
      borderWidth:1,
      borderColor:"blue",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      marginBottom:10,
     
   },
    botton2Text:{
      fontSize:18,
      fontWeight:"500",
      color:"blue",
      height:30,
      width:100,
   
    },
    botton2:{
      backgroundColor:'skyblue',
      borderRadius:8,
      borderWidth:1,
      borderColor:"blue",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      marginBottom:10,
   },
   botton3:{
    backgroundColor:'skyblue',
    borderRadius:8,
    borderWidth:1,
    borderColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    marginBottom:10,
 },
    botton3Text:{
      fontSize:18,
      fontWeight:"500",
      color:"blue",
      height:50,
      width:100,
     
    },
    botton4:{
      backgroundColor:'skyblue',
      borderRadius:8,
      borderWidth:1,
      borderColor:"blue",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      marginBottom:10,
   },
    botton4Text:{
      fontSize:18,
      fontWeight:"500",
      color:"blue",
      height:50,
      width:100,  
     
    },
    botton5:{
      backgroundColor:'skyblue',
      borderRadius:8,
      borderWidth:1,
      borderColor:"blue",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      marginBottom:10,
   },
    botton5Text:{
      fontSize:18,
      fontWeight:"500",
      color:"blue",
      height:30,
      width:100,
     
    },
});