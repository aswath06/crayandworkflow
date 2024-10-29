import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';

export default function Files({ imageSource, title, createdDate }) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}> 
          <Image 
            source={imageSource} 
            style={styles.image} 
          />
        </View>
        <View style={styles.textContainer}> 
          <Text style={styles.text}>{title}</Text>  
          <Text style={styles.createdOnText}>Created on {createdDate}</Text>  
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 7,
  },
  image: {
    width: 32,
    height: 32,
  },
  textContainer: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
    fontFamily: "NotoSans-SemiBold",
  },
  createdOnText: {
    marginTop: 2,
    fontSize: 12,
    color: '#4E585E',
    marginLeft: 10,
    fontFamily: "NotoSans-Regular",
  },
});
