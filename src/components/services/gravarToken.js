import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseJSON } from 'date-fns';
import base64 from 'react-native-base64';
import { Buffer } from "buffer";

const salvarToken = async (token) => {
  try {
    await AsyncStorage.setItem('TokenDoUsuario', token);
    
  } catch (error) {
    // Tratar o erro de salvamento, se necessário
    console.error('Erro ao salvar o token:', error);
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
    
    console.log('token no get token',  typeof tokenRecuperado);
    return tokenRecuperado;
}


export {recuperarToken, salvarToken, getToken};
