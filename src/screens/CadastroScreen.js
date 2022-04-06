import react, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {  Image, ImageBackground, Pressable, Alert, TextInput } from "react-native";
import Checkbox from "../components/Checkbox";
import Radio from '../components/Radio';

const CadastroScreen = ({ navigation }) => {

    const [username, setUserName]=useState(null)
    const [nome, setNome]=useState(null)
    const [senha,setSenha]=useState(null)
    const [confirmSenha, setConfirmSenha]=useState(null)
    const [genero, setGenero] = useState(0)
    const [check, setCheck] = useState(0)
    const [email, setEmail] = useState(0)

    const handalert = () => {
        Alert.alert(
            "Sucesso" ,
            " Username: " + username + 
            "\n Nome completo: "+ nome +
            "\n Senha: " + senha +
            "\n Confirmar Senha: " + confirmSenha, 
            
            [
                {text:"Ok", onPress: () => console.log("OK Pressed")}
            ]
        )
    }


    return (
        <View style={styles.container} >
            <ImageBackground source={require('../../assets/fundo.png')} style={styles.imageBackground}>
                <Image source={require('../../assets/logo.png')} style={styles.image}/>
           
            <Text style={styles.textTitle}>Cadastrar</Text>
            
            <TextInput style={styles.input} 
            onChangeText={setUserName}
            value = {username}
            placeholder ='Username'
            placeholderTextColor={'white'}/>

            <TextInput style={styles.input} 
            onChangeText={setNome}
            value = {nome}
            placeholder ='Nome Completo'
            placeholderTextColor={'white'}/>

            <TextInput style={styles.input} 
            onChangeText={setSenha}
            value = {senha}
            placeholder ='Senha'
            placeholderTextColor={'white'}/>

            <TextInput style={styles.input} 
            onChangeText={setConfirmSenha}
            value = {confirmSenha}
            placeholder ='Confirmar Senha'
            placeholderTextColor={'white'}/>

        <View style={styles.checks}>
            <View>
            <Text style={styles.textCheck}>Sexo: </Text>
            <Radio 
            selected={genero}
            options={['Masculino', 'Feminino']} 
            onChanceSelect={(opt, i) => setGenero(i)}/>
            </View>
            
            <Checkbox
            selected={check}
            values={['Li e concordo com o termo de uso']}
            onChanceSelect={() => check == 1 ? setCheck(0) : setCheck(1)}/>

            <Checkbox
            selected={email}
            values={['Aceito receber emails']}
            onChanceSelect={() => email == 1 ? setEmail(0) : setEmail(1)}/>

        </View>

            <Pressable style={styles.button} onPress={handalert} >
                <Text style={styles.text}>CADASTRAR</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.replace('Login')}>
                <Text style={styles.text}>VOLTAR</Text>
            </Pressable>

            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
       
    },
    image: {
        width: 100,
        padding: 40,
        resizeMode: 'contain',

    },
    textTitle: {
        margin: 30,
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white'
    },
    text: {
        color: 'white'
    },
    input: {
        borderRadius: 2,
        backgroundColor: "#454345",
        opacity: 0.7,
        fontWeight: 'bold',
        width: 350,
        height: 50,
        paddingLeft: 10,
        margin: 5,
    },
    button: {
        margin: 10,
        marginTop: 10,
        backgroundColor: '#ee125a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 350,
        height: 40,
    },
    checks: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    textCheck: {
        fontSize: 18, 
        color: 'white'
    }
  });

  export default CadastroScreen;
