
import React, { useState } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';

import styles from './style';
import Day from 'react-native-calendars/src/calendar/day';




const Agendamento = ({route}) => {
 
  const {username, cell} = route.params;
  const [textAgendado, setTextAgendado] = useState('Selecione uma data')
  
  const dataAtual = new Date();
 
  return (
    <>
    <StatusBar backgroundColor={"black"}/>
    <View style={styles.container}>
      <View style={styles.cabecaView}>
      <Text style={styles.textmsg}>Bem Vindo</Text>
      <Text style={styles.textmsg}>{username}</Text>
      
      </View>

      
        <View  style={styles.modal}>
          <Calendar
         
          onDayPress={(day)=>{setTextAgendado(day.dateString)}}
          >
          </Calendar>

          <Text style={styles.textmsg}>{textAgendado}</Text>
        </View>
      

    
      <View style={styles.viewLogin}>
          <TouchableOpacity 
          style={styles.button}
          
          >
            <Text style={styles.textButton}>Agendar</Text>
          </TouchableOpacity>
      </View>
    </View>
    </>
  );

  }
  export default Agendamento;


  