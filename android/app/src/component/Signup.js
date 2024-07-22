

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button, Image, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../images/img1.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.box}>
          <Text style={styles.subtitle}>Signup with StoryHub!</Text>

          <View style={styles.inputContainer}>
            <Icon name="person" size={30} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="email" size={30} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Work Email Address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={'gray'}
            />
          </View>

          {/* <View style={styles.inputContainer}>
            <Icon name="lock" size={30} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Choose Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor={'gray'}
            />
          </View> */}

<View style={styles.inputContainer}>
            <Icon name="lock" size={30} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Choose Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              placeholderTextColor={'gray'}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? "visibility" : "visibility-off"} size={30} color="#000" />
            </TouchableOpacity>
          </View>

          {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
              {error}
            </Text>
          ))}

          <View style={styles.buttonContainer}>
            {/* <Button title="SignUp" 
            // onPress={handleSubmit} 
            /> */}

<TouchableOpacity style={styles.customButton} onPress={()=>props.navigation.navigate("Login")}> 
                
              <Text style={styles.customButtonText}>SignUp</Text>

            </TouchableOpacity>
          </View>
          
          <View style={styles.loginContainer}>
             <Text style={styles.loginText}>Or </Text>
            {/* <TouchableOpacity onPress={() => console.log('Navigate to login screen')}>
              <Text style={[styles.loginText, { color: '#4285F4' }]}>Login</Text>
            </TouchableOpacity> */}
          </View>

          <View style={styles.screenContainer}>
            <TouchableOpacity style={styles.button1}>
              <View style={styles.container1}>
                {/* <Image source={require('../images/google.jpg')} style={styles.googleLogo} /> */}
                <Text style={styles.text1}>Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Have an account? </Text>
            <TouchableOpacity onPress={() => console.log('Navigate to login screen')}>
              <Text style={[styles.loginText, { color: '#4285F4' }]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(102, 153, 255)',

  },
  topContainer: {
    flex: 1,
    //  backgroundColor: '#FFFFFF',
    backgroundColor: 'rgb(102, 153, 255)',
    // RGB(255, 255, 255),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 3,
    paddingHorizontal: 12,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    margin:2,
    marginTop:15,
  },
  box: {
    width: '110%',
    height:'120%',
    backgroundColor: 'white',
    borderRadius: 40,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
    color: 'black',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 10,
    
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    height:50
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  googleLogo: {
    width: 20,
    height: 20,
    textAlign: 'center',
  },
  text1: {
    fontSize: 16,
    color: '#4285F4',
    marginLeft: 4,
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 12,
    color: 'black',
  },

  customButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: 'rgb(102, 153, 255)',
    height:45,

  },
  customButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    
  },
});

export default Signup;