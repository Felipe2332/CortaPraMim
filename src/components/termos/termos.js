import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Termos = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/opa.png') }style={{resizeMode:"contain", width:430}}></Image>
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

export default Termos;