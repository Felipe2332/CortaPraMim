
import AsyncStorage from "@react-native-async-storage/async-storage";



async function getCliente(id){
  const tokenRecuperado = await AsyncStorage.getItem('TokenDoUsuario');
  
  let url = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyid/${id}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${tokenRecuperado}` 
  }

  });
  
  const json = await url.json();
  return json;
}

export default getCliente;