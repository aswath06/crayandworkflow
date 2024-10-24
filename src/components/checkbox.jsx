import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Tickicon from '../assets/icons/Tick';

const CustomCheckbox = ({label, isChecked, onToggle}) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onToggle}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <Tickicon fill="white" />}
      </View>
      <Text style={styles.checkboxText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#0c356a',
  },
  checkboxText: {
    fontSize: 12,
    color: '#4E585E',
    fontFamily: 'NotoSans-Medium',
  },
});

export default CustomCheckbox;
