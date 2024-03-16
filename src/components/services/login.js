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
  return response.ok;
}

export default LoginApi;