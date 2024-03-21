import { Alert } from 'react-native';

export function validarCampos(login, senha, limparSenha) {
    // Verifica se o login ou a senha estão vazios
    if (!login || !senha) {
        Alert.alert(
            "",
            "Por favor, preencha todos os campos",
            [
                { text: "OK", onPress: limparSenha }
            ],
            { cancelable: true, onDismiss: limparSenha }
        );
        return false;
    }

    // Verifica se o login é um email válido
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(login)) {
        Alert.alert(
            "",
            "Por favor, insira um email válido",
            [
                { text: "OK", onPress: limparSenha }
            ],
            { cancelable: true, onDismiss: limparSenha }
        );
        return false;
    }

    return true;
}
