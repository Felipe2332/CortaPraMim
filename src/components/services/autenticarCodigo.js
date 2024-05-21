import { useNavigation } from '@react-navigation/native';
import { token2 } from './login';


  async function getId(email) {
    let cliente = await fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${email}`,{
      method: "GET",
      headers: {
          "Authorization": `Bearer ${token2}` 
      }
        });
    let json = await cliente.json();
    let { cli_Id } = json;
    console.log('ID do cliente', cli_Id);
    return cli_Id;
  }

  async function AutenticarCodigo(code, email, cell, username) {
    const cli_Id = await getId(email);
  
    const navigation = useNavigation(); 
  
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
        console.log(`${code}/${email}/${cell}/${username}`);
        console.log(response.json());
        navigation.navigate('LoginSenha', { username, cell, email });
      } else if (response.status == 401 || response.status == 30) {
        Alert.alert(
          "Código de autenticação inválido! ou expirou. Solicite outro",
          { cancelable: true }
        );
      }
    } catch (erro) {
      console.error('Erro ao enviar dados para a API:', erro.message);
    }
  }
  
  export default AutenticarCodigo;
