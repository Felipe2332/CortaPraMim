import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {alterarSenha} from '../services/alterarSenha'

export const AlterarSenhaTela = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mudar senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha atual"
        secureTextEntry
        value={senhaAtual}
        onChangeText={(text) => setSenhaAtual(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry
        value={novaSenha}
        onChangeText={(text) => setNovaSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />
      <TouchableOpacity onPress={() => alterarSenha(senhaAtual, novaSenha)}>
        <Text>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

