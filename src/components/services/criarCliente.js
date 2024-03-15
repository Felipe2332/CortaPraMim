import MandarEmail from "./mandarEmail";





async function CriarCliente(email,cell,name,senha){
  
  const data = {
  email: email,
  phone: cell,
  nome: name,
  passWord: senha
   
  };
try{
  let response = await fetch('https://cortapramim.azurewebsites.net/api/Cliente/create', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
  let text = await response.json();
  let teste = response.status;
  console.log(teste);
  if(!response.ok){
    console.log('Resposta: ', text);
    return false
  }else{
    console.log('esse email é novo em');
    return true
    
  }
  
}catch (erro){

  console.log('Resposta:', erro);

}
    
  
    // ERRO TÁ AQUI, SE JÁ EXISTIR UM EMAIL IGUAL, NÃO DEIXAR CADASTRAR NOVAMENTE
    //MandarEmail(email,name);
}


export default CriarCliente;