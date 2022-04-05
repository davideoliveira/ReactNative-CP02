import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, ImageBackground, Pressable, TextInput } from "react-native";

const LoginScreen = () => {
    return (
        <View style={styles.container} >
            <ImageBackground source={require('../../assets/fundo.png')} style={styles.imageBackground}>
                <Image source={require('../../assets/logo.png')} style={styles.image}/>
            
            <Text style={styles.textTitle}>Entrar</Text>
            
            <TextInput style={styles.input} 
            placeholder ='UserName'/>

            <TextInput style={styles.input} 
            placeholder ='Senha'/>

            <Pressable style={styles.button}>
                <Text style={styles.text}>ENTRAR</Text>
            </Pressable>

            </ImageBackground>
        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
       
    },
    image: {
        width: 200,
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
        backgroundColor: '#c0c0c0',
        opacity: 0.2,
        width: 350,
        height: 50,
        paddingLeft: 10,
        margin: 5,
    },
    button: {
        margin: 10,
        backgroundColor: '#ee125a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 350,
        height: 40,
    }
  });