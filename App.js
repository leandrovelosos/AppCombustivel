import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, Modal } from "react-native";

export default function App() {
  const [modalVsible, setModalVisible] = useState(false);
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  function resposta() {

    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina)) {

      const resultado = (precoAlcool / precoGasolina) < 0.7 ? "Álcool" : "Gasolina";
      setResultado(resultado);
      setModalVisible(true)

    } else {

      alert('Erro, Insira valores válidos')

    }


  }

  function voltar() {
    setModalVisible(false);
    setGasolina('');
    setAlcool('');
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
          value={alcool}
          onChangeText={setAlcool}
        />

      </View>

      <View style={styles.areaTextInput}>

        <Text style={styles.textoInput}>Gasolina (preço por litro):</Text>

        <TextInput style={styles.input}
          keyboardType="numeric"
          value={gasolina}
          onChangeText={setGasolina}
        />

      </View>

      <View style={styles.areaBtnCalcular}>

        <TouchableOpacity style={styles.btnCalcular}
          onPress={resposta}
        >
          <Text style={styles.txtCalcular} >Calcular</Text>
        </TouchableOpacity>

      </View>

      <Modal
        transparent={true}
        style={styles.modal}
        visible={modalVsible}
        animationType="slide">

        <View style={styles.containeroModal}>

          <View style={styles.containerTituloModal}>

            <Image style={styles.logo} source={require('./src/img/gas.png')} />

            <Text style={styles.textSubTituloModal}>Compensa usar {resultado}</Text>
            
          </View>

          <View style={styles.resultado}>

            <Text style={styles.resultadoTitulo}>Com os preços:</Text>
            <Text style={styles.resultadoValor}>Ácool: R$ {alcool}</Text>
            <Text style={styles.resultadoValor}>Gasolina: R$ {gasolina}</Text>

          </View>

          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btnCalcularNovamente}
              onPressIn={voltar}
            >
              <Text style={styles.btnTxt}>
                Calcular novamente
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
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
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSubTituloModal: {
    color: '#30EF5A',
    fontSize: 35,
    fontWeight: 'bold',
  },
  containeroModal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },
  resultado: {
    alignItems: "center",
    justifyContent: "center",

  },
  resultadoTitulo: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "5%",

  },
  resultadoValor: {
    color: '#FFF',
    fontSize: 25,
    marginTop: "2%"
  },
  btnArea: {
    alignItems: "center",
    justifyContent: "center"
  },
  btnCalcularNovamente: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EF4130',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 5,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    marginTop: "5%"
  },
  btnTxt: {
    color: '#EF4130',
    fontSize: 25
  },
  containerTituloModal: {
    alignItems: "center",
    justifyContent: "center"
  }


})