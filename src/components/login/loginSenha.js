import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity,BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import { useRoute } from '@react-navigation/native';



export default function LoginSenha() {
  
    const navigation = useNavigation();
    
    
    const [code, setCode] = useState("");

    
    
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
        {/* Tirar isso depois */}
      


        <Text style={styles.textLogin}>E-mail</Text>
        <TextInput placeholder='Email' style={styles.input}></TextInput>     

        <Text style={styles.textLogin}>Senha</Text>
        <TextInput placeholder='Senha' style={styles.input}></TextInput>
        
        <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Entrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}><Text style={styles.textButton}>Cadastrar</Text></TouchableOpacity>
        
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  