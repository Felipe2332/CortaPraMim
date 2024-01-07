
import { Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text'; 
//npm install react-native-masked-text --save
import styles from './style';
import { api, enviarDadosParaApi} from '../services/api'

import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins'; // npx expo install @expo-google-fonts/poppins expo-font
import { useState } from 'react';



export default function Login() {
  
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [cell, setCell] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins_300Light
  });
  if (!fontsLoaded) {
    return null;
  }

  const handleEviarDadosApi = () => { enviarDadosParaApi(username, cell)}

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    <View style={styles.viewLogin}>
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input}placeholder='Ex: Luis'
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
      onPress={() =>{
        handleEviarDadosApi(username, cell);
        navigation.navigate('Agendamento', {username,cell}) }
      }
      >
        <Text style={styles.textButton} 
        
        
        
        >ENTRAR</Text>
      </TouchableOpacity>
      <Text 
        style={{ fontFamily: 'Poppins_300Light', 
        fontSize: 30, 
        color: "white" }}>Luis dev
        </Text>

     
    
    </View>
    
    </Pressable>
    
  );
};