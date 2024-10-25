import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Folder({ folderName, documentCount, style }) {
  const navigation = useNavigation(); // Access navigation

  const handlePress = () => {
    navigation.navigate('Filepage'); // Navigate to FilePage on press
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style]}>
      <Image 
        source={require('../assets/images/folder.png')}
        style={styles.image}
      />
      <Text style={styles.folderText}>{folderName}</Text>
      <Text style={styles.documentsText}>{documentCount}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: "47%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  folderText: {
    fontSize: 12,
    fontFamily: "NotoSans_ExtraCondensed-ExtraBold",
    color: 'black',
  },
  documentsText: {
    fontSize: 12,
    color: '#4E585E',
    marginTop: 5,
    fontFamily: "NotoSans-Regular",
  },
});
