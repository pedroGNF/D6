import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, Modal, Pressable} from 'react-native';

const App = () => {

  function numeroRandomico() { 
    return Math.floor( Math.random()* 6 + 1 )
  }

  const randomico = numeroRandomico()
  const [numero, setNumero] = useState("Valor:❓");
  const [fecharModal, setFecharModal] = useState(false);

  return (
    <SafeAreaView style={styles.tela}>

    <View style={styles.tituloAppView}>
     <Text style={styles.tituloAppText}>App que gera um número{"\n"}
      randômico de 1 a 6 (D6)</Text>
    </View>

     <View style={styles.centeredView}> 
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={fecharModal}
        onRequestClose={() => {fecharModal}}
        >
        <View style={styles.centeredView}>

          <View style={styles.modal}>

            <Text style={styles.tituloModal}>Aperte no dado para D6:</Text>

           <View style={styles.valor}>
            <Button 
             style={styles.rodarDado}
             onPress={() => setNumero("Valor: "+ randomico)} 
             title="🎲"
            />
              <Text style={styles.valor}>{numero}</Text>
            </View>

            <Button
              style={[styles.buttonClose]}
              onPress={() => setFecharModal(!fecharModal) }
              title="❌"/> 

          </View>

         </View>

      </Modal>

      <Pressable style={[styles.button, styles.começar]} onPress={() => setFecharModal(true)}>
        <Text style={styles.textStyle}>COMEÇAR</Text>
      </Pressable>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'steelblue',
  },
  scrollView: {
    flex:0.3,
  },
  botaoIncrementar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
  },
  botaoReduzir: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 15,
  },
  valor: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    fontSize: 20,
    marginBottom: 15,
    color: 'green',
  },
  tituloAppView: {
    alignItems: 'center',
    backgroundColor: 'firebrick',
    borderRadius: 20,
    marginTop: 40,
  },
  tituloAppText: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  modal: {
    margin: 20,
    backgroundColor: 'gold',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    shadowOpacity: 0.3,
    padding: 10,
    elevation: 2,
  },
  começar: {
    backgroundColor: 'limegreen',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 110,
    height: 70,
    marginBottom: 200,
  },
  textStyle: {
    color: 'beige',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fechar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  tituloModal: {
    color: 'indigo',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },
  rodarDado: {
    marginBottom: 3,
  },
  buttonClose: {
    borderRadius: 12,
    shadowOpacity: 0.3,
    padding: 1,
    marginTop: 100,
  },
});

export default App;