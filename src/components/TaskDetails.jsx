import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from './TestWithNumber';
import Downarrowicon1 from '../assets/icons/DownIcon';
import Listtask from './ListTasks';
import BottomModal from './BottomModal';

export default function Taskdetails() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Header
          title="Tasks details"
          count={5}
          headerFontSize={14}
          countFontSize={14}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.rowContainer}>
            <Text style={styles.descriptionText}>{selectedStatus}</Text>
            <Downarrowicon1 />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Wireframes', {
            title: 'Wireframes',
            status: 'Yet to Start',
          })
        }>
        <Listtask
          title="Wireframes"
          id="0214"
          date="05/09/23"
          status="Yet to Start"
          backgroundColor="#FFDAD3"
          textColor="#DF3813"
        />
      </TouchableOpacity>

      <View style={styles.lines}></View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Wireframes', {
            title: 'Inspection',
            status: 'In-Progress',
          })
        }>
        <Listtask
          title="Inspection"
          id="0212"
          date="04/09/23"
          status="In-Progress"
          backgroundColor="#FFDDB8"
          textColor="#D17800"
        />
      </TouchableOpacity>

      <View style={styles.lines}></View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Wireframes', {
            title: 'Base Layout',
            status: 'Completed',
          })
        }>
        <Listtask
          title="Base layout"
          id="0201"
          date="02/09/23"
          status="Completed"
          backgroundColor="#CBF2E0"
          textColor="#008545"
        />
      </TouchableOpacity>

      <BottomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        setSelectedStatus={setSelectedStatus} // Pass the function to update status
      />
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  lines: {
    height: 1,
    backgroundColor: '#D9DBDD',
    marginVertical: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#0c356a',
    marginRight: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c356a',
    borderRadius: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
});
