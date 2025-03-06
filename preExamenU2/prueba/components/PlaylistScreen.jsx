import React, { useState } from 'react';
import { View, Image, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';

const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <Heart size={30} color={isPressed ? 'green' : 'white'} fill={isPressed ? 'green' : 'none'} />
    </TouchableOpacity>
  );
};

const images = {
  img1: require('../assets/img1.jpg'),
  img2: require('../assets/img2.jpg'),
  img3: require('../assets/img3.png'),
  img4: require('../assets/img4.jpg'),
};

const data = [
  { id: '1', image: images.img1, title: 'Elemento 1' },
  { id: '2', image: images.img2, title: 'Elemento 2' },
  { id: '3', image: images.img3, title: 'Elemento 3' },
  { id: '4', image: images.img4, title: 'Elemento 4' }
];


export const PlaylistScreen = ({ navigation }) => {
  const { height } = Dimensions.get('window'); 

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Details', { song: item })}  // Correcto uso de 'navigation'
    >
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <Text style={styles.itemText}>{item.title}</Text>
      <HeartButton />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Image
            source={require('../assets/theweeknd.jpg')}
            style={[styles.image, { height: (2 / 5) * height }]}
            resizeMode="cover"
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <Text style={styles.textinside}>WEEKEND PLAYLIST</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        navigation={navigation} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    flex: 1,
  },
  textinside: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
