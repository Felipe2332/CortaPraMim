import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity,BackHandler,ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import { useRoute } from '@react-navigation/native';
import {token2, LoginApi} from '../services/login';
import TelaDeCodigo from './telaDeCodigo';
import MandarEmail from '../services/mandarEmail';
import { validarCampos } from '../services/validarCampos';
import { salvarToken } from '../services/gravarToken';



export default function LoginSenha() {
  
    const navigation = useNavigation();
    
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading,setLoading]  = useState(false);
    
    function validarLogin(login, senha){
      if (!validarCampos(login, senha, limparSenha)) {
        return;
      }
      setLoading(true);
        LoginApi(login,senha).then((response) => {
          if(response == true){
            console.log('login deu certo', response);

            let dataUser = fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`,{method:"GET",headers:{"Authorization": `Bearer ${token2}`}})
            .then((resp)=> resp.json()).then((json)=> {
              
            let {cli_Nome: username, cli_Id: id} = json;
            salvarToken(token2);
            navigation.navigate('AbaNavegacao', {username, id})})}

              else if(response == false){
                Alert.alert(
                "",
                "E-mail ou senha incorretos",
                [
                  { text: "OK", onPress:limparSenha }
                ],
                { cancelable: true, onDismiss:limparSenha}
                )}
            else{
            let {cli_Email: email, cli_Phone: telefone, cli_Nome: username} = response;
            Alert.alert("",`Enviamos o código para seu e-mail ${email}`,"",{cancelable:true} );
            MandarEmail(email,username);
           
            console.log(email, telefone, username);
            navigation.navigate('telaDeCodigo', {username, telefone,email})};
        })
        Keyboard.dismiss();
    }

    const limparSenha = () =>{
      setSenha("");
    }
    
    useEffect(() => {
      const handleBackButton = () => {
        // Adicionar qualquer lógica que desejar aqui. 
        // Se você retornar true, o comportamento padrão do botão voltar será desativado.
        return true;
      }
      
  
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  
      // Voltar a ativar o botão back
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        
      };
      
  
    });


    useFocusEffect(
      React.useCallback(() => {
        // Limpa os campos sempre que a tela ganha o foco
        // Não tava limpando os campos quando usuário saía do App
        setLogin("");
        setSenha("");
      }, [])
    );


    return (
      <>
      <StatusBar backgroundColor={"black"}/>
      
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
      <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
        
      <View>
      <View style={styles.viewLogin}>
        
        <Text style={styles.textLogin}>E-mail</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={value => setLogin(value)} value={login}></TextInput>     

        <Text style={styles.textLogin}>Senha</Text>
        <TextInput placeholder='Senha' secureTextEntry={true} style={styles.input} onChangeText={value => setSenha(value)} value={senha}></TextInput>
       
        <TouchableOpacity style={styles.button} onPress={()=> validarLogin(login,senha)}><Text style={styles.textButton} >Entrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}><Text style={styles.textButton}>Cadastrar</Text></TouchableOpacity>
        
        {isLoading && <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size="large" color="white" /></View>} 
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  