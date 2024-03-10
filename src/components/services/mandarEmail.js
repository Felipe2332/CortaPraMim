import { useRoute } from '@react-navigation/native';

const MandarEmail = (email,username) => {
    
  var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch(`https://cortapramim.azurewebsites.net/api/Codigo_Autenticacao/sendcode/${email}/${username}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
    
}
  
export default MandarEmail;