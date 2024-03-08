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

const criarAgendamento = (dataSelecionada,horarioSelecionado) => {

  
  const data = {
    
    cli_Id: 1,
    usu_Id: 1,
    age_Data: dataSelecionada,
    age_Time: horarioSelecionado,
    age_Cancelado: false,
    age_Feito: false,
  };
  
  console.log(data);


  fetch('https://cortapramim.azurewebsites.net/api/Agendamento/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.text())  // Altere isso
  .then((text) => {
    console.log('Resposta:', text);
  

    // Verificar se tá no Banco
    return fetch('https://cortapramim.azurewebsites.net/api/Usuario/getusuarios', {
      method: 'GET',
    });
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Agendamentos:', data);
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
};



async function getCodigoSms() {
  let response = await fetch('https://cortapramim.azurewebsites.net/api/Usuario/getusuarios');

}

export {getCodigoSms, criarAgendamento}