import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Img from '../assets/favicon.png';

export default function ExampleItem(props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.cateName}</Text>
        <Image style={styles.image} source={Img} />
      </View>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 3 },
    elevation: 5,
  },
  title: {
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  image: {
    width: 64,
    height: 64,
  },
});
