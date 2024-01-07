import axios from 'axios';

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
