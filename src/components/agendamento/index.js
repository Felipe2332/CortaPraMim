
import React, { useMemo, useState } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';


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

// Calendário
function CustomCalendar (props) {

  //Propriedades do calendário

  // Formatar para Brasil
  const dataFormatada = (day) => {

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
  }

  const [textAgendado, setTextAgendado] = useState('Selecione uma data')
  
  

  // Data inicial
  const dataInicial = new Date();
  const dataInicialString = dataInicial.toISOString().split('T')[0];
  const [selected, setSelected] = useState(dataInicialString);
  const [marked, setMarked] = useState({
    [dataInicialString]: {
      selected: true,
      selectedColor: '#91672c',
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
       textDayFontFamily:'Poppins_300Light',
       textMonthFontFamily:'Poppins_300Light',
       textDayHeaderFontFamily:'Poppins_300Light',
       textMonthFontWeight:'bold',
       textMonthFontSize:20,
       textDayFontSize:20,
       textDayHeaderFontSize:13,
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
            selectedColor: '#673319',
            selectedTextColor: '#cd883b',
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



const Agendamento = ({route}) => {

  const {username, cell} = route.params;
  const [visibleModal,setVisibleModal] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const fecharModal = () => {
    setVisibleModal(false)
  }
  
  const abrirModal = () => {
    setVisibleModal(true)
  }

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
  }

 //horarios que vão aparecer, FALTA LOGICA DE EXCLUIR UM HORARIO SELECIONADO
  const [horariosDisponiveis, setHorariosDisponiveis] = useState(['8:00','9:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00']);

  // CRIA CADA HORARIO COMO UM BOTAO
  const renderHorario = ({item}) => (
    <TouchableOpacity 
    style={styles.item}
    value={item}
    onPress={console.log(item)}
    >
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const confirmarAgendamento = () => {
    if(horarioSelecionado){
      setHorariosDisponiveis((prevHorarios) => prevHorarios.filter((h) => h !== horarioSelecionado));
      console.log(`Agendamento confirmado para ${horarioSelecionado}`);
      fecharModal();
    }else {
      console.log('Selecione um horário antes de confirmar o agendamento');

    }
  [horarioSelecionado]}

  return (
  <>
    <StatusBar backgroundColor={"black"}/>
    <View style={styles.container}>
      <View style={styles.cabecaView}>
      <Text style={styles.textmsg}>Bem Vindo</Text>
      <Text style={styles.textmsg}>{username}</Text>
    </View>

      <View  style={styles.modal}>
        <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>
      </View>

      <View style={styles.viewLogin}>
        <TouchableOpacity 
        style={styles.button}
        onPress={abrirModal}>
          <Text style={styles.textButton}>Agendar</Text>
        </TouchableOpacity>
      </View>
       
       
        <Modal
        visible={visibleModal}
        transparent={true}
        animationType='slide'>

          <TouchableWithoutFeedback
          onPress={fecharModal}>
            <View style={styles.overlay}/>
            </TouchableWithoutFeedback>

        <View style={styles.viewModal}>

          <Text style={styles.textButton}>SELECIONE UM HORÁRIO</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={horariosDisponiveis}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.item, horarioSelecionado === item && styles.itemSelecionado]}
                onPress={() => {
                  selecionarHorario(item) 
                  
                }}
                disabled={horarioSelecionado === item}>

                <Text style={styles.itemText}>{item}</Text>

              </TouchableOpacity>
              )}
            keyExtractor={(item) => item}/>

            <TouchableOpacity
              style={styles.button}
              onPress={confirmarAgendamento}
              disabled={!horarioSelecionado}>
              <Text style={styles.textButton}>Confirmar Agendamento</Text>
              </TouchableOpacity>

        </View>
        </Modal>
        {horarioSelecionado && (
          <View style={styles.horarioSelecionadoView}>
            <Text style={styles.horarioSelecionadoText}>Horário Selecionado: {horarioSelecionado}</Text>
          </View>
        )}
        </View>

  {/* Fim */}
  </>
  );

  }
  export default Agendamento;


  