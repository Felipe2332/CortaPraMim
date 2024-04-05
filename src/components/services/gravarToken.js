import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'react-native-base64';

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

      console.log('Token recuperado:', tokenRecuperado);

      const decoded = base64.decode(tokenRecuperado.split('.')[1]);

      console.log('token formatado' ,decoded);
      return decoded;

    }
  } catch (error) {
    // Tratar o erro de recuperação, se necessário
    console.error('Erro ao recuperar o token:', error);
  }
  
};



export {recuperarToken, salvarToken};
