// import React from 'react';
// import { View, Text } from 'react-native';
// // import profile from "react-native-vector-icons/profile";
// const Screen2 = () => {
//   return (
//     <View>
//        {/* <profile  name="Male User" size={20} color={" #000000"} /> */}
//       <Text>Screen2</Text>
//     </View>
//   );
// }

// export default Screen2;


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const Screen2 = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
    <View style={styles.container}>

      <View style={styles.benefitsContainer}>
     
        <Text style={styles.title}>Benefits of Premium</Text>
        <Text style={styles.subtitle}>Unlock New Story</Text>
      </View>
      <View style={styles.topContainer}>
        <Image
          source={require('../images/story.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.planContainer}>
        <Text style={styles.titleo}>Choose a plan</Text>
        <Text style={styles.subtitlet}>Monthly or Yearly? It's your call</Text>
      </View>

      <View style={styles.subscriptionContainer}>
        <TouchableOpacity
        
          style={[
            styles.box,
            selectedPlan === 'monthly' && styles.selectedBox
          ]}
          onPress={() => handleSelect('monthly')}
        >        

<View style={styles.planContainero}>
   <Text style={styles.titlen}>Monthly</Text>
        <Text style={styles.subtitleth}>$11.00 /month</Text> 
        
        
      </View>

          <RadioButton 
           onPress={() => handleSelect('monthly')}
            value="monthly"
            status={selectedPlan === 'monthly' ? 'checked' : 'unchecked'}
            color="#777cff" 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.subscriptionContainer}>
      <TouchableOpacity
        style={[
          styles.box,
          selectedPlan === 'yearly' && styles.selectedBox
        ]}
        onPress={() => handleSelect('yearly')}
      >
        <View style={styles.planContainero}>
          <View style={styles.titleContainern}>
            <Text style={styles.titlen}>Annually</Text>
            <View style={styles.sectionButtonn}>
              <Text style={styles.sectionButtonTextn}>Save 10%</Text>
            </View>
          </View>
          <Text style={styles.subtitleth}>$120.00 /year</Text>
        </View>
        <RadioButton
          value="yearly"
          onPress={() => handleSelect('yearly')}
          status={selectedPlan === 'yearly' ? 'checked' : 'unchecked'}
            color="#777cff" 
        />
      </TouchableOpacity>
    </View>
      {/* <View style={styles.benefitsList}>
        <Text style={styles.benefitText}>
        <Icon name="check" size={20} color="white" style={styles.icon} />
        <Text style={styles.benefitText}>Access for New Friends Story</Text>        </Text>
        <Text style={styles.benefitText}>
          <Icon name="check" size={20} color="#fff" /> Able to download
        </Text>
        <Text style={styles.benefitText}>
          <Icon name="check" size={20} color="#fff" /> Access for New Friends Story
        </Text>
      </View> */}

<View style={styles.benefitContainer}>
      <View style={styles.benefitContent}>
        <Icon name="check" size={20} color="white" style={styles.icon} />
        <Text style={styles.benefitText}>Access for New Friends Story</Text>
      </View>
      <View style={styles.benefitContento}>
        <Icon name="check" size={20} color="white" style={styles.icono} />
        <Text style={styles.benefitTexto}>Able to download</Text>
      </View>
      <View style={styles.benefitContentt}>
        <Icon name="check" size={20} color="white" style={styles.icont} />
        <Text style={styles.benefitTextt}>Create own AI Story</Text>
      </View>
    </View>
    
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.customButtonText} onPress={() => navigation.navigate('Login')}>Select this Package</Text>
        </TouchableOpacity>
       
      </View> 
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    padding: 12,
    // backgroundColor:'white'
    backgroundColor:'#fbfbfb'

  },
  benefitsContainer: {
    // marginBottom: 20,
  },
  title: {
    // fontSize: 20,
    fontSize: 20,

    fontWeight: 'bold',
    // marginBottom: 10,
    textAlign: 'center',
    // color:'156E2F',
    color:'#156E2F',
    // backgroundColor:'156E2F'
  },
  subtitle: {
    // fontSize: 16,
    fontSize: 14,

    // marginBottom: 20,
    textAlign: 'center',
    color:'#3F48CC'
  },
  titleo: {
    // fontSize: 20,
    fontSize: 15,

    fontWeight: 'bold',
    // marginBottom: 10,
    textAlign: 'left',
    // color:'156E2F',
    // color:'#156E2F',
    color:'#05051b',
    // backgroundColor:'156E2F'
  },
  subtitlet: {
    // fontSize: 16,
    fontSize: 12,

    // marginBottom: 20,
    textAlign: 'left',
    // color:'#3F48CC'
    color:'black'
  },
  titlet: {
    // fontSize: 20,
    fontSize: 10,

    fontWeight: 'bold',
    // marginBottom: 10,
    textAlign: 'left',
    // color:'156E2F',
    // color:'#156E2F',
    color:'yellow'
    // backgroundColor:'156E2F'
  },
  subtitleth: {
    fontSize: 16,
    // marginBottom: 20,
    textAlign: 'left',
    // color:'#3F48CC'
    color:'#05051b',
    fontWeight: 'bold',

  },
  titlef: {
    fontSize: 15,
    fontWeight: 'bold',
    // marginBottom: 10,
    textAlign: 'left',
    // color:'156E2F',
    // color:'#156E2F',
    color:'pink'
    // backgroundColor:'156E2F'
  },
  subtitlef: {
    fontSize: 10,
    // marginBottom: 20,
    textAlign: 'left',
    // color:'#3F48CC'
    color:'red'
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  planContainer: {
    // marginBottom: 20,
    // margin:15,
    // padding:15
    // width:'90%',
    // padding:25,
    // flex:1    // padding:15,
    // flex:1
    // flex:1
    width: '90%', // Set the width to 90%
    alignSelf: 'center', // Center the container horizontally
    padding: 5,
    // backgroundColor: 'red', // You can add other styles as needed

  },
  planContainero: {
    // marginBottom: 20,
    // margin:15,
    width:'90%',
    padding:15,
    flex:1
    // flex: 1,
    // flexDirection: 'row',

  },
  planContainert: {
    // marginBottom: 20,
    // margin:15,
    padding:15,
    // flex: 1,
    flexDirection: 'row',

  },
  subscriptionContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  subscriptionContainero: {
    alignItems: 'center',
    marginBottom: 10,
  },
  box: {
    width: '90%',
    // padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent', 
  },
  boxo: {
    width: '90%',
    // padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent', 
  },
  selectedBox: {
    borderColor: '#777cff', 
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  benefitsList: {
    marginTop: 20,
  },
  benefitText: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor:'white',
    color:'#777cff'
  },
  customButton: {
    // backgroundColor: '#777cff',
    borderRadius: 8,
    backgroundColor:'#d4e10e',
    // paddingVertical: 12,
    paddingVertical: 8,

    // width: '90%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  customButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  },
  sectionButtonText: {
    color: 'white',
    marginLeft: 4,
    fontSize: 10,
  },
  sectionButton: {
    padding: 6,
    backgroundColor: '#ed67d0',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },



  selectedBoxn: {
    borderColor: '#2196F3', 
  },
  planContainern: {
    flex: 1,
  },
  titleContainern: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlen: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitlen: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  sectionButtonn: {
    backgroundColor: '#ed67d0', 
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginLeft: 8,
  },
  sectionButtonTextn: {
    color: 'white',
    fontSize: 12,
  },
  benefitContainer: {
    marginVertical: 8,
    alignItems: 'center', 
  },
  benefitContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    // padding: 8,
    width: '90%', 
  },
  icon: {
    // backgroundColor: '#ed67d0',
    backgroundColor:'#ed67d0',
    // padding: 4,
    borderRadius: 50,
  },
  benefitText: {
    color: '#777cff',
    marginLeft: 8,
    fontWeight: 'bold',

  },

  benefitContento: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    // padding: 8,
    margin:8,
    width: '90%', 
  },
  icono: {
    // backgroundColor: '#ed67d0',
    backgroundColor:'#ed67d0',
    // padding: 4,
    borderRadius: 50,
  },
  benefitTexto: {
    color: '#777cff',
    marginLeft: 8,
    fontWeight: 'bold',

  },

  benefitContentt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    // padding: 8,
    width: '90%', 
  },
  icont: {
    // backgroundColor: '#ed67d0',
    backgroundColor:'#ed67d0',
    // padding: 4,
    borderRadius: 50,
  },
  benefitTextt: {
    color: '#777cff',
    marginLeft: 8,
    fontWeight: 'bold',

  },
  buttonContainer: {
    width: '60%',
    // marginTop: 10,
    alignSelf:'center'
  },
});

export default Screen2;