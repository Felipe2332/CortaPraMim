import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity,BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import { useRoute } from '@react-navigation/native';
import LoginApi from '../services/login';
import TelaDeCodigo from './telaDeCodigo';
import MandarEmail from '../services/mandarEmail';
import { validarCampos } from '../services/validarCampos';




export default function LoginSenha() {
  
    const navigation = useNavigation();
    
    
    const [code, setCode] = useState("");
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    
    function validarLogin(login, senha){
      if (!validarCampos(login, senha, limparSenha)) {
        return;
    }
      
        LoginApi(login,senha).then((response) => {
          if(response == true){
            console.log('login deu certo', response);
            let dataUser = fetch(`https://cortapramim.azurewebsites.net/api/Cliente/getbyemail/${login}`)
             .then((resp)=> resp.json()).then((json)=> {
              let {cli_Nome: username, cli_Phone: cell} = json;
              navigation.navigate('AbaNavegacao', {username, cell});
             })


          }else if(response == false){
            Alert.alert(
              "",
              "E-mail ou senha incorretos",
              [
                { text: "OK", onPress:limparSenha }
              ],
              { cancelable: true, onDismiss:limparSenha}
            );
          }else{
            alert('envia o codigo');
            let {cli_Email: email, cli_Phone: cell, cli_Nome: username} = response;
            MandarEmail(email,username);
           
            console.log(email, cell, username);
            navigation.navigate('telaDeCodigo', {username, cell,email});
          }

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
        {/* Falta colocar  uma função para ele entrar se tiver tudo certo*/}
        <TouchableOpacity style={styles.button} onPress={()=> validarLogin(login,senha)}><Text style={styles.textButton} >Entrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}><Text style={styles.textButton}>Cadastrar</Text></TouchableOpacity>
        
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  