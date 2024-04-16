import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import CriarCliente from '../services/criarCliente';



export default function Login() {


  const navigation = useNavigation();

  const [username, setUserName] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState(""); 

  
  const [fadeAnim] = useState(new Animated.Value(1));  // Valor inicial da opacidade

  

  const verificaCampo = () =>{
    const regex = /\d/; // expressão para verificar se há números
    if(cell.trim() === "" || username.trim() === "" || regex.test(username))
    {
      Alert.alert("Por favor, preencha os campos corretamente");
    }
    else
    {
      CriarCliente(email, cell, username, senha)
      .then(resp => {
        // Aqui você pode acessar a resposta da função
        //se o email ja tem conta ele volta pra tela de login
        if(resp == false){
        Alert.alert('Essa conta já existe');
        navigation.navigate('LoginSenha');
        }else if(resp == true){
          navigation.navigate('telaDeCodigo', {username, cell,email})
          Alert.alert(
            "",
            `E-mail enviado para ${email}`,
            { cancelable: true}
            
          );
        }
      })
     
      
    }
    Keyboard.dismiss();
  }
  return (
    <>
    <StatusBar backgroundColor={"black"}/>
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    
    <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
      
    <Animated.View style={{opacity: fadeAnim}}>
    <View style={styles.viewLogin}>
      
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input} placeholder='Lucas Denadai' onChangeText={text => setUserName(text)} maxLength={30}  
      value={username}>
      </TextInput>

      <Text style={styles.textLogin}>E-mail</Text>
      <TextInput inputMode="email" style={styles.input} placeholder='email@gmail.com' maxLength={50} onChangeText={text => setEmail(text)} value={email}>
      </TextInput>

      <Text style={styles.textLogin}>Senha</Text>
      <TextInput inputMode="text" style={styles.input} secureTextEntry={true} placeholder='Senha' maxLength={30} onChangeText={text => setSenha(text)} value={senha}>
      </TextInput>


      <Text style={styles.textLogin}>Telefone</Text>
      <TextInputMask 
        type='cel-phone' 
        options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
        }}
        onChangeText={text => {
          const numericValue = text.replace(/[^0-9]/g, '');
          setCell(numericValue)}}
        style={styles.input}
        value={cell}
        placeholder='(99) 99999-9999'>
        </TextInputMask>

      <TouchableOpacity style={styles.button} onPress={() =>verificaCampo()}><Text style={styles.textButton}>CRIAR</Text></TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('politicaDePrivacidade')}><Text style={styles.textPrivacidade}>Privacidade</Text></TouchableOpacity>
      
    </View>
    {/* Fim do form */}

    </Animated.View>
    </ImageBackground>
    
    </Pressable>
    </>
  );
};
