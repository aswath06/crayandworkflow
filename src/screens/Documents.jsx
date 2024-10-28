import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Heading from '../components/Heading';
import Folder from '../components/Folder';
import Files from '../components/Files';

export default function DocumentPage() {
  const folders = [
    {name: 'Folder 01', documentCount: '04 documents'},
    {name: 'Folder 02', documentCount: '02 documents'},
    {name: 'Folder 03', documentCount: '04 documents'},
    {name: 'Folder 04', documentCount: '02 documents'},
  ];

  const documents = [
    {title: 'Files', createdDate: '12/13/23'},
    {title: 'Files', createdDate: '12/13/23'},
    {title: 'Files', createdDate: '12/13/23'},
  ];

  return (
    <View style={styles.container}>
      <Heading title="Documents" />
      <Text style={styles.folderLabel}>{folders.length} Folders</Text>
      <View style={styles.folderContainer}>
        {folders.map((folder, index) => (
          <Folder
            key={index}
            folderName={folder.name}
            documentCount={folder.documentCount}
          />
        ))}
      </View>
      <Text style={styles.folderLabel}>{documents.length} Documents</Text>
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
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f3f6',
  },
  folderLabel: {
    fontSize: 12,
    fontFamily: 'NotoSans-SemiBold',
    marginBottom: 10,
  },
  folderContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});
