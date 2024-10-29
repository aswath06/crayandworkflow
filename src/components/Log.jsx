// src/components/Logexpense/Logexpense.jsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from './TestWithNumber';
import Addicon1 from '../assets/icons/addicon';
import ExpenseModal from './ExpenseModal';
import useExpenseStore from '../zustand/UseExpenseStore';

export default function Logexpense() {
  const { expenses, addExpense } = useExpenseStore();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('Current expenses:', expenses);
  }, [expenses]); 

  const handleAddIconClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmitExpense = (expense) => {
    addExpense(expense);
    console.log('Added expense:', expense); 
    console.log('Updated expenses:', [...expenses, expense]); 
    handleCloseModal();
  };

  const Separator = () => <View style={styles.separator} />;
  
  const NoDataComponent = () => (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>No data found</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          title="Log expense"
          count={expenses.length}
          headerFontSize={14}
          countFontSize={14}
        />
        <View style={styles.iconContainer} onTouchEnd={handleAddIconClick}>
          <Addicon1 />
        </View>
      </View>

      <ExpenseModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmitExpense} 
      />

      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseDetailsContainer}>
            <Text style={styles.expenseName}>{item.name}</Text>
            <View style={styles.dot} />
            <Text style={styles.expenseDate}>{item.date}</Text>
            <View style={styles.dot} />
            <Text style={styles.expenseAmount}>{item.amount} {item.currency}</Text>
          </View>
        )}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={NoDataComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here...
  container: {
    backgroundColor: 'white',
    padding: 15,
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
  separator: {
    height: 1,
    backgroundColor: '#D9DBDD',
    marginVertical: 16,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noDataText: {
    fontSize: 16,
    color: '#666',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  expenseName: {
    fontSize: 14,
    color: '#4E585E',
    fontFamily: 'Inter_18pt-SemiBold',
  },
  expenseDate: {
    fontSize: 12,
    color: '#6A7175',
    fontFamily: 'NotoSans-Regular',
  },
  expenseAmount: {
    fontSize: 12,
    color: '#6A7175',
    fontFamily: 'NotoSans-Regular',
  },
});
