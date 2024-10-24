import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Chat({ userImage, userName, chatText, timeAgo }) {
  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
        <Text style={styles.chatText}>
          {chatText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingRight: 60,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
    minWidth: 60,
    textAlign: 'right',
  },
  chatText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
