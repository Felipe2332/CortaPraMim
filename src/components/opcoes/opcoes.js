import React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Politica from '../politicaDePrivacidade/politicaDePrivacidade';
import style from './style'

const Opcoes = () => {
  const navigation = useNavigation();
  return (
    <View style = {style.container}>
      <Text>Política de privacidade</Text>
      {/* <Button title="Veja" onPress={()=>navigation.navigate('politicaDePrivacidade')} /> */}
      <TouchableOpacity style={style.buttonLogout}><Text style={style.textButtonLogout}>Sair</Text></TouchableOpacity>
    </View>
  );
};

export default Opcoes;