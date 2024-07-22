import React,{useState} from 'react';
import { View, Text ,Style, StyleSheet,Image ,TextInput,TouchableOpacity} from 'react-native';
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto"



const Linkform = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',  
})
  return (
  <View >
     <View style={styles.container}>
     <TouchableOpacity
        onPress={()=>{navigation.navigate('Screen3')}}
       >
     <Image
          source={require("../images/left.png")}
          style={styles.headerImage4}
          alt='Logo'
          /></TouchableOpacity>
      {/* <Text style={styles.Title}>Your Dashboard</Text> */}
        <View style={styles.form}>
        <View style={styles.header}>
          <Image
          source={require("../images/prf3.png")}
          style={styles.headerImage}
          alt='Logo'
          />
        </View>

        <Text style={styles.inputlabel}>Welcome</Text>
      
                                                                        


 

        

        

       

        <View style={styles.botton1}>
                   <Text style={styles.botton1Text}>All</Text>
                  
          {/* <Image
          source={require("../images/plus.png")}
          style={styles.headerImage1}
          alt='Logo'
          /> */}
       
                </View>

                <View style={styles.botton2}>
                   <Text style={styles.botton2Text}>Kids</Text>
                   {/* <Image
          source={require("../images/plus.png")}
          style={styles.headerImage2}
          alt='Logo'
          /> */}
                </View>

                <View style={styles.botton3}>
                   <Text style={styles.botton3Text}>Animal</Text>
                   {/* <Image
          source={require("../images/plus.png")}
          style={styles.headerImage3}
          alt='Logo'
          /> */}
                </View>

                <View style={styles.botton4}>
                   <Text style={styles.botton4Text}>Top Rated</Text>
                   {/* <Image
          source={require("../images/plus.png")}
          style={styles.headerImage5}
          alt='Logo'
          /> */}
                </View>
                




        </View>
        


       


        </View>

    </View>
    

  );
}

export default Linkform;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgb(102, 153, 255)',
  },
  header: {
    // marginVertical:30,  
    // marginTop:1,  
      
      borderBottomLeftRadius: 5,  
      borderBottomRightRadius:5,
      marginTop: -90,              
      paddingTop: 90, 
     
},
headerImage:{
  width: 70,
  height: 70,
  alignSelf:"center",
  marginBottom:30,
  marginTop:-135,
},

form:{
 
   marginBottom:20,
   backgroundColor:"white",
   padding:8,
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
   marginTop: 40,              
   paddingTop: 100, 

  
},

inputboxcointainer1:{
  alignItems:"center",
flexDirection:"row",
  fontWeight:'350',
  borderRadius:10,
  fontSize:10,
  marginBottom:1,
  borderWidth: 0.5,
  borderColor: '#696969',
  padding: 1,
  marginTop:-10,
 height:35,
 width:125,
 marginLeft:7,
},
inputboxcointainer2:{
  alignItems:"center",
flexDirection:"row",
  fontWeight:'300',
  borderRadius:10,
  fontSize:10,
  marginBottom:1,
  borderWidth: 0.5,
  borderColor: '#696969',
  padding: 1,
marginTop:-35,
 height:35,
 width:125,
 marginLeft:135,
},
inputboxcointainer3:{
  alignItems:"center",
  flexDirection:"row",
    fontWeight:'300',
    borderRadius:10,
    fontSize:10,
    marginBottom:1,
    borderWidth: 0.5,
    borderColor: '#696969',
    padding: 1,
  marginTop:20,
   height:35,
   width:225,
   marginLeft:25,
   color:"red"
},
inputboxcointainer4:{
  alignItems:"center",
  flexDirection:"row",
    fontWeight:'300',
    borderRadius:10,
    fontSize:10,
    marginBottom:1,
    borderWidth: 0.5,
    borderColor: '#696969',
    padding: 1,
  marginTop:10,
   height:35,
   width:225,
   marginLeft:25,
 
  
},
inputboxcointainer5:{
  alignItems:"center",
  flexDirection:"row",
    fontWeight:'300',
    borderRadius:10,
    fontSize:10,
    marginBottom:1,
    borderWidth: 0.5,
    borderColor: '#696969',
    padding: 1,
  marginTop:10,
   height:35,
   width:225,
   marginLeft:25,

},
inputboxcointainer6:{
  alignItems:"center",
  flexDirection:"row",
    fontWeight:'300',
    borderRadius:10,
    fontSize:10,
    marginBottom:1,
    borderWidth: 0.5,
    borderColor: '#696969',
    padding: 1,
  marginTop:10,
   height:35,
   width:225,
   marginLeft:25,
},


