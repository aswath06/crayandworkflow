import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Downarrowicon1 from '../assets/icons/DownIcon';
import Calendericon from '../assets/icons/Calender';
import Shareicon1 from '../assets/icons/ShareIcon';
import Radiobuttom1 from '../assets/icons/RadiuButton';

const ExpenseModal = ({visible, onClose, onSubmit}) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [currency, setCurrency] = useState('AED');
  const [category, setCategory] = useState('Education');
  const [isCurrencyDropdownVisible, setIsCurrencyDropdownVisible] =
    useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);

  const handleSubmit = () => {
    const expense = {
      name: expenseName,
      date: expenseDate,
      amount: expenseAmount,
      currency: currency,
      category: category,
    };
    onSubmit(expense);
    setExpenseName('');
    setExpenseDate('');
    setExpenseAmount('');
    setCurrency('AED');
    setCategory('Education');
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownVisible(!isCurrencyDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const handleCurrencySelect = selectedCurrency => {
    setCurrency(selectedCurrency);
    setIsCurrencyDropdownVisible(false);
  };

  const handleCategorySelect = selectedCategory => {
    setCategory(selectedCategory);
    setIsCategoryDropdownVisible(false);
  };

  const currencies = ['AED', 'INR', 'EUR'];
  const categories = ['Education', 'Food', 'Home', 'Hotels'];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Create Expense</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Expense Name</Text>
            <TextInput
              placeholder="Enter expense name"
              value={expenseName}
              onChangeText={setExpenseName}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.row}>
              <TextInput
                placeholder="Enter date"
                value={expenseDate}
                onChangeText={setExpenseDate}
                style={[styles.input, {flex: 1}]}
              />
              <TouchableOpacity>
                <Calendericon />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.amountcry}>
            <View style={[styles.inputContainer1, {zIndex: 2}]}>
              <Text style={styles.label}>Currency</Text>
              <TouchableOpacity
                onPress={toggleCurrencyDropdown}
                style={styles.row}>
                <TextInput
                  placeholder="Currency"
                  value={currency}
                  editable={false}
                  style={[styles.input, {flex: 1}]}
                />
                <Downarrowicon1 />
              </TouchableOpacity>
              {isCurrencyDropdownVisible && (
                <View style={styles.dropdown}>
                  <FlatList
                    data={currencies}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => handleCurrencySelect(item)}>
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>

            <View style={styles.inputContainer1}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                placeholder="Enter Amount"
                value={expenseAmount}
                onChangeText={setExpenseAmount}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          </View>

          <View style={[styles.inputContainer, {zIndex: 1}]}>
            <Text style={styles.label}>Category</Text>
            <TouchableOpacity
              onPress={toggleCategoryDropdown}
              style={styles.row}>
              <TextInput
                placeholder="Select Category"
                value={category}
                editable={false}
                style={[styles.input, {flex: 1}]}
              />
              <Downarrowicon1 />
            </TouchableOpacity>
            {isCategoryDropdownVisible && (
              <View style={styles.dropdown}>
                <FlatList
                  data={categories}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => handleCategorySelect(item)}>
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          <View style={styles.Radiobuttom}>
            <View>
              <Radiobuttom1 />
            </View>
            <View>
              <Text style={styles.Radiobuttomtext}>Billable</Text>
            </View>
          </View>

          <View style={styles.inputContainertextfeild}>
            <TextInput
              placeholder="Description"
              value={expenseDate}
              onChangeText={setExpenseDate}
              style={styles.input}
            />
          </View>

          <View style={styles.uploadfile}>
            <View style={styles.Shareicon1}>
              <Shareicon1 />
            </View>
            <View style={styles.uploadtext}>
              <Text>Upload Receipts</Text>
            </View>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}>
              <Text style={styles.buttonText1}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  Radiobuttom: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 7,
  },
  Radiobuttomtext: {
    color: 'black',
  },
  uploadfile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  Shareicon1: {
    backgroundColor: '#d7e3ff',
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  uploadtext: {
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountcry: {
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    width: '100%',
  },
  inputContainertextfeild: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 6,
    height: '10%',
    width: '100%',
  },
  inputContainer1: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 2,
    gap: 12,
    width: '48%',
    zIndex: 1,
  },
  input: {
    paddingLeft: 10,
    height: 40,
    borderWidth: 0,
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    width: '48%',
  },
  cancelButton: {
    borderColor: '#0C356A',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#0C356A',
    height: 48,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    zIndex: 1,
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    color: 'black',
  },
});

export default ExpenseModal;
