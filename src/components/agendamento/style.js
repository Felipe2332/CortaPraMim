import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    
  },
  textmsg:{
    fontSize: 22,
    color: 'red',
    fontWeight:'bold',
    margin: 1
  },
  textoDeData:{
    fontSize: 22,
    color: 'red',
    fontWeight:'bold',
    marginTop:35,
    textAlign:'center'
  },
  cabecaView:{
    backgroundColor: 'black',
    padding: 20,
    width: '100%',
    marginTop: 50,
    height: 100,
    gap: 15,
    justifyContent: 'center'
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
  viewLogin:{
    width:"100%",
    alignItems:'center',
    marginTop: '100%'
  },
  textButton:{
    color:'white',
    fontFamily:'Poppins_300Light',
    fontSize: 20
  },
  modal:{
    width: '85%',
    height: 50,
    marginTop: 30,
    gap:10,
  },
  calendario:{
    borderRadius:7.5,
  },
  viewModal:{
    
    backgroundColor: '#8c8377',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semitransparente
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  itemText: {
    fontSize: 16,
    
  },
});

export default styles;