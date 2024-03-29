import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList, BackHandler } from 'react-native';


import Login from "../components/login";
import TelaExemplo from '../components/horariosAgendados/listaDeHorarios';
import Politica from "../components/politicaDePrivacidade/politicaDePrivacidade";
import Termos from '../components/termos/termos';
import Agendamento from "../components/agendamento";
import TelaDeCodigo from "../components/login/telaDeCodigo";
import LoginSenha from "../components/login/loginSenha";

const Stack = createNativeStackNavigator();
const Aba = createBottomTabNavigator();

const AbaNavegacao = ({route}) => {
  const { username, cell } = route.params;
  return (
    
    <Aba.Navigator>
      <Aba.Screen name="Agendar" component={Agendamento} initialParams={{ username: username, cell: cell }} options={{ headerShown: false }}/>
      {/* Só entende os parâmetros se passado assim. Isso permite que a tela Agendamento tenha acesso a essas variáveis */}
      <Aba.Screen name="Termos Lucão" component={Termos} options={{ headerShown: false }}/>
    </Aba.Navigator>
    
  );
};
// Em resumo, passamos os parâmetros do login para a tela de AbaNavegacao que CONTÉM a tela Agendamento
// Basicamento TelaLogin -> AbaNavegação -> Agendamento

export default function Routes(){
  return(
    <Stack.Navigator initialRouteName="LoginSenha" screenOptions={{headerShown: false}}> 
      <Stack.Screen name="LoginSenha" component={LoginSenha} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name= "politicaDePrivacidade" component={Politica} />
      <Stack.Screen name="telaDeCodigo" component={TelaDeCodigo}/>
      <Stack.Screen name="AbaNavegacao" component={AbaNavegacao}/> 
    </Stack.Navigator>  
  )
}
