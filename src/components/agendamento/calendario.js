import React, { useMemo, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList, BackHandler } from 'react-native';
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'


//Configuração do calendário
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
  //Fim da config calend
  
  
  //Ideias: Lista de espera
  

export function CustomCalendar (props) {
//Propriedades do calendário
// Formatar para Brasil
    function dataFormatada(day) {
      const dataSelecionada = day.dateString;
    
      // Crie um objeto Date a partir da data selecionada
      const dateObject = new Date(dataSelecionada + 'T00:00');
      //Isso é necessário pois estava dando problema que quando selecionado dia 12, aparecia dia 11
      //O fuso horário altera a data
    
      // Formate a data para 'dd/MM/yyyy' usando date-fns
      const dataFormatada = format(dateObject, 'dd/MM/yyyy');
  
      //Formatar a porra do dia da semana
      const diaDaSemana = format(dateObject, 'EEEE', { locale: ptBR });
      
      // Texto que vai mostrar abaixo do calendário
      setTextAgendado(`Você selecionou o dia ${dataFormatada}, ${diaDaSemana}`);
      return(dataFormatada);
    }
  
    const [textAgendado, setTextAgendado] = useState('Selecione uma data')
    
    
  
    // Data inicial
    //Isso é para deixar a data marcada sendo como a data inicial
    const dataInicial = new Date();
    const dataInicialString = dataInicial.toISOString().split('T')[0];
    const [selected, setSelected] = useState(dataInicialString);
    const [marked, setMarked] = useState({
      [dataInicialString]: {
        selected: true,
        selectedColor: '#e3a857',
        selectedTextColor: 'white',
      }
    });
  
    // Data final. O usuário só pode marcar horário até 3 meses para frente
    const dataMaxima = new Date();
    dataMaxima.setMonth(dataMaxima.getMonth() + 2);
    const dataMaximaString = dataMaxima.toISOString().split('T')[0];
  
    //Fim das propriedades do calendário
  

    return (
      
      <View>
      <Calendar
        style={styles.calendario}
        theme={{
          
          'stylesheet.calendar.main': {
            dayContainer: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              
            }},
  
         calendarBackground:'#e2e2e2', // mudar a cor de fundo do calendario
         todayTextColor:'black',
         arrowColor:'#3d251e',
        //textDayFontFamily:'Arial',
        //textMonthFontFamily:'Arial',
        //textDayHeaderFontFamily:'Arial',
         textMonthFontWeight:'bold',
         textMonthFontSize:20,
         textDayFontSize:20,
         textDayHeaderFontSize:13,
         textDisabledColor:"#c9c8c8",
        }}
        initialDate={dataInicialString}
        minDate={`${dataInicial}`}
        maxDate={dataMaximaString}
        markedDates={marked}
        onDayPress={(day) => {
          setSelected(day.dateString);
          setMarked({
            [day.dateString]: {
              selected: true,
              selectedColor: '#e3a857',
              selectedTextColor: 'white',
            }
          });
          //Aqui printa a data formatada abaixo do calendário
          dataFormatada(day);
          props.onDaySelect && props.onDaySelect(day);
        }}
        enableSwipeMonths={true}
        {...props}
      />
      <Text style={styles.textoDeData}>{textAgendado}</Text>
  
      </View>
    );
  }
  // Fim do calendário