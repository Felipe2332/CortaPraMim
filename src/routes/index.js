import React,{useEffect,useState} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList, BackHandler } from 'react-native';
import Login from "../components/login";
import Politica from "../components/politicaDePrivacidade/politicaDePrivacidade";
import { salvarToken, lerToken, removerToken, tokenEValido } from '../components/services/operacoesToken';
import Termos from '../components/termos/termos';
import Agendamento from "../components/agendamento";
import TelaDeCodigo from "../components/login/telaDeCodigo";
import LoginSenha from "../components/login/loginSenha";
import { FontAwesome5 } from '@expo/vector-icons';
import LoadingScreen from '../components/services/telaCarregamento'

const Stack = createNativeStackNavigator();
const Aba = createBottomTabNavigator();

const AbaNavegacao = ({route}) => {
  const { username, cell } = route.params;
  return (
    
      <Aba.Navigator screenOptions={{
      tabBarActiveTintColor: '#673319', // Cor do ícone quando a aba está ativa
        tabBarInactiveTintColor: 'black', // Cor do ícone quando a aba está inativa
        tabBarStyle: {
          backgroundColor: 'white', // Cor de fundo da barra
          top:5
        },
    }}>
      <Aba.Screen name="Agendar" component={Agendamento} initialParams={{ username: username, cell: cell }} options={{ headerShown: false,tabBarIcon: ({color,size}) =>( <FontAwesome5 name="calendar" size={30} color={color} />),
      tabBarLabel:'', }}/>
      {/* Só entende os parâmetros se passado assim. Isso permite que a tela Agendamento tenha acesso a essas variáveis */}
      
      <Aba.Screen name="Termos Lucão" component={Termos} options={{ headerShown: false, 
      tabBarIcon: ({color,size}) =>( <FontAwesome5 name="list" size={30} color={color} />),
      tabBarLabel:'',}}/>
    </Aba.Navigator>
    
  );
};
// Em resumo, passamos os parâmetros do login para a tela de AbaNavegacao que CONTÉM a tela Agendamento
// Basicamento TelaLogin -> AbaNavegação -> Agendamento

export default function Routes(){

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const data = await lerToken();
      if (data && await tokenEValido(data.token)) {
        setIsTokenValid(true);
        setUsername(data.username);
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  //Se o token não for resgatado ainda. Manda pra uma tela de carregamento
  if (isLoading) {
    return <LoadingScreen />;
  }

  return(
    <Stack.Navigator initialRouteName={isTokenValid ? "AbaNavegacao" : "LoginSenha"} screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginSenha" component={LoginSenha} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name= "politicaDePrivacidade" component={Politica} />
      <Stack.Screen name="telaDeCodigo" component={TelaDeCodigo}/>
      <Stack.Screen name="AbaNavegacao" component={AbaNavegacao}/> 
    </Stack.Navigator>  
  )
}
