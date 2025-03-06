import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const PlayerScreen = ({ route }) => {
  const { song } = route.params || {};  

  if (!song) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No song data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={song.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{song.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
  },
});
