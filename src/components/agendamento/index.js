
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style';




const Agendamento = ({route}) => {
 
  const {username, cell} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cabecaView}>
      <Text style={styles.textmsg}>Bem Vindo</Text>
      <Text style={styles.textmsg}>{username}</Text>
      <Text >{cell}</Text>
      </View>

      <View style={styles.viewLogin}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Agendar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );

  }
  export default Agendamento;


  