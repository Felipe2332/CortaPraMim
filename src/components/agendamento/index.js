import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Agendamento() {

  return (
    <View style={styles.container}>
      <Text >ola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});