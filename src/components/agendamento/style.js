import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    
    
  },
  textmsg:{
    fontSize: 26,
    color: 'red',
    fontWeight:'bold',
    margin: 1
  },
  textoDeData:{
    fontSize: 26,
    color: 'red',
    fontWeight:'bold',
    marginTop:35,
    textAlign:'center'
  },
  cabecaView:{
    
    padding: 20,
    width: '100%',
    marginTop: 50,
    height: 100,
    gap: 15,
    justifyContent: 'center'
  },
  button:{
    marginTop: 5,
    backgroundColor:'black',
    height: 50,
    width:'90%',
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
  },
  viewLogin:{
    width:"100%",
    alignItems:'center',
    marginTop: '100%'
  },
  textButton:{
    color:'white',
    fontSize:20,
    // fontFamily:'Arial',
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
    paddingTop: 12,

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
    fontSize: 20,
    
  },
  horarioSelecionadoView:{
    backgroundColor: 'red'
  },
  horarioSelecionadoText:{
    backgroundColor:'green'
  },
  itemSelecionado:{
    backgroundColor:'rgba(0, 0, 0, 0.5)'
  }
});

export default styles;