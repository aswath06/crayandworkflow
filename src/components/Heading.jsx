import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Lefticons1 from '../assets/icons/LeftIcon';
import { useNavigation } from '@react-navigation/native';

export default function Heading({ title }) { 
  const navigation = useNavigation(); 

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <Lefticons1 />
      </TouchableOpacity>
      <Text style={styles.headingText}>{title}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: '#f0f3f6',
  },
  headingText: {
    paddingLeft: 20,
    fontSize: 18,
    letterSpacing: 1,
    color: 'black',
    fontFamily: "Inter_18pt-ExtraBold",
  },
});
