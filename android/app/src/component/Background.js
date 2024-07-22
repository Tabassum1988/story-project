import React, { Children } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Background = ({Children}) => {
  return (
    <View>
     <ImageBackground source ={ require("../images/img1.png") } style={{height:'100%'}} /> 
    <View style={{position: "absolute" }}>
        {Children}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Background;
