import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseJSON } from 'date-fns';
import base64 from 'react-native-base64';
import { Buffer } from "buffer";
import {Alert}  from 'react-native'

const salvarToken = async (token) => {
  try {
    await AsyncStorage.setItem('TokenDoUsuario', token);
    
  } catch (error) {
    
  }
};

const recuperarToken = async () => {
  try {
    const tokenRecuperado = await AsyncStorage.getItem('TokenDoUsuario');
    if (tokenRecuperado !== null) {
      // O token existe e foi recuperado

      const decoded = JSON.parse(Buffer.from(tokenRecuperado.split('.')[1], 'base64').toString());
      
      console.log(decoded);
      
     
      return decoded;

    }
  } catch (error) {
    // Tratar o erro de recuperação, se necessário
    console.error('Erro ao recuperar o token:', error);
  }
  
};

const getToken = async () => {
  
    const tokenRecuperadoBuffer = await AsyncStorage.getItem('TokenDoUsuario');

    const tokenRecuperado = tokenRecuperadoBuffer.toString();
    
    
    return tokenRecuperado;
}


export {recuperarToken, salvarToken, getToken};
