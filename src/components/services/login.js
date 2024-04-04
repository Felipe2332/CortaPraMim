import {salvarToken,lerToken,removerToken} from './operacoesToken';
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
  // Recee o token 
  let json = await response.json();
  token2 = json.jwtToken;

  // Armazenar o token
  salvarToken(token2,username); 
  // Lê o token
  lerToken(token2);


  if(response.status == 401){
    // Precisa de token
    let dataUser = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token2}` 
      }
    });
    let obj = await dataUser.json();
    
    return obj;
  }

  

 
  
  if(json.passWordOk == true){
    // let dataLogin = await response.json();
    // console.log(dataLogin);
    //se for true o email e senha e autenticado estao corretos
    
    return true;
    
  } else
   return false;
   
}

export {token2 ,LoginApi};