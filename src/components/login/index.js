
import { Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style';


import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { useState } from 'react';



export default function Login() {
  const [cell, setCell] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins_300Light
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    <View style={styles.viewLogin}>
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input}placeholder='Ex: Luis'></TextInput>
      <Text style={styles.textLogin}>Telefone</Text>

      <TextInputMask 
        type='cel-phone' 
        options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
      }}
        value={cell}
        onChangeText={text => setCell(text)}
      
      style={styles.input} placeholder='Ex: (19) 99999-9999'></TextInputMask>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: 'Poppins_300Light', fontSize: 30, color: "white" }}>Luis dev</Text>
    </View>
    </Pressable>
  );
};