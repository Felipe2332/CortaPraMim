import { useNavigation } from '@react-navigation/native';

const AutenticarCodigo = (code,email,cell,username) => {

    const navigation = useNavigation();
    
  
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch(`https://cortapramim.azurewebsites.net/api/Codigo_Autenticacao/authenticate/${code}/${email}/${cell}/${username}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    if(response.text===true){
        navigation.navigate("AbaNavegacao")
    }
    // ERRO É AQUI, RECLAMOU QUE RESPONSE NÃO EXISTE EM TELA DE CODIGO, LA NAQUELA TELA 
    // PORÉM O CÓDIGO TÁ CHEGANDO NO EMAIL
}
  
export default AutenticarCodigo