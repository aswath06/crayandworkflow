import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Heading from '../components/heading';
import Files from '../components/files';


export default function Filepage() {
  const documents = [
    { title: 'File 1', createdDate: '12/13/23' },
    { title: 'File 2', createdDate: '12/14/23' },
    { title: 'File 3', createdDate: '12/15/23' },
    { title: 'File 4', createdDate: '12/13/23' },

  ];

  return (
    <View style={styles.container}>
      <Heading title="Folder 01" />
      <Text style={styles.folderLabel}>
        {documents.length} Documents
      </Text>
      {documents.map((document, index) => (
        <Files
          key={index}
          imageSource={require('../assets/images/files.png')} 
          title={document.title}
          createdDate={document.createdDate}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f3f6',
    flex: 1,
  },
  folderLabel: {
    fontSize: 16,
    marginVertical: 10,
    color: '#4E585E',
  },
});
