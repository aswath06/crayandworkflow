import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Ensure you have navigation setup
import Header from './textwithnumber';
import Righticon1 from '../assets/icons/righticon';

export default function Documents() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      onPress={() => navigation.navigate('DocumentPage')} // Replace 'DocumentPage' with your document page route name
    >
      <View>
        <Header
          title="Documents"
          count={26}
          headerFontSize={14}
          countFontSize={14}
        />
      </View>
      <View>
        <Righticon1 />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
  },
});
