import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    // const [passwordVisible, setpasswordVisible]= useState(false);
    // if (email === "tabassum" && password === "tabu"){
    //   Alert.alert("Login Successful");
    //   } else {
    //     Alert.alert("Username and password is not correct");
    //   }

    // const submit = () => {
    //   return Alert.alert(email, password);
    // }

    

  return (

    <View>
    <View style={styles.container}>
       {/* <Text style={styles.title}> LOGIN </Text> */}
        <View style={styles.header}>
          <Image
          source={require("../images/img1.png")}
          style={styles.headerImg}
          alt='Logo'
          />
        </View>

              <View style={styles.form}>

            <View style={styles.input}>
             
             <Text style={styles.inputlabel}>Welcome Back !</Text>
            <View style={styles.inputboxcointainer}>
             <Zocial name="email"  size={15}/>
             {/* 
            
              */}

            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            style={styles.inputControl}
            placeholder= "Email Address"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
            </View>
            </View>



            <View style={styles.inputboxcointainer1}>
            <AntDesign name="lock" size={20}/>
            <TextInput
            secureTextEntry
            style={styles.inputControl}
            placeholder= "Password"
            placeholderTextColor="#6b7280"
            value={form.password}
            onChangeText={password=> setForm(...form,email)}
       
            />
            <View style={styles.eye}>
            <FontAwesome name="eye-slash" size={20} color={" #000000"} />
            </View>
          
            </View>
       

        <View style={styles.formAction}>
             <TouchableOpacity onPress={()=>
                {
                //handle on press
                Alert.alert('successfully logged in!');
                }
                  }>

                 <Text style={styles.footer}>Forgot Password?</Text>
                <View style={styles.botton1}>
                   <Text style={styles.botton1Text}>Login</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={styles.footer1}>Don't have an account? <Text style={styles.footer1text}> Sign up now</Text> </Text>

                <Text style={styles.footer2}></Text>
                <Text style={styles.footer3}>or</Text>
  
              </View>

              <View style={styles.botton2}>
                   <AntDesign name="google" color={"blue"} size={15}/>
                   <Text style={styles.botton2Text}>Continue with Google</Text>
                </View>

               
                   

              <TouchableOpacity style={{marginTop:'auto'}}
              onPress={()=>{
                 //handle on press
              }}></TouchableOpacity> 
          </View>
          </View>
    </View>
    </View> 


  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor:"#00004d",
    },
    header: {
          // marginVertical:30,  
          // marginTop:10,  
            //
            borderBottomLeftRadius: 5,  
            borderBottomRightRadius:5,
            marginTop: -100,              
            paddingTop: 100, 
           
    },
    headerImg:{
        width: 50,
        height: 50,
        alignSelf:"center",
        marginBottom:30,
        marginTop:30,
    },
    title: {
        fontSize: 30,
        fontWeight:"700",
        color:"black",
        textAlign:"center",
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
      //  marginBottom:10,
       backgroundColor:"#ffffff",
       padding:8,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      //  marginTop: -100,              
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
       backgroundColor:'#00004d',
       borderRadius:8,
       borderWidth:1,
       borderColor:"blue",
       alignItems:"center",
       justifyContent:"center",
       paddingVertical:5,
       paddingHorizontal:5,
       flexDirection:'row',
       
      
    },
    botton1Text:{
  fontSize:15,
  fontWeight:"500",
  color:"white",
  height:20,
  width:50,
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
      // paddingVertical:4,
      // paddingHorizontal:4,
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
   alignSelf:"right",
   marginHorizontal:80,
    },
});
