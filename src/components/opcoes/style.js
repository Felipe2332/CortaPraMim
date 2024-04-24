import { StyleSheet } from "react-native";
import {  useFonts, Poppins_300Light,Poppins_700Bold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#181818',
    width:'100%',
  },
  button:{
    alignItems:"center",
    justifyContent:"space-around"
    
  },

  buttonLogout:{
    height:56,
    width:"80%",
    bottom:5,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent:"center",
    borderRadius:12,
    backgroundColor:"#e3a857",
    
  },
  textButtonLogout:{
    color:"white",
    alignSelf:"center",
    paddingTop:6,
    fontSize:24,

  },

});

export default styles