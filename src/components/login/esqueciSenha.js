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



export default function EsqueciSenha() {
  
    const navigation = useNavigation();
    
    const [login, setLogin] = useState('');


    return (
      <>
      <StatusBar backgroundColor={"black"}/>
      
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      
      <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
        
      <View>
      <View style={styles.viewLogin}>

      <Text style={styles.textLogin}>Insira seu E-mail</Text>
      <TextInput placeholder='Digite aqui' style={styles.input} value={login}></TextInput>
      <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Enviar</Text></TouchableOpacity>
        
       
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  