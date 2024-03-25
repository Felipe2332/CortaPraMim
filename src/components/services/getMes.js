import token from "./macadoAranhaGeradorDeToken";


 async function getMes(mes){
  try{
   const response = await fetch(`https://cortapramim.azurewebsites.net/api/Agendamento/getbymonth/${mes}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}` // Corrigindo o formato do token aqui
        }
    });
   //tentar usar o includes
   return response.json();
  }catch(error){
   console.log('erro na api get mes', error);
 }
 }

 export default getMes;