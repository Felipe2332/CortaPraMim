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
  
  
  if(response.status == 401){
    let dataUser = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`)
    let obj = await dataUser.json();
    console.log(obj);
    return obj;
  }
  if(json.passWordOk == true){
    //se for true o email e senha e autenticado estao corretos
    return true;
    
  } else
   return false;
}

export default LoginApi;