import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    
    
  },
  textmsg:{
    fontSize: 18,
    color: 'red',
    fontWeight:'bold',
    margin: 1
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
    width: '100%',
    height: 40,
    marginTop: 30,
    gap:10
    
    

  },
});

export default styles;