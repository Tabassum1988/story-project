import React,{useState} from 'react';
import { View, Text ,style, StyleSheet,Image,SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Rating = ({navigation}) => {

const [defaultRating ,setdefaultRating] =useState(2)
const [maxRating , setmaxrating] =useState([1,2,3,4,5])

const starImgFilled='https://www.kindpng.com/picc/m/57-579926_rounded-corner-star-png-transparent-png.png'
const starImgCorner='https://th.bing.com/th/id/OIP.wU9bj7e_oMkWCcZnvh6zyAAAAA?rs=1&pid=ImgDetMain'


const CustomRatingBar =({navigation})=>{
    return(
        <View style={styles.customRatingBarStyle}>
{
    maxRating.map((item,key)=>{
          return(
            <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={()=>setdefaultRating(item)}
            >
                <Image
                style={styles.starImgStyle}
                source={
                    item <= defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                }
                />
            </TouchableOpacity>
          )

    })
}

        </View>
    )
}
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
         
        </View>
     <View style={styles.form}>
    
        <View style={styles.circle}>
     <Image
           source={require('../images/starhappy.png')}
           style={styles.images}
           alt="logo"
           />
    </View>
     <View>
        <Text style={styles.textStyle}>How Would You Rate Our</Text>
        <Text style={styles.textStyle2}>App Experience</Text>
        <CustomRatingBar/>
        <Text style={styles.textStyle}> 
              {defaultRating + '/' + maxRating.length}
        </Text>
        <TouchableOpacity
           activeOpacity={0.7}
           style={styles.buttonStyle}
           onPress={()=>navigation.navigate('Login')}
        >
            <Text style={styles.textStyle1}> Submit</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle3}>No Thanks!</Text>
        </View> 
        </View> 
    </SafeAreaView>
  );
}

export default Rating;


const styles = StyleSheet.create({

    container: {
        backgroundColor:"#FFDE59",
        flex:1,
        margin:1,
        justifyContent:'center',
        
        // borderTopLeftRadius:40,
        // borderTopRightRadius:40,
    },
    header:{
        borderBottomLeftRadius: 5,  
        borderBottomRightRadius:5,
        marginTop: -100,              
        paddingTop: 100,
     
    },
    images:{
        width:90,
        height:90,
        alignItems:"center",
        justifyContent:"center",
        // marginTop:,
        marginLeft:3,
        borderRadius:250,
        
    },
    form:{
        
         backgroundColor:"white",
         padding:8,
         marginTop: 70,              
        
        borderCurve:'50',
      
        borderTopLeftRadius: 50, 
        borderTopRightRadius: 50, 
    
      
 
    },
    customRatingBarStyle:{
        justifyContent:"center",
        flexDirection:'row',
        marginTop:30,
    },
    starImgStyle:{
        width:40,
        height:40,
        resizeMode:'cover',
       marginTop:-25,
       margin:5,
      
    },
    textStyle:{
        
        textAlign:'center',
        fontSize:20,
        marginTop:25,
        fontWeight:'700',
    },
    buttonStyle:{

        backgroundColor:'#FFDE59',
        borderRadius:8,
        borderWidth:1,
        borderColor:"#FFDE59",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:5,
        paddingHorizontal:5,
        flexDirection:'row',
        marginTop:13,
        height:35,
        width:210,
       marginLeft:30,
       marginRight:20,
    },
    textStyle1:{
        color:'black',
        fontWeight:'700',
        fontSize:17,
    },
    textStyle2:{
        textAlign:'center',
        fontSize:20,
    marginBottom:10,
        fontWeight:'700',
    },
    textStyle3:{
        textAlign:'center',
        fontSize:15,
        marginTop:9,
        fontWeight:'700',
        marginBottom:50,
        marginLeft:25,
    },
    circle:{
        height:100,
        width:100,
        borderRadius:250,
        borderWidth:1,
        borderColor:"pink",
        marginLeft:85,
        marginTop:-45,
        
    },
    
})