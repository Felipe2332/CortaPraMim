import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';


const fetchFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    // Adicione outras fontes conforme necessário
  });
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <Login/>
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
