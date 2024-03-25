import token from "./macadoAranhaGeradorDeToken";


 async function getMes(mes){
  try{
   let response = await fetch(`https://cortapramim.azurewebsites.net/api/Agendamento/getbymonth/${mes}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}` // Corrigindo o formato do token aqui
        }
    });
   let json = await response.json();
   //tentar usar o includes
  
  return json;
  }catch(error){
   console.log('erro na api get mes', error);
 }
 }


 getMes(3);

 export default getMes;