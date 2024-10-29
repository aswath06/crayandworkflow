import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Personinfo from './ProjectInfo';

const member1 = require('../assets/images/users/user1.jpeg');
const member2 = require('../assets/images/users/user2.jpeg');
const MemberCount = 3;

export default function Members({title}) {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
        style={{justifyContent: 'center'}}>
        <View>
          <Text style={styles.cardText}>{title}</Text>
        </View>
        <View style={styles.membersContainer}>
          <Image source={member1} style={styles.memberImage1} />
          <Image source={member2} style={styles.memberImage2} />
          <Text style={styles.number}>+{MemberCount}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Members</Text>
            <Text style={styles.modalText}>{MemberCount} Members</Text>
            <Personinfo
              name="John Doe"
              email="john.doe@gmail.com"
              imageSource={member1}
            />
            <Personinfo
              name="Jane Smith"
              email="jane.smith@gmail.com"
              imageSource={member2}
            />
            <View style={styles.separator} />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 15,
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
    alignContent: 'center',
  },
  number: {
    backgroundColor: '#f0f3f6',
    padding: 10,
    borderRadius: 50,
    fontSize: 15,
    fontWeight: '800',
    position: 'absolute',
    top: -33,
    right: 0,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#02111A',
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Inter_18pt-ExtraBold',
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    // marginBottom: 10,
    justifyContent: 'center',
    marginTop: 2,
  },
  membersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  memberImage1: {
    width: 40,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ffffff',
    top: -33,
    right: 60,
  },
  memberImage2: {
    width: 40,
    height: 40,
    borderRadius: 25,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ffffff',
    top: -33,
    right: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'flex-start',
  },
  modalTitle: {
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
    color: 'black',
    fontFamily: 'NotoSans_Condensed-SemiBold',
  },
  modalText: {
    paddingTop: 2,
    paddingLeft: 16,
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
    fontFamily: 'NotoSans_Condensed-SemiBold',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9DBDD',
    marginVertical: 16,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0C356A',
    marginBottom: 10,
    marginLeft: 16,
  },
  closeButtonText: {
    color: '#2a4e7d',
    fontFamily: 'Inter_18pt-ExtraBold',
  },
});
