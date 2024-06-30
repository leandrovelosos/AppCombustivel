import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";

export default function App() {

  function resposta(){
    
  }
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.containerTitulo}>

        <Image style={styles.logo} source={require('./src/img/logo.png')} />

        <Text style={styles.textTitulo}>Qual melhor opção?</Text>
      </View>

      <View style={styles.areaTextInput}>
        <Text style={styles.textoInput}>Ácool (preço por litro):</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaTextInput}>
        <Text style={styles.textoInput}>Gasolina (preço por litro):</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.areaBtnCalcular}>
        <TouchableOpacity style={styles.btnCalcular}
         onPress={()=> resposta()}
        >
          <Text style={styles.txtCalcular} >Calcular</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1
  },
  containerTitulo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: '10%',
    marginBottom: '8%'
  },
  logo: {
    height: 250,
    width: 250,
    marginBottom: '10%'
  },
  textTitulo: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textoInput: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 0,
    marginBottom: '3%',
    marginTop: '3%'
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 0,
    fontSize: 22,
    padding: 10,
  },
  areaTextInput: {
    marginLeft: '5%',
    marginRight: '5%'
  },
  areaBtnCalcular: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '8%'
  },
  btnCalcular: {
    backgroundColor: '#EF4130',
    borderRadius: 5,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },
  txtCalcular: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  }
})