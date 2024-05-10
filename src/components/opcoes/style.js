import { StyleSheet } from "react-native";
import {  useFonts, Poppins_300Light,Poppins_700Bold } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#131418', 

  },
  headerContainer: {
    marginTop: '5%',
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth:2,
    borderRadius: 5,
    
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  buttonLogout: {
    position:"absolute",
    bottom:25,
    width:"80%",
    alignSelf:'center',
    backgroundColor: '#c02828',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },

  footer: { 
    width: '100%',
    alignItems: 'center',
  },
  textButtonLogout: {
    color: '#fff',
    fontSize: 24,
  },
});

export default styles