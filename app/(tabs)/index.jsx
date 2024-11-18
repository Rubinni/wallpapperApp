import { TouchableOpacity, Modal, Image, Pressable, ScrollView, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'



const App = () => {

  const [searchQuery, setSearchQuery] = useState('') // State for search query
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const images = [
    { id: '1', url: 'https://picsum.photos/id/237/200/200' },
    { id: '2', url: 'https://picsum.photos/id/238/200/200' },
    { id: '3', url: 'https://picsum.photos/id/239/200/200' },
    { id: '4', url: 'https://picsum.photos/id/240/200/200' },
    { id: '5', url: 'https://picsum.photos/id/241/200/200' },
    { id: '6', url: 'https://picsum.photos/id/242/200/200' },
  ]
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        onPress={() => {
          setSelectedImage(item.url)
          setModalVisible(true)
        }}
      >
        <Image
          source={{ uri: item.url }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.fullImage}
            />
          )}
        </View>
      </Modal>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search...'
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={() => {
          console.log('Button Pressed')
        }}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsHorizontalScrollIndicator={false}
      />

    </View>

  )
}



export default App

const styles = StyleSheet.create({

  container: {
    marginTop: 80,
  },

  text: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '200',
    textAlign: 'center',
    //View Style

    backgroundColor: 'steelblue',
    borderRadius: 12,
    padding: 20,

  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0056B3',
    opacity: 0.8,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1, // Square aspect ratio (to make it square)
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
})