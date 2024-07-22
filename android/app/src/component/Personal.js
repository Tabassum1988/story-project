import React,{useState} from 'react';
import { View, Text ,Style, StyleSheet,Image ,TextInput,TouchableOpacity} from 'react-native';
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto"



const Personal = ({navigation}) => {
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
          /> 
          </TouchableOpacity>
      <Text style={styles.Title}>Your Profile</Text>
        <View style={styles.form}>
        <View style={styles.header}>
          <Image
          source={require("../images/prf3.png")}
          style={styles.headerImage}
          alt='Logo'
          />
        </View>

        <Text style={styles.inputlabel}>Welcome</Text>
      
        <View style={styles.inputboxcointainer}>

        <Image
          source={require("../images/profile.png")}
          style={styles.headerImage1}
          alt='Logo'
          />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="Full Name"
            style={styles.inputControl}
            placeholder= "Full Name"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
        
        </View>                                                                      


 

         <View style={styles.inputboxcointainer}>
      
          <Zocial name="email"  size={15} style={styles.lock}/>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="Work Email Adress"
            style={styles.inputControl}
            placeholder= "Work Email Address"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
          
           
        </View>

        <Text style={styles.footer2}></Text>
           <Text style={styles.textchange}>Change password</Text>



           <View style={styles.inputboxcointainer}>
       
           <Fontisto name="locked" size={15} style={styles.lock}/>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType= "Current Password"
            style={styles.inputControl}
            placeholder= "Current Password"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
            
            <FontAwesome name="eye-slash" size={18} color={" #000000"} style={styles.eye} />
        </View>


        <View style={styles.inputboxcointainer}>
       
           <Fontisto name="locked" size={15} style={styles.lock}/>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="New Password"
            style={styles.inputControl}
            placeholder= "New Password"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
           
           <FontAwesome name="eye-slash" size={18} color={" #000000"} style={styles.eye1}/>
        </View>

        <View style={styles.inputboxcointainer}>
       
           <Fontisto name="locked" size={15} fontSize="10" style={styles.lock}/>
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType="Confirm New Password"
            style={styles.inputControl}
            placeholder= "Confirm New Password"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            />
           
         
           <FontAwesome name="eye-slash" size={18} color={" #000000"} style={styles.lock} />
        </View>


        <View style={styles.botton1}>
                   <Text style={styles.botton1Text}>Update Profile</Text>
                </View>






        </View>
        


       


        </View>

    </View>
    

  );
}

export default Personal;

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
  marginLeft:5,
  marginRight:-1,

},
// headerImage2:{
//   width: 10,
//   height: 10,
//   alignSelf:"left",
//   marginBottom:30,
//   marginTop:30,
//   marginLeft:10,
//   marginRight:10,
// },
headerImage3:{
  width: 10,
  height: 10,
  alignSelf:"center",
  marginBottom:30,
  marginTop:30,
  marginLeft:18,
  marginRight:15,
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

inputboxcointainer:{
  alignItems:"center",
  flexDirection:"row",
  fontWeight:'350',
  borderRadius:10,
  fontSize:10,
  marginBottom:1,
  borderWidth: 0.5,
  borderColor: '#696969',
  padding: 1,
 margin:5,
 height:28,
 width:230,
 marginLeft:13,


  
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
  margin:4,
  
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
  marginTop:10,
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
    inputControl:{
      marginHorizontal:9, 
      height:40,   
  },
  textchange:{
    fontSize:13,
    fontWeight:"400",
    color:"black",
   marginLeft:70,
  },
  lock:{
    marginLeft:7,
  },
  eye:{
   marginLeft:43,
  },
  eye1:{
    marginLeft:60,
  },
  Title:{
    fontSize:15,
    fontWeight:"700",
    marginLeft:95,
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
})