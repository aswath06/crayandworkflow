import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './TextWithNumber';
import Righticon1 from '../assets/icons/Righticon';

export default function Documents() {
  return (
    <View style={styles.cardContainer}>
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
    </View>
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
