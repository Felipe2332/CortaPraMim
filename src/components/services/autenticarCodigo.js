import { useNavigation } from '@react-navigation/native';
//import token from '../services/macadoAranhaGeradorDeToken';
import { token2 } from './login';
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


async function getId(email) {
  let cliente = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${email}`,{
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token2}` // Corrigindo o formato do token aqui
    }
      });
  let json = await cliente.json();
  let { cli_Id } = json;
  console.log('resposta do get', cli_Id);
  return cli_Id;
}


  
async function AutenticarCodigo(code,email,cell,username,navigation){
  
  const cli_Id = await getId(email);

    let data = {
        code,
        email,
        cell,
        username,
        cli_Id
    }
    try{
    let response = await fetch(`https://cortapramim.azurewebsites.net/api/AuthCode/authenticate/${cli_Id}/${code}`, {
        method: 'POST',
        headers: {
          'Origin': 'https://cortapramim.azurewebsites.net',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if(response.ok){
        console.log(`${code}/${email}/${cell}/${username}`);
        console.log(response.json());
        navigation.navigate('AbaNavegacao', {username, cell,email});
      }
      else if(response.status == 401){
        Alert.alert(
          "Código de autenticação inváldo! ou expirou. Solicite outro",
          { cancelable: true}
          
        );
      }
      
    } catch (erro) {
        console.error('Erro ao enviar dados para a API:', erro.message);
      }
    
}
export default AutenticarCodigo;

