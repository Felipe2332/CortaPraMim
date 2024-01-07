import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../components/login";
import Agendamento from "../components/agendamento";


const Stack = createNativeStackNavigator();



export default function Routes(){
  return(

    <Stack.Navigator
    initialRouteName="Login"
      screenOptions={{headerShown: false}}
    > 
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Agendamento" component={Agendamento}/>
        
    </Stack.Navigator>


    )
  }