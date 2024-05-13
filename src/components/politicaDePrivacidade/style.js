import { StyleSheet } from "react-native";
import {  useFonts, Poppins_300Light,Poppins_700Bold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#131418',
    width:'100%',
    
  },
  textTop:{
    //fontFamily:"Poppins_300Light",
    color:"white",
    fontSize:20,
    marginTop:40,
    padding:12,
    textAlign:"justify",
    textShadowColor: "#000",
    lineHeight:30,
    
  },
  text:{
    //fontFamily:"Poppins_300Light",
    color:"white",
    fontSize:20,
    padding:12,
    textAlign:"justify",
    textShadowColor: "#000",
    lineHeight:30,
    
  },
  
  textTitle:{
    //fontFamily:"Poppins_300Light",
    fontWeight:"bold",
    marginBottom:8,
    color:"white",
    fontSize:26,
    textAlign:"center",
    textShadowColor: "#000",
  },
  textP:{
    //fontFamily:"Poppins_300Light",
    textTransform:"uppercase",
    color:"white",
    fontSize:20,
    justifyContent:"flex-start",
    
  },
  
  scrollView:{
    marginHorizontal:6,
    padding:5,
  }

});

export default styles