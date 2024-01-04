
import { Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import styles from './style';

import { useFonts } from 'expo-font';



export default function Login() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  });

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
    <View style={styles.viewLogin}>
      <Text style={styles.textLogin}>Nome</Text>
      <TextInput style={styles.input}placeholder='Ex: Luis'></TextInput>
      <Text style={styles.textLogin}>Telefone</Text>
      <TextInput style={styles.input}placeholder='Ex: (19) 99999-9999'></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 30 }}>Poppins font</Text>
    </View>
    </Pressable>
  );
};