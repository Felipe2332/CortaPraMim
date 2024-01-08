
import React, { useState } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';

import styles from './style';
import Day from 'react-native-calendars/src/calendar/day';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort:[
    'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
  ],
  dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-Feira','Sexta-feira','Sábado'
  ],
  dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'
  ],
  today: "Hoje",
  
};

LocaleConfig.defaultLocale = 'br';

// Calma



const Agendamento = ({route}) => {

  const dataFormatada = (day) => {
    const selectedDate = day.dateString;
  
    // Crie um objeto Date a partir da data selecionada
    const dateObject = new Date(selectedDate + 'T00:00');
    //Isso é necessário pois estava dando problema que quando selecionado dia 12, aparecia dia 11
    //O fuso horário altera a data
  
    // Formate a data para 'dd/MM/yyyy' usando date-fns
    const formattedDate = format(dateObject, 'dd/MM/yyyy');
  
    // Agora você pode usar formattedDate como quiser
    setTextAgendado(formattedDate);
  }
  
 
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

      {/*Calendario  */}
        <View  style={styles.modal}>
          <Calendar
          // Estilera do calendário
          style={{
            borderWidth:4,
            borderRadius:15,
            borderColor:'brown',
          }}
          // A bagaça do tema não tá mudando inferno
          theme={{
            backgroundColor:'#3d251e'
          }}

          
          //Quando o usuario seleciona uma data
          onDayPress={dataFormatada}
          
          >
          </Calendar>   

          <Text style={styles.textmsg}>{textAgendado}</Text>
        </View>
      {/* Fim calendário */}

    
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


  