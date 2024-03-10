import { useNavigation } from '@react-navigation/native';

/*const AutenticarCodigo = (code,email,cell,username,navigation) => {

    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
      
    fetch(`https://cortapramim.azurewebsites.net/api/Codigo_Autenticacao/authenticate/${code}/${email}/${cell}/${username}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            if(result === 'true'){
                navigation.navigate("AbaNavegacao");
            }
        })
        .catch(error => console.log(`deu erro ${username}`, error));
}*/
  
async function AutenticarCodigo(code,email,cell,username,navigation){
    
    let data = {
        code,
        email,
        cell,
        username
    }
    try{
    let response = await fetch(`https://cortapramim.azurewebsites.net/api/Codigo_Autenticacao/authenticate/${code}/${email}/${cell}/${username}`, {
        method: 'POST',
        headers: {
          'Origin': 'https://cortapramim.azurewebsites.net',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if(response.ok){
        console.log(`${code}/${email}/${cell}/${username}`);
        navigation.navigate('AbaNavegacao', {username, cell,email});
      }
      
    } catch (erro) {
        console.error('Erro ao enviar dados para a API:', erro.message);
      }
    
}
export default AutenticarCodigo;



// PORÉM O CÓDIGO TÁ CHEGANDO NO EMAIL