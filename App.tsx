import { StatusBar } from 'expo-status-bar';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'

export default function App() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
    /* Pressable-komponentti, jota painamalla modal aukeaa */
    <View style={styles.container}>
      <Pressable style={styles.openButton} onPress={()=> setModalVisible(true)}>
        <Text style={styles.buttonText}>Show modal message</Text>
      </Pressable>

      {/* modal komponentti */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            

            {/* Pressable-komponentti, jota painamalla modal sulkeutuu */}
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
              >
              <Text style={styles.closeButtonText}>Close modal</Text>
              </Pressable>
          </View>
        </View>
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

  openButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,

  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Himmentää taustaa hieman
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
