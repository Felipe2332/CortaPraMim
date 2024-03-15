import MandarEmail from "./mandarEmail";

async function CriarCliente(email,cell,name,senha){

  const data = {
  email: email,
  phone: cell,
  nome: name,
  passWord: senha
   
  };

  let response = await fetch('https://cortapramim.azurewebsites.net/api/Cliente/create', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
  let text = await response.text();
    console.log('Resposta:', text);

    MandarEmail(email,name);
}


export default CriarCliente;