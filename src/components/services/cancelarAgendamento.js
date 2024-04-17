import AsyncStorage from '@react-native-async-storage/async-storage';

const cancelarAgendamento = async (id) => {
  const token = await AsyncStorage.getItem('TokenDoUsuario');
  try {
    let response = await fetch(`https://cortapramim.azurewebsites.net/api/Agendamento/delete/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });

    if (response.ok) {
      console.log(`Agendamento ${id} cancelado`);
      return true;
    } else {
      console.error('Erro ao cancelar o agendamento:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Erro:', error);
    return false;
  }
};

export default cancelarAgendamento;
