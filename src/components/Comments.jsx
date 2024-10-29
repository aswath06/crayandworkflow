// Comments.js
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Chat from './Chat';
import Senticon from '../assets/icons/Sent';
import {addChat} from '../redux/ChatSlice';

export default function Comments() {
  const dispatch = useDispatch();
  const chatList = useSelector(state => state.chat.chatList);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newChat = {
        userImage: require('../assets/images/users/user1.jpeg'),
        userName: 'Aswath',
        chatText: inputText,
        timeAgo: '12 days ago',
      };

      dispatch(addChat(newChat));
      setInputText('');
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
    backgroundColor: '#f0f3f6',
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
