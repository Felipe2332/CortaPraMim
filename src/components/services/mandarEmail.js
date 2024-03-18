//import { useRoute } from '@react-navigation/native';

const MandarEmail = (email,username) => {
    
  var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch(`https://cortapramim.azurewebsites.net/api/AuthCode/sendcode/${email}/${username}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${email}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    
          
}
  
export default MandarEmail;