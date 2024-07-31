import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert , ScrollView,Modal} from 'react-native';
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Login({ navigation }) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);



  function handleEmail(text) {
    setEmail(text);
    validateEmail(text);
  }

  function handlePassword(text) {
    setPassword(text);
    validatePassword(text);
  }


  function validateEmail(text) {
    if (text.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter email address" }));
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(text)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address" }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  }

  function validatePassword(text) {
    if (text.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Please enter password" }));
    } else if (text.length <= 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be more than 4 characters" }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  }


  function handleSubmit() {
    validateEmail(email);
    validatePassword(password);

    // if (Object.keys(errors).length === 0) {
    //   const userData = {
    //     email,
    //     password,
    //   };
      if (!email || !password) {
          // Alert.alert('Error', 'Please fill in both email and password fields.');
          return;
      }
      
      const userData = { email, password };

      axios.post("http://192.168.10.4:5001/login-user", userData)
          .then(res => {
              if (res.data.status === "ok") {
                  // Alert.alert('Login Successful!');
                  navigation.navigate("Bootom");
                  setEmail('');
                  setPassword('');
              } else {
                  // Alert.alert('Incorrect email or password.');
              }
          })
          .catch(e=>console.log(e));
  }

    
    
  return (

    <View style={styles.container}>
    
        <View style={styles.header}>
          <Image
          source={require("../images/img1.png")}
          style={styles.headerImage}
          alt='Logo'
          />
        </View>

              <View style={styles.form}>
             <Text style={styles.inputlabel}>Welcome Back !</Text>    
          
        <View style={styles.inputContainer}>
          <Icon name="email" size={25} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input1}
              placeholder="Enter email"
              value={email}
              onChangeText={handleEmail}
              onBlur={() => validateEmail(email)}
              placeholderTextColor={'gray'}
            />
            {email.length > 0 && (
              email.length > 4 ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <Feather name="x-circle" color="red" size={20} />
              )
            )}
          </View>
          {errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
       

       <View style={styles.inputContainer}>
             <Icon name="lock" size={25} color="#000" style={styles.icon}/>                 
             <TextInput
              style={styles.input2}
              placeholder="Choose Password"
              value={password}
              onChangeText={handlePassword}
              secureTextEntry={!passwordVisible}
              onBlur={() => validatePassword(password)}
              placeholderTextColor={'gray'}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather 
                name={passwordVisible ? "eye" : "eye-off"} 
                color={password.length > 4 ? "green" : "red"} 
                size={20}
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}




                  <View style={styles.formAction}>
                 <Text style={styles.footer}>Forgot Password?</Text>
                   <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.botton1}>
                   <Text style={styles.botton1Text}>Login</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.text}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.footer1}>Don't have an account? 
                  <Text style={styles.footer1text}> Sign up now</Text> </Text>
                  </TouchableOpacity>
              </View>

            
            
              <TouchableOpacity style={{marginTop:'auto'}}
              onPress={()=>{
                 //handle on press
              }}></TouchableOpacity> 
          </View>
          </View>
    </View>
   
  


  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor:'#d4e10e'
    },
    header: {
          // marginVertical:30,  
          // marginTop:10,  
            //
            borderBottomLeftRadius: 5,  
            borderBottomRightRadius:5,
            marginTop: -90,              
            paddingTop: 100, 
           
    },
    headerImage:{
        width: 60,
        height: 60,
        alignSelf:"center",
        marginBottom:30,
        marginTop:15,
    },
    title: {
        fontSize: 30,
        fontWeight:"700",
        color:"black",
        textAlign:"center",
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      marginVertical: 2,
      paddingHorizontal:5,
      height:35,
      width:250,
      marginLeft:10,
    },
    inputContainer1:{
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      marginVertical: 2,
      paddingHorizontal:5,
    },
   
    inputboxcointainer:{
      alignItems:"center",
      flexDirection:"row",
      height:48,
      // paddingVertical:20,
      // paddingHorizontal:20,
      fontWeight:'350',
      borderRadius:12,
      fontSize:10,
      marginBottom:2,
      borderWidth: 1,
      borderColor: '#696969',
      padding: 5,
      margin: 5,  
      
    },
    inputboxcointainer1:{
     
      alignItems:"center",
      flexDirection:"row",
      height:48,
      // paddingVertical:10,
      // paddingHorizontal:20,
      fontWeight:'350',
      borderRadius:12,
      fontSize:10,
      marginBottom:2,
      borderWidth: 1,
      borderColor: '#696969',
      padding: 5,
      margin: 5,  
  },
    inputlabel:{
      fontSize:15,
      fontWeight:"500",
      color:"black",
      // marginBottom:7,
      textAlign:"left",
      // marginTop:10,
    padding:10,
    },
    inputControl:{
        marginHorizontal:7,    
    },
    inputControl2:{
      height:44,
      paddingVertical:10,
      paddingHorizontal:20,
      fontWeight:'350',
      borderRadius:12,
      fontSize:10,
      marginBottom:2,
      borderWidth: 1,
      borderColor: '#696969',
      padding: 5,
      margin: 5,  
      // 
    
      
  },
    form:{
      // marginBottom:40,
       backgroundColor:"#ffffff",
       padding:8,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      border:1,
     
       marginTop: -17,              
      //  paddingTop: 100, 
      
    },
    formAction:{
        marginVertical:5,
    },
    footer:{
        fontSize:10,
        fontWeight:"800",
        color:"#00004d",
        textAlign:"left",
        letterSpacing:0.5,
        // marginTop:1,
        marginBottom:3,
       
        padding:8,
       

    },
    botton1:{
       backgroundColor:'#d4e10e',
       borderRadius:8,
       borderWidth:1,
       borderColor:"#d4e10e",
       alignItems:"center",
       justifyContent:"center",
       paddingVertical:5,
       paddingHorizontal:5,
       flexDirection:'row',
       marginBottom:10,
      
    },
    botton1Text:{
  fontSize:15,
  fontWeight:"500",
  color:"black",
  height:20,
  width:50,
  marginLeft:15,
    },
    footer1:{
      fontSize:10,
      fontWeight:"500",
      textAlign:"center",
      marginTop:5,
    },
    footer1text:{
      fontSize:10,
      fontWeight:"800",
      color:"#00004d",
      height:20,
     
    },
    footer2:{
      height: 1, 
      backgroundColor: '#f2f2f2',
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop:10,
      
    },
    footer3:{
      fontSize:10,
      fontWeight:"350",
      textAlign:"center",
      marginTop:3,
    },
    botton2:{
      backgroundColor:'white',
      borderRadius:8,
      borderWidth:1,
      borderColor:"#3333ff",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:4,
      paddingHorizontal:4,
      flexDirection:'row',
      marginTop:3,
    
     
    },
    botton2Text:{
      fontSize:10,
      fontWeight:"800",
      color:"#00004d",
      height:30,
      width:100,
      paddingVertical:8,
      // paddingHorizontal:5,
      marginHorizontal:5,
      
    },
    eye:{
   marginLeft:-80,
    },
    
    screenContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
    height:-60,
    },
    button1: {
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      paddingVertical: 7,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#4285F4',
      width: '100%',
      justifyContent: 'center',
      height:40
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    googleLogo: {
      width: 20,
      height: 25,
      textAlign: 'center',
      margin:3,
    },
    text1: {
      fontSize: 16,
      color: '#4285F4',
      marginLeft: 4,
      textAlign: 'center',
    },
    headerImage4:{
      width: 15,
      height: 15,
      alignSelf: "center",
      marginTop: 20,
      marginLeft: -220,
    },
   
   input1:{
    paddingVertical:3,
    fontSize:12,
    marginRight:85,
   },
   input2:{
    paddingVertical:3,
    fontSize:12,
    marginRight:40,
   },
   text:{
    marginBottom:100,
   },
});

