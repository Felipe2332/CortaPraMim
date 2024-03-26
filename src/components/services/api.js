import token from "./macadoAranhaGeradorDeToken";

/*import axios from 'axios';

const api = axios.create(
  {
    baseURL: 'https://cortapramim.azurewebsites.net/api'
}
);

const enviarDadosParaApi = async (username, cell) => {
  try {
    const response = await api.post('/ClienteSemCadastro/create', {
      csc_Cpf: "02106585054",
      csc_Nome: username,
      csc_Phone: cell,
      csc_Email: "uael@email.com",
    });
    console.log('Resposta da API:', response.data);
  } catch (error) {
    console.error('Erro ao enviar dados para a API:', error);
  }
};

export {api, enviarDadosParaApi};
*/

async function getPhone(cellPhone) {
  let cliente = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyphone/${cellPhone}`,{
    method: "GET",
      headers: {
  "Authorization": `Bearer ${token}` // Corrigindo o formato do token aqui
}
});
  let json = await cliente.json();
  let { cli_Id } = json;
  return cli_Id;
}

const criarAgendamento = async (dataSelecionada, horarioSelecionado, cellPhone) => {
  try {
   let cliId = await getPhone(cellPhone);
  
    const data = {
      date: dataSelecionada,
      time: horarioSelecionado,
      cli_Id: cliId,
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