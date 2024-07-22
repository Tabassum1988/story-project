import React,{useState} from 'react';
import { View, Text ,Style, StyleSheet,Image ,TextInput,TouchableOpacity} from 'react-native';


const Screen3 = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',  
    
})
  return (
  <View >
     <View style={styles.container}>
        <View style={styles.form}>
        <View style={styles.header}>
          <Image
          source={require("../images/prf3.png")}
          style={styles.headerImage}
          alt='Logo'
          />
        </View>

        <Text style={styles.inputlabel}>Welcome</Text>
        {/* <Text style={styles.inputlabel1}>Tabassum Sheikh</Text> */}
        <View style={styles.inputboxcointainer}>
       
        
        <Image
          source={require("../images/user2.png")}
          style={styles.headerImage1}
          alt='Logo'
          />
           
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="Personal Info"
            style={styles.inputControl}
            placeholder= "Personal Info"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
          <TouchableOpacity  
           onPress={()=>{navigation.navigate('Personal')}}
              >
            <Image
          source={require("../images/right1.png")}
          style={styles.headerImage2}
         alt='Logo'
         /></TouchableOpacity>
        </View>                                                                      


        <Text style={styles.footer2}></Text>

         <View style={styles.inputboxcointainer}>
          
        <Image
          source={require("../images/sound.png")}
          style={styles.headerImage1}
          alt='Logo'
          />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="Storyhub list"
            style={styles.inputControl}
            placeholder= "StoryHub List"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
            <TouchableOpacity  
           onPress={()=>{navigation.navigate('Linkform')}}
              >
            <Image
          source={require("../images/right1.png")}
          style={styles.headerImage3}
          alt='Logo'
          /></TouchableOpacity>
        </View>

        <Text style={styles.footer2}></Text>

        <TouchableOpacity
        onPress={()=>{navigation.navigate('Login')}}
       >
            
        <View style={styles.botton1}>
              <Text style={styles.botton1Text}>Logout</Text>
                 
                </View>
                </TouchableOpacity>





        </View>
        


       


        </View>

    </View>
    

  );
}

export default Screen3;

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
headerImage1:{
  width: 20,
  height: 20,
  alignSelf:"center",
  marginBottom:30,
  marginTop:30,
  marginLeft:15,
  marginRight:15,
},
headerImage2:{
  width: 10,
  height: 10,
  alignSelf:"right",
  marginBottom:30,
  marginTop:30,
  marginLeft:80,
  marginRight:15,
},
headerImage3:{
  width: 10,
  height: 10,
  alignSelf:"center",
  marginBottom:30,
  marginTop:30,
  marginLeft:80,
  marginRight:15,
},
form:{
 
   marginBottom:10,
   backgroundColor:"white",
   padding:8,
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
   marginTop: 70,              
   paddingTop: 100, 
marginBottom:0,
  
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
  // borderWidth: 1,
  // borderColor: '#696969',
  padding: 1,
  margin: -2,  
 
  
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
footer2:{
  height: 1, 
  backgroundColor: '#808080',
  flexDirection: 'row', 
  alignItems: 'center',
  marginTop:-3,
  
},
botton1:{
  backgroundColor:'rgb(102, 153, 255)',
  borderRadius:8,
  borderWidth:1,
  borderColor:"blue",
  alignItems:"center",
  justifyContent:"center",
  paddingVertical:5,
  paddingHorizontal:5,
  flexDirection:'row',
  marginTop:18,
 height:25,
 width:200,
marginLeft:30,
},
botton1Text:{
  fontSize:15,
  fontWeight:"500",
  color:"black",
  height:20,
  width:50,
  marginTop:-3,
    },
  //   inputControl:{
  //     marginHorizontal:7,    
  // },
})