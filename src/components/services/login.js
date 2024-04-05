import token from "./macadoAranhaGeradorDeToken";
import {salvarToken} from "./gravarToken";


let token2 = '';
async function LoginApi(login,senha){
  
  let data = {
    email: login,
    passWord: senha
  }
  let response = await fetch('https://cortapramim.azurewebsites.net/api/Cliente/login', {
    method: 'POST',
    headers: {
      'Origin': 'https://cortapramim.azurewebsites.net',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  let json = await response.json();
  token2 = json.jwtToken;
  salvarToken(token2);
  
  if(response.status == 401){
    // Precisa de token
    let dataUser = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token2}` 
      }
    });
    let obj = await dataUser.json();
    let username = obj.cli_Nome; // Pegue o username do json retornado

    // Armazene o token e o username
    salvarToken(token2, username);

    return obj;
  }

  if(json.passWordOk == true){
    //se for true o email e senha e autenticado estao corretos
    return true;
  } else
   return false;
   
}



export {token2 ,LoginApi};