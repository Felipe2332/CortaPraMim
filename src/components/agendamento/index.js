import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';




const Agendamento = ({route}) => {
  const {username, cell} = route.params;

  return (
    <View style={styles.container}>
      <Text >{username}</Text>
      <Text >{cell}</Text>
    </View>
  );

  }
  export default Agendamento;


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textmsg:{
    backgroundColor:'red'
  }
});