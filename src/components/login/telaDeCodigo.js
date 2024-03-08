import React, { useState, useEffect } from 'react';
import { Alert, StatusBar,ImageBackground, Animated, Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { func } from 'prop-types';
import { useRoute } from '@react-navigation/native';


export default function TelaDeCodigo({route}) {
  
    const navigation = useNavigation();
    const {username, cell,email} = route.params;
    
  
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
        <TextInputMask style={styles.input} type={"only-numbers"}>

        </TextInputMask>

        <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>Validar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} ><Text style={styles.textButton}>Reenviar Código</Text></TouchableOpacity>
        
      </View>
      {/* Fim do form */}
  
      </View>
      </ImageBackground>
      
      </Pressable>
      </>
    );
  };
  