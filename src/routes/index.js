import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList, BackHandler } from 'react-native';
import Login from "../components/login";
import Politica from "../components/politicaDePrivacidade/politicaDePrivacidade";
import ListaDeHorariosAgendados from '../components/horariosAgendados/listaDeHorarios'
import Agendamento from "../components/agendamento";
import TelaDeCodigo from "../components/login/telaDeCodigo";
import LoginSenha from "../components/login/loginSenha";
import EsqueciSenha from "../components/login/esqueciSenha"
import { FontAwesome5 } from '@expo/vector-icons';
import { recuperarToken } from "../components/services/gravarToken";
import { useEffect } from "react";
import getCliente from "../components/services/getCliente";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Opcoes from '../components/opcoes/opcoes'
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Aba = createBottomTabNavigator();

const AbaNavegacao = ({route}) => {
  const { username, id } = route.params;
  

  return (
    
      <Aba.Navigator screenOptions={{
      tabBarActiveTintColor: '#673319', // Cor do ícone quando a aba está ativa
        tabBarInactiveTintColor: 'black', // Cor do ícone quando a aba está inativa
        tabBarStyle: {
          backgroundColor: 'white', // Cor de fundo da barra
          top:5
        },
    }}>
      <Aba.Screen name="Agendar" component={Agendamento} initialParams={{ username: username, id: id }} options={{ headerShown: false,tabBarIcon: ({color,size}) =>( <FontAwesome5 name="calendar" size={30} color={color} />),
      tabBarLabel:'', }}/>
      {/* Só entende os parâmetros se passado assim. Isso permite que a tela Agendamento tenha acesso a essas variáveis */}
      
      <Aba.Screen name="Lista" component={ListaDeHorariosAgendados} options={{ headerShown: false, 
      tabBarIcon: ({color,size}) =>( <FontAwesome5 name="list" size={30} color={color} />),
      tabBarLabel:'',}}/>

    <Aba.Screen name="Opcoes" component={Opcoes} options={{ headerShown: false, 
      tabBarIcon: ({color,size}) =>( <FontAwesome5 name="tools" size={30} color={color} />),
      tabBarLabel:'',}}/>
    </Aba.Navigator>
    
  );
};
// Em resumo, passamos os parâmetros do login para a tela de AbaNavegacao que CONTÉM a tela Agendamento
// Basicamento TelaLogin -> AbaNavegação -> Agendamento

export default function Routes(){
  const navigation = useNavigation();
  //recupera o token formatado
  useEffect(()=>{

    recuperarToken().then((resp)=> {
      
      if(resp != null){
        const {exp, unique_name} = resp;
        const expDate = new Date(exp * 1000);
        const dataAtual = new Date();
        console.log(expDate, dataAtual);

        if(expDate < dataAtual){
          console.log('Token vencido');
        } else {
          getCliente(unique_name).then((dataUser) => {
            let {cli_Nome: username, unique_name: id} = dataUser;
            AsyncStorage.setItem('idCliente', unique_name);
            navigation.navigate('AbaNavegacao', {username, id})
          });  
        }
      } else {
        console.log('token vazio amigo');
      }

      
    });
  
  }, [])

  
                                                                                                                                                      
  return(
    <Stack.Navigator initialRouteName={"LoginSenha"} screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginSenha" component={LoginSenha} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name= "politicaDePrivacidade" component={Politica} />
      <Stack.Screen name="telaDeCodigo" component={TelaDeCodigo}/>
      <Stack.Screen name="AbaNavegacao" component={AbaNavegacao} />
      <Stack.Screen name="Opcoes" component={Opcoes} />
    </Stack.Navigator>  
  )
}
