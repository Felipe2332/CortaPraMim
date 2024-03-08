import React, { useMemo, useState,useEffect } from 'react';
import { Text, View, TouchableOpacity,StatusBar, Modal, TouchableWithoutFeedback, FlatList, BackHandler } from 'react-native';
import styles from './style';
import {  useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import {CustomCalendar} from './calendario';
import { useRoute } from '@react-navigation/native';
import { getCodigoSms, criarAgendamento } from '../services/api';


// Para interagir com API
// Tá funcionando e não tá. 70% pronto

const Agendamento = ({route}) => {
  
  const [dataSelecionada, setDataSelecionada] = useState(null);
  
  const handleDateChange = (data) => {
    setDataSelecionada(data);
  };

  const {username, cell} = route.params;
  // Aí aqui em Agendamento a gente recupera as informações passadas da AbaNavegação
  const [visibleModal,setVisibleModal] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  useEffect(() => {
    const handleBackButton = () => {
      // Você pode adicionar qualquer lógica que desejar aqui. 
      // Se você retornar true, o comportamento padrão do botão voltar será desativado.
      return true;

    }

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Voltar a ativar o botão back
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };

  });

  const fecharModal = () => {
    setVisibleModal(false)
  }
  
  const abrirModal = () => {
    setVisibleModal(true)
  }

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
    setConfirmModalVisible(true); // Abre o modal de confirmação quando um horário é selecionado
  }

 //horarios que vão aparecer, FALTA LOGICA DE EXCLUIR UM HORARIO SELECIONADO
  const [horariosDisponiveis, setHorariosDisponiveis] = useState(['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','14:00','14:30','15:00','15:30','16:00','16:30','17:00']);
  //PERGAR OS HORARIOS DA API

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
        <CustomCalendar onDaySelect={handleDateChange}/>
      </View>

      <View style={styles.viewLogin}>
        <TouchableOpacity 
        style={styles.button}
        onPress={abrirModal}>
          <Text style={styles.textButton}>ESCOLHER HORÁRIO</Text>
        </TouchableOpacity>

      </View>
      
       {/* Aqui abre a tela de seleção de hora */}
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
              //onPress={confirmarAgendamento}
              disabled={!horarioSelecionado}>
              <Text style={styles.textButton}>Confirmar Agendamento</Text>
              </TouchableOpacity>

        </View>
        
        </Modal>
        
        {/* Fim do modal de seleção de hora  */}
        
        
        {/* Novo Modal */}
        <Modal
          visible={confirmModalVisible}
          transparent={true}
          animationType='slide'>

          <TouchableWithoutFeedback
            onPress={() => setConfirmModalVisible(false)}>
            <View style={styles.overlay}/>
          </TouchableWithoutFeedback>

          <View style={styles.viewModal}>
            <Text>Nome: {username}</Text>
            <Text>Celular: {cell}</Text>
            <Text>Horário: {horarioSelecionado}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // Aqui você pode adicionar o código para confirmar o agendamento
                setConfirmModalVisible(false);


                // Mandar para API
                criarAgendamento(dataSelecionada.dateString,horarioSelecionado +":00");

                confirmarAgendamento();



              }}>
              <Text style={styles.textButton}>Confirmar Agendamento</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setConfirmModalVisible(false)}>
              <Text style={styles.textButton}>Editar Informações</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {/* Fim do modal de confirmação */}

        </View>
        

  {/* Fim */}
  </>
  );
  }
export default Agendamento;


  