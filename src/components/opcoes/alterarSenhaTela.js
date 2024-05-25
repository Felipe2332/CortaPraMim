import React, { useState,useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground,Pressable,Keyboard } from 'react-native';
import {alterarSenha} from '../services/alterarSenha'
import styles from '../login/style'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';



export const AlterarSenhaTela = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [suggestions, setSuggestions] = useState([]); 
  const [strength, setStrength] = useState('');  
  const [strengthColor,setStrengthColor] = useState('');
  const animationRef = useRef(null);
  const [loading,setLoading] = useState(false); 
  const navigation = useNavigation();

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
    setNovaSenha(text);
    const color = validatePassword(text);
    setStrengthColor(color);
  };

  const handleSave = async () => {
    setLoading(true);
    if (animationRef.current) {
      animationRef.current.play(); // Inicia a animação
    }
    await alterarSenha(senhaAtual, novaSenha);
    setLoading(false);
  };

  

  

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    <ImageBackground source={require('../../../assets/cadeiras.jpg')} imageStyle={{opacity:0.5}}style={styles.imagemFundo}>
    <View style={styles.viewLogin}>

    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="back" size={40} color="black" style={{backgroundColor:"#e3a857", position:"absolute", right:150, bottom:160 ,borderRadius:5, }}/>
    </TouchableOpacity>

      <Text style={styles.textLogin}>Mudar senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha atual"
        secureTextEntry
        value={senhaAtual}
        onChangeText={(text) => setSenhaAtual(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={novaSenha} 
        onChangeText={(text) => {setNovaSenha(text);handlePasswordChange(text)}}
      />
      <View style={{...styles.strengthTextContainer, backgroundColor: strengthColor}}>
        <Text style={styles.strengthText}>
          {strength}
        </Text>
      </View>


      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.textButton}>Alterar Senha</Text>
      </TouchableOpacity>

      {loading && <LottieView ref={animationRef} source={require('../../../assets/lottie/Animation - 1716669362866.json')} autoPlay loop style={{flex:1, width:200, height:200}} />}

     


    </View>
    </ImageBackground>
    </Pressable>
  );
};



