import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from './Background';

const Home = () => {
  return (
    <Background>

        <View style={{marginHorizontal:40 , marginVertical:100}}>
        <Text style ={{ color: "black", fontSize: 64}} > Lets's start</Text>
        <Text style={{color: "blue" ,fontSize: 64}}> Coding</Text>
            <Text>hiiiiiiii</Text>
        </View>
     
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
