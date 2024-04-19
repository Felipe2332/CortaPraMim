import { StyleSheet } from "react-native";
import {  useFonts, Poppins_300Light,Poppins_700Bold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#181818',
    width:'100%',
    
  },
  text:{
    color:"white",
    fontSize:20,
    padding:12,
    textAlign:"justify",
    textShadowColor: "#000",
    lineHeight:30,
    
  },
  textTitle:{
    
    fontWeight:"bold",
    marginBottom:8,
    color:"white",
    fontSize:26,
    textAlign:"center",
    textShadowColor: "#000",
  },
  textP:{
    
    textTransform:"uppercase",
    color:"white",
    fontSize:20,
    justifyContent:"flex-start",
    
  },
  
  scrollView:{
    marginHorizontal:12,
    padding:10,
  },
  button:{
    marginTop: 5,
    backgroundColor:'black',
    height: 50,
    
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
  },

});

export default styles