import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Chat from './chat';
import Senticon from '../assets/icons/sent';

export default function Comments() {
  const [userImages] = useState([
    require('../assets/images/users/user1.jpeg'),
  ]);
  const [chatList, setChatList] = useState([
    { userImage: userImages[0], userName: "Hamza", chatText: "Harun quidem rerum facilis est et expedita distinctio, Nam libero tempore, cum nobis.", timeAgo: "1 day ago" },
    { userImage: userImages[0], userName: "Mohammed", chatText: "Sure, Thanks", timeAgo: "21 hrs ago" }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newChat = {
        userImage: userImages[0], // You can set the image source
        userName: 'Aswath', // Set the user name to "Aswath"
        chatText: inputText, // The entered text
        timeAgo: '12 days ago' // Fixed time as "12 days ago"
      };

      setChatList([...chatList, newChat]);
      setInputText(''); // Clear the input after sending
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Comments</Text>
      
      <ScrollView>
        {chatList.map((chat, index) => (
          <Chat
            key={index}
            userImage={chat.userImage}
            userName={chat.userName}
            chatText={chat.chatText}
            timeAgo={chat.timeAgo}
          />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment"
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSend}>
          <Senticon style={styles.icon} />
        </TouchableOpacity>
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
    position: 'relative',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: "#f0f3f6",
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#333',
  },
  icon: {
    marginLeft: 10,
  },
});
