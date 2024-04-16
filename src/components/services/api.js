import { token2 } from "./login";
import { getToken } from "./gravarToken";


const token = getToken().then(resp => resp);

async function getPhone(cellPhone) {
  console.log('log na api', token);
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

const criarAgendamento = async (dataSelecionada, horarioSelecionado, id) => {
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
        "Authorization": `Bearer ${token2}`
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