import React, { useRef } from 'react';
import { View, Text, Button,TouchableOpacity, Animated } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Politica from '../politicaDePrivacidade/politicaDePrivacidade';
import styles from './style'
import { removeToken } from '../services/gravarToken'; 
import { Entypo,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';



const Opcoes = () => {
  const navigation = useNavigation();
  const position = useRef(new Animated.Value(-100)).current;
  
  // Animação
  useFocusEffect(
    React.useCallback(() => {
      // Sempre que entrar na tela, fazer animação
      position.setValue(-100);
      Animated.timing(position, {
        toValue: 0, // Move para a posição original
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  const handleBotaoSair = () =>{
    removeToken();
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginSenha' }],
    });
  }
  return (
    <Animated.View style={[styles.container, {transform: [{ translateY: position }]}]}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Opções</Text>
      </View>

      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('AlterarSenhaTela')}>
      <MaterialCommunityIcons name="key-change" size={30} color="black" style={{backgroundColor:"#e3a857", borderRadius:5}}/>
        <Text style={styles.optionText}>Alterar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('politicaDePrivacidade')}>
      <AntDesign name="book" size={30} color="black" style={{backgroundColor:"#e3a857", borderRadius:5}}/>
        <Text style={styles.optionText}>Política de privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => Linking.openURL('https://corta-pramim.azurewebsites.net/#servicos')}>
      <AntDesign name="team" size={30} color="black" style={{backgroundColor:"#e3a857", borderRadius:5}}/>
        <Text style={styles.optionText}>Serviços</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => Linking.openURL('https://corta-pramim.azurewebsites.net/contato')}>
      <Entypo name="help" size={30} color="black" style={{backgroundColor:"#e3a857", borderRadius:5}}/>
        <Text style={styles.optionText}>Contato</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonLogout} onPress={handleBotaoSair}>
        <Text style={styles.textButtonLogout}>Sair</Text>
      </TouchableOpacity>
      
    </View>
    </Animated.View>
  );
};

export default Opcoes;