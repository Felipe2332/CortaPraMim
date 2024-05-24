import { token2 } from "./login";
import { getToken } from "./gravarToken";
import AsyncStorage from "@react-native-async-storage/async-storage";


const criarAgendamento = async (dataSelecionada, horarioSelecionado) => {
  const token = await getToken();
  const idString = await AsyncStorage.getItem('idCliente'); // Recuperando o id do cliente
  const id = idString ? Number(idString) : null;
  console.log('log id da api', id);
  console.log('log agendamemnto', token);
  try {
    const data = {
      date: dataSelecionada,
      time: horarioSelecionado,
      cli_Id: id,
      usu_Id: 3
    };

    let response = await fetch('https://cortapramim.azurewebsites.net/api/Agendamento/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    let text = await response.text();
    console.log('Resposta:', text);
    console.log("Dados enviados: ", data);

  } catch (error) {
    console.error('Erro:', error);
  }
};

export default criarAgendamento;