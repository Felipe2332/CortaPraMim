import { useNavigation } from '@react-navigation/native';
import { token2 } from './login';
import { Alert } from 'react-native';

export async function getId(email) {
  let cliente = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${email}`,{
    method: "GET",
    headers: {
        "Authorization": `Bearer ${token2}` 
    }
      });
  let json = await cliente.json();
  console.log('Resposta completa da API:', json);
  let { cli_Id } = json;
  console.log('ID do cliente', cli_Id);
  return cli_Id;
}
  

  async function AutenticarCodigo(code, email, cell, username,navigation) {
    const cli_Id = await getId(email);
  

    let data = {
      code,
      email,
      cell,
      username,
      cli_Id
    };
  
    try {
      let response = await fetch(`https://cortapramim.azurewebsites.net/api/AuthCode/authenticate/${cli_Id}/${code}`, {
        method: 'POST',
        headers: {
          'Origin': 'https://cortapramim.azurewebsites.net',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        
        navigation.navigate('LoginSenha', {username, cell, email});
        Alert.alert(
          "Sucesso",
          "Sua conta foi autenticada! Você pode entrar na sua conta agora.",
          [{ text: "OK"}],
          { cancelable: true }
        );
      } else if (response.status == 401 || response.status == 30|| response.status == 404) {
        Alert.alert(
          "Aviso",
          "Código de autenticação inválido! ou expirou. Solicite outro",
          [{ text: "OK", }],
          { cancelable: true }
        );
      }
    } catch (erro) {
      console.error('Erro ao enviar dados para a API:', erro.message);
    }
  }

  
  
  export default AutenticarCodigo;
