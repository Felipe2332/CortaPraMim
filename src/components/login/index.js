
import { Pressable, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native';
import styles from './style';



export default function Login() {
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
      
    </View>
    </Pressable>
  );
};