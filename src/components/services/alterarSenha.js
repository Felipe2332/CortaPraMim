import { token2 } from "./login";
import { getToken } from "./gravarToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function alterarSenha(senhaAntiga, senhaNova) {
  try {
    const cli_Id = await AsyncStorage.getItem('idCliente'); 
    const token = await getToken();

    let requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
    };

    let response = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/changepassword/${cli_Id}/${senhaAntiga}/${senhaNova}`, requestOptions);
    let result = await response.json(); // parse the response as JSON

    if (result.passwordChanged) {
      return 'success';
    } else {
      throw new Error(result.message); // throw an error with the message from the API
    }
  } catch (error) {
    console.log('error', error);
    return error.message; // return the error message
  }
}

