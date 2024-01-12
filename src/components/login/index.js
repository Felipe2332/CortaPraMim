import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import { enviarDadosParaApi} from '../services/api'
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';


export default function Login() {
  
  const navigation = useNavigation();
  const [username, setUserName] = useState("");
  const [cell, setCell] = useState("");
  const [fontsLoaded] = useFonts({
    Poppins_300Light
  });
  const [fadeAnim] = useState(new Animated.Value(0));  // Valor inicial da opacidade

  const [eVisivel, setEVisivel] = useState(true);

  useEffect(() => {
    fetch('https://cortapramim.azurewebsites.net/api/ClienteSemCadastro/getclientes', {
      method: 'GET',
    })
    .then((response) => {
      console.log(JSON.stringify(response)); // Tá funcionando e não tá. 70% pronto
    })
    .catch((error) => {
      console.error('Erro:', error);
    });


    if (eVisivel) {
      // Vai mudar o valor da opacidade para 1 em 2 segundo
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }).start();
    } else {
      // Vai mudar o valor da opacidade para 0 em 1 segundo
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start(() => navigation.navigate('Agendamento', {username, cell}));
    }
  }, [eVisivel]);

  if (!fontsLoaded) {
    return null;
  }

  

  const verificaCampo = () =>{
    if(cell.trim() === "" || username.trim() === "")
    {
      Alert.alert("Por favor, preencha os campos corretamente");
    }//Tá dando problema aqui. Quando aparece o aviso, a animação ainda ocorre
    else
    {
      // Envia essa bagaça pro Banco
      
    fetch('https://cortapramim.azurewebsites.net/api/ClienteSemCadastro/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      csc_Cpf: "FDFDSFDSFS", // SÓ É POSSÍVEL INSERIR CLIENTES NO BANCO SE TIVER CPF.
      csc_Nome: username,
      csc_Phone: cell,
      csc_Email: "FDSFDSFDSFSD", 
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Sucesso:', data);
  })
  .catch((error) => {
    console.error('Erro:', error);
  });
      setEVisivel(false);
    }
  }

  

  return (
    <>
    <StatusBar backgroundColor={"black"}/>
    
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    
    <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
      
    <Animated.View style={{opacity: fadeAnim}}>
    <View style={styles.viewLogin}>
      
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input}placeholder='Lucas Denadai'
      onChangeText={text => setUserName(text)}
      value={username}
      ></TextInput>
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
        placeholder='Ex: (99) 99999-9999'>
        </TextInputMask>

      <TouchableOpacity 
      style={styles.button}
      onPress={() =>verificaCampo()}
      >
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      
    </View>
    {/* Fim do form */}

    </Animated.View>
    </ImageBackground>
    
    </Pressable>
    </>
  );
};
