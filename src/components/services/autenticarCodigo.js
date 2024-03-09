import { useNavigation } from '@react-navigation/native';

const AutenticarCodigo = (code,email,cell,username,navigation) => {

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
        .catch(error => console.log('error', error));
}
  
export default AutenticarCodigo;



// PORÉM O CÓDIGO TÁ CHEGANDO NO EMAIL