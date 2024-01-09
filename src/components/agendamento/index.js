
import React, { useMemo, useState } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format, formatDistance, getDay } from 'date-fns';
import styles from './style';


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

function CustomCalendar (props) {
  const initiDate = new Date();
  const [selected, setSelected] = useState(initiDate);
  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: '#a52a2a',
      selectedTextColor: 'yellow',
    }
  }), [selected])
  return (
    <Calendar
      style={styles.calendar}
      initialDate={initiDate}
      markedDates={marked}
      onDayPress={(day) => {
        setSelected(day.dateString);
        props.onDaySelect && props.onDaySelect(day);
      }}
      {...props}
    />
  );
}



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
console.log(formattedDate);
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
           {/*  */}
         
          <CustomCalendar/>

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


  