inputlabel:{
  fontSize:15,
  fontWeight:"900",
  color:"black",
  marginBottom:10,
  textAlign:"center",
   marginTop:-75,
padding:10,
},


botton1:{
  backgroundColor:'#BF0D04',
  borderRadius:8,
  borderWidth:1,
  borderColor:"red",
  alignItems:"center",
  justifyContent:"center",
  paddingVertical:5,
  paddingHorizontal:5,
  flexDirection:'row',
  marginTop:10,
 height:35,
 width:200,
marginLeft:30,
},
botton2:{
  backgroundColor:'#2E55C2',
  borderRadius:8,
  borderWidth:1,
  borderColor:"blue",
  alignItems:"center",
  justifyContent:"center",
  paddingVertical:5,
  paddingHorizontal:5,
  flexDirection:'row',
  marginTop:10,
 height:35,
 width:200,
marginLeft:30,
},
botton3:{
  backgroundColor:'#377E47',
  borderRadius:8,
  borderWidth:1,
  borderColor:"green",
  alignItems:"center",
  justifyContent:"center",
  paddingVertical:5,
  paddingHorizontal:5,
  flexDirection:'row',
  marginTop:10,
 height:35,
 width:200,
marginLeft:30,
},

botton4:{
  backgroundColor:'#FF4500',
  borderRadius:8,
  borderWidth:1,
  borderColor:"#FF4500",
  alignItems:"center",
  justifyContent:"center",
  paddingVertical:5,
  paddingHorizontal:5,
  flexDirection:'row',
  marginTop:10,
 height:35,
 width:200,
marginLeft:30,
},
botton1Text:{
  fontSize:15,
  fontWeight:"500",
  color:"white",
  height:20,
  width:100,
  marginTop:-3,
    },
    botton2Text:{
      fontSize:15,
      fontWeight:"500",
      color:"white",
      height:20,
      width:100,
      marginTop:-3,
        },
        botton3Text:{
          fontSize:15,
          fontWeight:"500",
          color:"white",
          height:20,
          width:100,
          marginTop:-3,
            },
            botton4Text:{
              fontSize:15,
              fontWeight:"500",
              color:"white",
              height:20,
              width:100,
              marginTop:-3,
                },
    inputControl1:{
      marginHorizontal:9, 
      height:50,   
  },
  inputControl2:{
    marginHorizontal:9, 
    height:50,   
},
inputControl3:{
  marginHorizontal:9, 
  height:50,   
},
inputControl4:{
  marginHorizontal:9, 
  height:50,   
},
inputControl5:{
  marginHorizontal:9, 
  height:50,   
},
inputControl6:{
  marginHorizontal:9, 
  height:50,   
},
  textchange:{
    fontSize:13,
    fontWeight:"400",
    color:"black",
   marginLeft:70,
  },
 
  Title:{
    fontSize:15,
    fontWeight:"700",
    marginLeft:80,
    marginTop:-50,
    color:"black",
  },
  headerImage4:{
    width: 15,
    height: 15,
    alignSelf:"left",
    marginBottom:30,
    marginTop:20,
    marginLeft:8,
   
  },
  headerImage1:{
    width: 15,
    height: 15,
    alignSelf:"left",
    marginBottom:20,
    marginTop:20,
    marginLeft:30,
   
  },
  headerImage2:{
    width: 15,
    height: 15,
    alignSelf:"left",
    marginBottom:20,
    marginTop:20,
    marginLeft:30,
   
  },
  headerImage3:{
    width: 15,
    height: 15,
    alignSelf:"left",
    marginBottom:20,
    marginTop:20,
    marginLeft:30,
   
  },
  headerImage5:{
    width: 15,
    height: 12,
    alignSelf:"left",
    marginBottom:20,
    marginTop:20,
    marginLeft:30,
   
  },
  header: {
    // marginVertical:30,  
    // marginTop:1,  
      
      borderBottomLeftRadius: 5,  
      borderBottomRightRadius:5,
      marginTop: -90,              
      paddingTop: 90, 
     
},
})