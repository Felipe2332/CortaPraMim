import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import * as Notifications from 'expo-notifications';

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
      }).start(() =>  {navigation.navigate('AbaNavegacao', {username, cell});  // Navegue para a próxima tela
      });
        }
  }, [eVisivel]);

  if (!fontsLoaded) {
    return null;
  }


  const verificaCampo = () =>{
    const regex = /\d/; // expressão para verificar se há números
    if(cell.trim() === "" || username.trim() === "" || regex.test(username))
    {
      Alert.alert("Por favor, preencha os campos corretamente");
    }
    else
    {
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
      maxLength={30}  
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
        placeholder='(99) 99999-9999'>
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
