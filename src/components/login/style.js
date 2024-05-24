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
  imagemFundo:{
    flex:1,
    resizeMode: 'cover',
    alignContent:"center",
    justifyContent: 'center',
    width:"100%",
    
  },
  viewLogin:{
    width:"100%",
    alignItems:'center',
    marginBottom: 80,
    
  },
  input:{
    width:"90%", //o input ocupa 90% da tela na horizontal
    backgroundColor:"#f6f6f6", // cinza claro
    borderRadius: 50, // arredonda os dois lados
    height: 40, // deixa ele mais alto
    margin: 15,
    paddingLeft:10, // afasta oque ta dentro dele da parede esquerda
    marginTop: 5,
    fontSize:20,
  },
  textLogin:{
    fontSize:22,
    marginRight:220,
    color:'white',
    //fontFamily:'Poppins_300Light',
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
    //fontFamily:'Poppins_300Light',
    fontSize: 20
  },
  textPrivacidade:{
    flex:1,
    position:"absolute",
    marginTop: 220,
    margin:15,
    color:"white",
    justifyContent:"center",
    alignSelf:"center",
    fontSize:20,
    //fontFamily:"Poppins_300Light"
  },
  txtforgot:{
    color:"white",
    fontSize:17,
    
  },
  strengthTextContainer: {
    borderRadius:5,
    padding:2,
    
  },
  strengthText: {
    fontSize:16,
  },

});

export default styles