import React, { useState, useCallback, useRef,  } from 'react';
import { FlatList, Text, Button, View, RefreshControl, Animated, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import getCliente from '../services/getCliente';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getAgendamentos from '../services/getAgendamentosById';
import cancelarAgendamento from '../services/cancelarAgendamento';
import styles  from './style';
import { recuperarToken } from '../services/gravarToken';

const ListaDeHorariosAgendados = () => {
  const [data, setData] = useState([]);
  const [atualizando, setAtualizando] = useState(false);
  const rowRefs = {};
  const position = useRef(new Animated.Value(-100)).current; // Inicia a 100 pixels acima

  const resgatarAgendamentos = async () => {
    await recuperarToken();
    const id = await AsyncStorage.getItem('idCliente');
    const agendamentos = await getAgendamentos(id);
    setData(agendamentos);
  };

  const onRefresh = useCallback(() => {
    setAtualizando(true);
    resgatarAgendamentos().then(() => setAtualizando(false));
  }, []);

  //Sempre que a tela entrar em foco, resgata os agendamentos
  useFocusEffect(
    useCallback(() => {
      // Sempre que entrar na tela, fazer animação
      position.setValue(-100);
      resgatarAgendamentos();
      Animated.timing(position, {
        toValue: 0, // Move para a posição original
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [])
  );

  // Config de animação 
  const deleteRow = (id) => {
    Animated.timing(rowRefs[id], {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      cancelarAgendamento(id);
      setData(data.filter((item) => item.age_Id !== id));
    });
  };

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Adiciona 1 porque os meses começam do 0
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
  

  return (
    <Animated.View style={{ flex: 1, backgroundColor: '#181818',width:'100%',transform: [{ translateY: position }] }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.age_Id.toString()}
        renderItem={({ item }) => {
          if (!rowRefs[item.age_Id]) {
            rowRefs[item.age_Id] = new Animated.Value(1);
          }

          return (
            <Animated.View styles={{ opacity: rowRefs[item.age_Id] }}>
              <Text style={styles.text}>{`Data: ${formatarData(item.age_Date.slice(0 ,10))} - Horário: ${item.age_Time.slice(0,5)}`}</Text>
              <TouchableOpacity style={styles.button} title="Cancelar" onPress={() => deleteRow(item.age_Id)}>
                <Text style={styles.text}>Cancelar Agendamento</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
        refreshControl={
          <RefreshControl refreshing={atualizando} onRefresh={onRefresh} />
        }
      />
    </Animated.View>
  );
};

export default ListaDeHorariosAgendados;
