import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Tickicon from '../assets/icons/Tick';
import Header from './TextWithNumber';

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

const Checkbox = () => {
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const labels = [
    'Creating IA for project management',
    'Flow chart ideation',
    'UI layout Setup',
    'Basic UI components',
  ];

  const handleToggle = index => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Check List"
        count={4}
        headerFontSize={14}
        countFontSize={14}
      />
      {checkedItems.map((isChecked, index) => (
        <View
          key={index}
          style={[
            index === checkedItems.length - 1 && styles.lastCheckbox,
            index === 0 && styles.firstCheckbox,
          ]}>
          <CustomCheckbox
            label={labels[index]}
            isChecked={isChecked}
            onToggle={() => handleToggle(index)}
          />
          {index < checkedItems.length - 1 && (
            <View style={{marginVertical: 16}}>
              <View style={styles.separator} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    paddingBottom: 20,
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
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
  separator: {
    height: 1,
    backgroundColor: '#D9DBDD',
  },
  lastCheckbox: {
    marginBottom: 18,
  },
  firstCheckbox: {
    paddingTop: 20,
  },
});

export default Checkbox;
