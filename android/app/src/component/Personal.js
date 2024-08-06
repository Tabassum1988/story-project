
import React, { useState, useEffect,useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert ,FlatList,Box,NativebaseProvider} from 'react-native';
import axios from 'axios';
import Zocial from "react-native-vector-icons/Zocial";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from 'react-native-vector-icons/Feather';

const Personal = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });


  const [name, setName]=useState('')
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] =useState(null);
  const [loading, setLoading] =useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

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

  function validatePasswordCurrent(text) {
    if (text.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Please enter current password" }));
    } else if (text.length <= 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be more than 4 characters" }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  }

  function validatePasswordEnter(text) {
    if (text.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Please enter new password" }));
    } else if (text.length <= 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be more than 4 characters" }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  }

  function validatePasswordConfirm(text) {
    if (text.length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Please confirm new password" }));
    } else if (text.length <= 4) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password must be more than 4 characters" }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  }

  // useEffect(() => {
  //   axios.get('http://192.168.10.4:5001/register')
  //     .then(response =>{setData(response.data)
  //     })
  //     .catch(error=>{
  //       console.error('Error fetching data:', error);
  //       setError(error);
  //     })
  //     .finally(()=>{
  //       setLoading(false);
  //     })
  //       },[]);
      

  //       const handleChange = (text) => {
         
  //         setData(text);
  //       };
      
       

      //  useEffect(()=>{
      //   fetch('http://192.168.10.4:5001/fetchdata')
      //   .then(response=>{
      //     if (response.ok){
      //       return response.json();
      //     }
      //     throw response;
      //   })
      //   .then (data =>{
      //     setData(data);
      //   })
      //   .catch(error=>{
      //     console.error('Error fetching data:', error);
      //     setError(error);
      //   })
      //   .finally(()=>{
      //     setLoading(false);
      //   })
      //  },[])
 
   
  useEffect(() => {
    axios.get("http://192.168.10.4:5001/updateProfile")
      .then(response => {
        const { name, email } = response.data;
        setForm(prevForm => ({
          ...prevForm,
          name,
          email,
        }));
      })
      .catch(error => {
        console.log(error);
        // Alert.alert("Error fetching user data", error.message);
      });
  }, []);

  const handleUpdateProfile = () => {
    const { name, email, currentPassword, newPassword, confirmPassword } = form;

    if (newPassword !== confirmPassword) {
      //Alert.alert("New passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      currentPassword,
      newPassword,
    };

    if (name && email && currentPassword) {
      axios.post("http://192.168.10.4:5001/updateProfile", userData)
        .then(res => {
          console.log(res.data);
          if (res.status === 200) {
            Alert.alert("Profile updated successfully!");
            setForm({
              name: '',
              email: '',
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
            });
          } else {
            //Alert.alert("Failed to update profile", JSON.stringify(res.data));
          }
        })
        .catch(e => {
          console.log(e);
          //Alert.alert("Error updating profile", e.message);
        });
    } else {
      //Alert.alert("Fill all mandatory details");
    }
  };

  
  

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
          <Image source={require("../images/logout.png")} style={styles.headerImage4} alt='Logo' />
        </TouchableOpacity>
        {/* <Text style={styles.Title}>Your Profile</Text> */}
        <View style={styles.form}>
          <View style={styles.header}>
            <Image source={require("../images/user1.png")} style={styles.headerImage} alt='Logo' />
          </View>
          <Text style={styles.inputlabel}>My Profile</Text>
          <View style={styles.inputboxcointainer}>
            <Image source={require("../images/profile.png")} style={styles.headerImage1} alt='Logo' />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Full Name"
              placeholderTextColor="#6b7280"
              value={data}
              onChangeText = {currentPassword => setForm({ ...form, name })}
              editable={true}
              />
          </View>
          <View style={styles.inputboxcointainer}>
            <Zocial name="email" size={15} style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
               placeholder="Email Address"
              placeholderTextColor="#6b7280"
              value={data}
              onChangeText = {currentPassword => setForm({ ...form, email  })}
              />
              
          
          </View>
          <Text style={styles.footer2}></Text>
          <Text style={styles.textchange}>Change password</Text>
          <View style={styles.inputboxcointainer1}>
            <Fontisto name="locked" size={15} style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Current Password"
              placeholderTextColor="#6b7280"
              value={data}
              secureTextEntry={!passwordVisible}
             // onBlur={() => validatePasswordCurrent(password)}
              onChangeText={currentPassword => setForm({ ...form, currentPassword })}
            />
            {/* <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye} /> */}
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather 
              style={styles.pic1}
                name={passwordVisible ? "eye" : "eye-off"} 
                color={password.length > 4 ? "green" : "red"} 
                size={20}
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <View style={styles.inputboxcointainer2}>
            <Fontisto name="locked" size={15} style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="New Password"
              placeholderTextColor="#6b7280"
              value={data}
              secureTextEntry={!passwordVisible1}
             // onBlur={() =>validatePasswordEnter(password)}
              onChangeText={newPassword => setForm({ ...form, newPassword })}
            />
            {/* <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye1} /> */}
            <TouchableOpacity onPress={() => setPasswordVisible1(!passwordVisible1)}>
              <Feather 
              style={styles.pic2}
                name={passwordVisible1 ? "eye" : "eye-off"} 
                color={password.length > 4 ? "green" : "red"} 
                size={20}
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}


          <View style={styles.inputboxcointainer3}>
            <Fontisto name="locked" size={15} fontSize="10" style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Confirm New Password"
              placeholderTextColor="#6b7280"
              value={data}
              secureTextEntry={!passwordVisible2}
             // onBlur={() => validatePasswordConfirm(password)}
              onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
            />
            {/* <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye2} /> */}
            <TouchableOpacity onPress={() => setPasswordVisible2(!passwordVisible2)}>
              <Feather 
              style={styles.pic3}
                name={passwordVisible2 ? "eye" : "eye-off"} 
                color={password.length > 4 ? "green" : "red"} 
                size={20}
              />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}


          <TouchableOpacity style={styles.botton1} onPress={handleUpdateProfile}>
            <Text style={styles.botton1Text}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d4e10e',
    flex: 1,
  },
  header: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: -80,
    paddingTop: 90,
  },
  headerImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: -140,
  },
  headerImage1: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 5,
    marginRight: -1,
  },
  form: {
     marginBottom: 10,
    backgroundColor: "white",
    padding: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 10,
    paddingTop: 100,
  },
  inputboxcointainer: {
    alignItems: "center",
    flexDirection: "row",
    fontWeight: '500',
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#696969',
    padding: 1,
    // margin: 15,
    height: 35,
    // width: 280,
    // marginLeft: 35,
    marginTop:4,
  },
  inputboxcointainer1: {
    alignItems: "center",
    flexDirection: "row",
    fontWeight: '500',
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#696969',
    padding: 1,
    // margin: 15,
    height: 35,
    // width: 280,
    // marginLeft: 35,
    marginTop:4,
  },
  inputboxcointainer2: {
    alignItems: "center",
    flexDirection: "row",
    fontWeight: '500',
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#696969',
    padding: 1,
    // margin: 15,
    height: 35,
    // width: 280,
    // marginLeft: 35,
    marginTop:4,
  },
  inputboxcointainer3: {
    alignItems: "center",
    flexDirection: "row",
    fontWeight: '500',
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
    // margin: 15,
    height: 35,
    // width: 280,
    // marginLeft: 35,
    marginTop:4,
  },
  inputlabel: {
    fontSize: 15,
    fontWeight: "900",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    marginTop: -75,
    padding: 10,
  },
  footer2: {
    height: 1,
    backgroundColor: '#808080',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  botton1: {
    backgroundColor: '#d4e10e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d4e10e",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginTop: 7,
    height: 35,
    width: 280,
    marginLeft: 37,
    marginBottom:100,
  },
  botton1Text: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
    height: 20,
    width: 50,
    marginTop: -3,
  },
  inputControl: {
    marginHorizontal: 5,
    height: 45,
    flex:1,
  },
  textchange: {
    fontSize: 13,
    fontWeight: "400",
    color: "black",
    marginLeft: 120,
    marginBottom:10,
    marginTop:5,
  },
  lock: {
    marginLeft: 7,
  },
  eye: {
    flex:1,
  
  },
  eye1: {
    flex:1,
   
  },
  eye2:{
    flex:1,
    
  },
  Title: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 95,
    marginTop: -50,
    color: "black",
  },
  headerImage4: {
    width: 35,
    height: 35,
    alignSelf: "center",
    marginTop: 10,
    marginLeft:280,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pic1:{
  
    marginLeft:-40,
  },
  pic2:{
   
    marginLeft:-40,
  },
  pic3:{
    
    marginLeft:-40,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
});
