import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Personinfo({ name, email, imageSource }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.profileImage} />
      <View>
        <Text style={styles.nameText}>{name}</Text> 
        <Text style={styles.emailText}>{email}</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: "#D9DBDD",
    borderRadius: 12,
    width: "92%",
    marginBottom: 12,
    marginHorizontal:16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily:'NotoSans_Condensed-SemiBold'
  },
  emailText: {
    fontSize: 12,
    color: '#888',
    fontFamily:"NotoSans_Condensed-Regular"
  },
});
