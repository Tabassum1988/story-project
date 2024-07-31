
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert ,FlatList,Box,NativebaseProvider} from 'react-native';
import axios from 'axios';
import Zocial from "react-native-vector-icons/Zocial";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Personal = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [users, setUsers] = useState([]);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('http://192.168.10.4:5001/data')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);


  useEffect(() => {
    axios.get('http://192.168.10.4:5001/register')
      // .then(response => setData(response.data))
      .then(data =>{
        setData(data.message)
        setForm(data.message)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 
   
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
      Alert.alert("New passwords do not match");
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
            Alert.alert("Failed to update profile", JSON.stringify(res.data));
          }
        })
        .catch(e => {
          console.log(e);
          Alert.alert("Error updating profile", e.message);
        });
    } else {
      Alert.alert("Fill all mandatory details");
    }
  };

  ;
  

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
        {/* {
          users.map(user => {
         <Text>{user.name}</Text>
          })
        } */}

     
      
            <Image source={require("../images/profile.png")} style={styles.headerImage1} alt='Logo' />
           {/* <Text>{data.name}</Text>  */}
          
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Full Name"
              placeholderTextColor="#6b7280"
              value={form.name}
              onChangeText={name => setForm({ ...form, name })}
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
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>

          <Text style={styles.footer2}></Text>
          <Text style={styles.textchange}>Change password</Text>

          <View style={styles.inputboxcointainer}>
            <Fontisto name="locked" size={15} style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.inputControl}
              placeholder="Current Password"
              placeholderTextColor="#6b7280"
              value={form.currentPassword}
              onChangeText={currentPassword => setForm({ ...form, currentPassword })}
            />
            <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye} />
          </View>

          <View style={styles.inputboxcointainer}>
            <Fontisto name="locked" size={15} style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.inputControl}
              placeholder="New Password"
              placeholderTextColor="#6b7280"
              value={form.newPassword}
              onChangeText={newPassword => setForm({ ...form, newPassword })}
            />
            <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye1} />
          </View>

          <View style={styles.inputboxcointainer}>
            <Fontisto name="locked" size={15} fontSize="10" style={styles.lock} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.inputControl}
              placeholder="Confirm New Password"
              placeholderTextColor="#6b7280"
              value={form.confirmPassword}
              onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
            />
            <FontAwesome name="eye-slash" size={18} color={"#000000"} style={styles.eye2} />
          </View>

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
    marginTop: -90,
    paddingTop: 90,
  },
  headerImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 30,
    marginTop: -135,
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
    fontWeight: '350',
    borderRadius: 10,
    fontSize: 10,
    marginBottom: 7,
    borderWidth: 0.5,
    borderColor: '#696969',
    padding: 1,
    margin: 10,
    height: 28,
    width: 230,
    marginLeft: 13,
    marginTop:-3,
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
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginTop: 7,
    height: 25,
    width: 200,
    marginLeft: 30,
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
    marginHorizontal: 9,
    height: 40,

  },
  textchange: {
    fontSize: 13,
    fontWeight: "400",
    color: "black",
    marginLeft: 80,
    marginBottom:10,
  },
  lock: {
    marginLeft: 7,
  },
  eye: {
    marginLeft: 28,
  },
  eye1: {
    marginLeft: 60,
  },
  eye2:{
    marginLeft: -10,
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
    marginLeft:220,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
