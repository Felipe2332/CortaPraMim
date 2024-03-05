import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaExemplo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the screen!</Text>
      <Text style={styles.description}>This is a simple example of a React Native screen.</Text>
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