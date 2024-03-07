import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaExemplo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de horarios</Text>
      <Text style={styles.description}>Aqui ele vai poder ver seus horarios agendados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default TelaExemplo;