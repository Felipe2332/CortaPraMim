import { StyleSheet } from "react-native";
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    
    
  },
  viewLogin:{
    width:"100%",
    alignItems:'center',
    marginBottom: 80
  },
  input:{
    width:"90%", //o input ocupa 90% da tela na horizontal
    backgroundColor:"#f6f6f6", // cinza claro
    borderRadius: 50, // arredonda os dois lados
    height: 40, // deixa ele mais alto
    margin: 15,
    paddingLeft:10, // afasta oque ta dentro dele da parede esquerda
    marginTop: 5
  },
  textLogin:{
    marginRight:220,
    color:'white',
    fontFamily:'Poppins_300Light'
  },
  button:{
    marginTop: 50,
    backgroundColor:'black',
    height: 50,
    width:'90%',
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center'
  },
  textButton:{
    color:'white',
    fontFamily:'Poppins_300Light',
    fontSize: 20
  }

});

export default styles