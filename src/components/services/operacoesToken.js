import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const salvarToken = async (value, username) => {
  try {
    const data = { token, username };
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@data', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const lerToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@data');
    // Printa token no cosole
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
};

export const removerToken = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch(e) {
    console.log(e);
  }
};

// Função para verificar se o token é válido
export const tokenEValido = async () => {
  const token = await lerToken();
  if (token) {
    const decodedToken = jwt_decode(token);
    const currentDate = new Date();
    // O campo `exp` do token é em segundos
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expirado.");
      return false;
    } else {
      console.log("Token válido.");
      return true;
    }
  }
  return false;
};
  