
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getAgendamentos(id){
    const tokenRecuperado = await AsyncStorage.getItem('TokenDoUsuario');
    
    let url = await fetch(`https://cortapramim.azurewebsites.net/api/Agendamento/getbyclienteid/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${tokenRecuperado}` 
    }
  
    });
    
    const json = await url.json();
    return json;
  }
export default getAgendamentos;
  