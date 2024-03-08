import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity,BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import { useRoute } from '@react-navigation/native';

import AutenticarCodigo from '../services/autenticarCodigo';


export default function TelaDeCodigo({route}) {
  
    const navigation = useNavigation();
    const {username, cell,email} = route.params;

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
      <Text style={{fontSize:26,color:"white"}}>Fala {username}</Text>
      <Text style={{fontSize:26,color:"white"}}>Seu telefone {cell}</Text>
      <Text style={{fontSize:26,color:"white"}}>Seu email {email}</Text>


        <Text style={styles.textLogin}>Código</Text>
        <TextInputMask style={styles.input} type={"only-numbers"} onChangeText={text => setCode(text)}>

        </TextInputMask>

        <TouchableOpacity style={styles.button} onPress={() => AutenticarCodigo(code,email,cell,username,navigation)}><Text style={styles.textButton}>Validar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>Reenviar Código</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('AbaNavegacao', {username, cell,email})}} style={styles.button} ><Text style={styles.textButton}>Proxima</Text></TouchableOpacity>
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  