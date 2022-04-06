import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, ImageBackground, Pressable, TextInput } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.imageBackground}
      >
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <Text style={styles.textTitle}>Entrar</Text>

        <TextInput style={[styles.input]} placeholder="Username" placeholderTextColor={'white'}/>

        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={'white'}/>

        <Pressable style={styles.button}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>

        <View style={styles.buttons}>
          <Pressable
            onPress={() => navigation.replace("Cadastrar")}
          >
            <Text style={styles.text}>Cadastrar</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.text}>Esqueceu a senha</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 200,
    padding: 40,
    resizeMode: "contain",
  },
  textTitle: {
    margin: 30,
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
  text: {
    color: "white",
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
    backgroundColor: "#ee125a",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 350,
    height: 40,
  },
  buttons: {
      display: 'flex',
      marginTop: 10,
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row'
  }
});
