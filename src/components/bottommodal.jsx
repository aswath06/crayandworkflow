import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Closeicon from '../assets/icons/CloseIcon';
import Tickicon from '../assets/icons/Tick';

export default function BottomModal({visible, onClose, setSelectedStatus}) {
  const [selectedStatusLocal, setSelectedStatusLocal] = useState(''); // Local state

  const handleStatusPress = status => {
    setSelectedStatusLocal(status);
    setSelectedStatus(status);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalText}>Change Status</Text>
            <TouchableOpacity onPress={onClose}>
              <Closeicon />
            </TouchableOpacity>
          </View>

          {['All', 'Yet to Start', 'In-Progress', 'Completed'].map(status => (
            <TouchableOpacity
              key={status}
              onPress={() => handleStatusPress(status)}>
              <View
                style={[
                  styles.statusContainer,
                  selectedStatusLocal === status && styles.selectedStatus,
                ]}>
                <Text style={styles.statusText}>{status}</Text>
                {selectedStatusLocal === status && <Tickicon />}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  selectedStatus: {
    backgroundColor: '#c2befa',
  },
});
