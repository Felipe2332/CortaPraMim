

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

  if(response.status == 401){
    // Precisa de token
    let dataUser = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`)
    let obj = await dataUser.json();
    
    return obj;
  }

  let json = await response.json();
  if(json.passWordOk == true){
    // let dataLogin = await response.json();
    // console.log(dataLogin);
    //se for true o email e senha e autenticado estao corretos
    
    return true;
    
  } else
   return false;
   
}

export default LoginApi;