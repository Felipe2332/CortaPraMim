import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image,ScrollView,Animated, BackHandler } from 'react-native';
import styles from './style';
import {  useFonts, Poppins_300Light,Poppins_700Bold } from '@expo-google-fonts/poppins';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Politica = () => {

  const [animacao] = useState(new Animated.Value(0));
  const navigation = useNavigation();


  useEffect(()=>{
    Animated.timing(animacao,{
      toValue:1,
      duration:1500,
      useNativeDriver:true
    }).start();


    
  },[])

  return (
    <Animated.View style={styles.container} >
    
    <ScrollView style={styles.scrollView}>
    <TouchableOpacity onPress={navigation.goBack()}><AntDesign name="back" size={24} color="black" /></TouchableOpacity>
        
    <Text style={styles.text}>A política de privacidade, criada pela equipe Corta pra mim referente a empresa FiveTec, foi criada em novembro de 2023. Afim de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural, a equipe elaborou a presente política de privacidade, observando a disposição da LGPD (Lei Geral de Proteção de Dados) – Lei nº13.709/2018. 
    </Text>

    <Text style={styles.textTitle}>
    O QUE SÃO DADOS PESSOAIS E DADOS SENSIVEIS?
    </Text>

    <Text style={styles.text}>
    Dados pessoais são informações que podem ser usadas para identificar uma 
    pessoa natural (física). Dados sensíveis, segundo a LGPD, consistem em 
    informações sobre origem racial ou étnica, convicção religiosa, opinião política, 
    filiação a sindicato ou organização de caráter religioso, filosófico ou político, ou 
    até mesmo dado referente à saúde ou à vida sexual, dado genético ou 
    biométrico. Contudo este sistema irá utilizar apenas dos dados pessoais. 
    </Text>

    <Text style={styles.textTitle}>
    QUAIS OS DADOS PESSOAIS COLETADOS PELO SISTEMA?
    </Text>

    <Text style={styles.text}>
    Os dados pessoais são coletados na realização do cadastro de usuários do 
    sistema e no cadastro de clientes da empresa em questão. 
    Referente ao cadastro de clientes são coletados os seguintes dados pessoais: <Text style={styles.textP}>{"\n"}. Nome</Text><Text style={styles.textP}>{"\n"}. E-mail</Text> {"\n"}<Text style={styles.textP}>. Telefone</Text>{"\n"}
    Referentes dados pessoais serão utilizados para a pesquisa e organização dos 
    clientes nos sistemas, principalmente o imei e telefone, verificando assim se é o 
    primeiro login do cliente no sistema. 
    </Text>

    <Text style={styles.textTitle}>
    POR QUE O SISTEMA TRATA OS DADOS PESSOAIS DE CLIENTES?
    </Text>

    <Text style={styles.text}>
    Para que o sistema possa autenticar o telefone do cliente, autenticando assim 
    se é um telefone real, e para que após a primeira verificação ele não precise 
    autenticar novamente.
    </Text>

    </ScrollView>

    </Animated.View>
  );
};



export default Politica;