import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import CriarCliente from '../services/criarCliente';
import { AntDesign } from '@expo/vector-icons';



export default function Login() {


  const navigation = useNavigation();

  const [username, setUserName] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [suggestions, setSuggestions] = useState([]); 
  const [strength, setStrength] = useState('');  
  const [strengthColor,setStrengthColor] = useState('');

  
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
            "Aviso",
            `E-mail enviado para ${email}`, 
            [
            { text: "Corfirmar", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true }
            );
        }
      })
     
      
    }
    Keyboard.dismiss();
  

  }

   // Reforçador de senha
  const validatePassword = (input) => { 
  let newSuggestions = []; 
  let color = 'red'; 
  if (input.length < 8) { 
    newSuggestions.push('Password should be at least 8 characters long') 
  } 
  if (!/\d/.test(input)) { 
    newSuggestions.push('Add at least one number') 
  } 

  if (!/[A-Z]/.test(input) || !/[a-z]/.test(input)) { 
    newSuggestions.push('Include both upper and lower case letters') 
  } 

  if (!/[^A-Za-z0-9]/.test(input)) { 
    newSuggestions.push('Include at least one special character') 
  } 

  setSuggestions(newSuggestions);

  if (newSuggestions.length === 0) { 
    setStrength('Muito forte'); 
    color = 'green'; // Cor para senha muito forte
  } 
  else if (newSuggestions.length <= 1) { 
    setStrength('Forte');
    color = 'lime'; // Cor para senha forte
  } 
  else if (newSuggestions.length <= 2) { 
    setStrength('Moderada');
    color = 'yellow'; // Cor para senha moderada
  } 
  else if (newSuggestions.length <= 3) { 
    setStrength('Fraca');
    color = 'orange'; // Cor para senha fraca
  } 
  else { 
    setStrength('Muito fraca');
  }
  return color; 
  } 

  const handlePasswordChange = (text) => {
    setSenha(text);
    const color = validatePassword(text);
    setStrengthColor(color);
  };
  return (
    <>
    <StatusBar backgroundColor={"black"}/>
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    
    <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
      
    <Animated.View style={{opacity: fadeAnim}}>
    <View style={styles.viewLogin}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="back" size={40} color="black" style={{backgroundColor:"#e3a857", position:"absolute", right:150, bottom:70 ,borderRadius:5, }}/>
    </TouchableOpacity>
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input} placeholder='Lucas Denadai' onChangeText={text => setUserName(text)} maxLength={30}  
      value={username}>
      </TextInput>

      <Text style={styles.textLogin}>E-mail</Text>
      <TextInput inputMode="email" style={styles.input} placeholder='email@gmail.com' maxLength={50} onChangeText={text => setEmail(text)} value={email}>
      </TextInput>

      <Text style={styles.textLogin}>Senha</Text>
      <TextInput inputMode="text" style={styles.input} secureTextEntry={true} placeholder='Senha' maxLength={30} onChangeText={handlePasswordChange} value={senha}>
      </TextInput>

      <View style={{...styles.strengthTextContainer, backgroundColor: strengthColor}}>
        <Text style={styles.strengthText}>
           {strength}
        </Text>
      </View>



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

      
    </View>
    {/* Fim do form */}

    </Animated.View>
    </ImageBackground>
    
    </Pressable>
    </>
  );
};
