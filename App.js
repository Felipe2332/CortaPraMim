import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login';

import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

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
