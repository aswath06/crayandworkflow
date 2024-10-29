import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const assetImage = require('../assets/images/jcb.jpg');

export default function Assets() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Assets</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.assetsGroup}>
          <View style={styles.assetContainer}>
            <Image source={assetImage} style={styles.assetImage} />
            <Text style={styles.assetLabel}>JCB</Text> 
          </View>

          <View style={styles.assetContainer}>
            <Image source={assetImage} style={styles.assetImage} />
            <Text style={styles.assetLabel}>JCB</Text> 
          </View>

          <View style={styles.assetContainer}>
            <Image source={assetImage} style={styles.assetImage} />
            <Text style={styles.assetLabel}>JCB</Text> 
          </View>

          <View style={styles.assetContainer}>
            <Image source={assetImage} style={styles.assetImage} />
            <Text style={styles.assetLabel}>JCB</Text> 
          </View>

          <View style={styles.assetContainer}>
            <Image source={assetImage} style={styles.assetImage} />
            <Text style={styles.assetLabel}>JCB</Text> 
          </View>
        </View>
      </ScrollView>
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
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontFamily:"Inter_18pt-ExtraBold",
    color: '#333',
    alignSelf: 'flex-start',
  },
  assetsGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  assetContainer: {
    alignItems: 'flex-start',
    marginRight: 8,
  },
  assetImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  assetLabel: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
    marginTop: 5,
  },
});
