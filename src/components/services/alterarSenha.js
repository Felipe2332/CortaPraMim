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
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    } else {
      let result = await response.text();
      console.log(result);
    }
  } catch (error) {
    console.log('error', error);
  }
}
