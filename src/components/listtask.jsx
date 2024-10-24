import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Righticon1 from '../assets/icons/righticon';

export default function Listtask({ title, id, date, status, backgroundColor, textColor }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wireframeContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.idDateSection}>
            <Text style={styles.idText}>ID: {id}</Text>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={[styles.statusContainer, { backgroundColor: backgroundColor || '#ffdad3' }]}>
            <Text style={[styles.statusText, { color: textColor || 'red' }]}>{status}</Text>
          </View>
          <View>
            <Righticon1 style={styles.icon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 10, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60, 
  },
  container1: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  wireframeContainer: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color:"#4E585E",
    marginBottom: 3,
    fontFamily:"NotoSans-SemiBold",
    
  },
  idDateSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    fontSize: 12,
    color: '#6A7175',
    marginRight: 1,
    fontFamily:"NotoSans-SemiBold",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#6A7175',
    marginHorizontal: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#6A7175',
    marginRight: 10,
    fontFamily:"NotoSans-SemiBold",
  },
  statusContainer: {
    borderRadius: 5,
    padding: 5, 
    height: 32, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12, 
    marginVertical: 1,
    letterSpacing:1,
    paddingHorizontal:2,
    fontFamily:'NotoSans-Regular'
  },
  icon: {
    marginLeft: 0, 
  },
});
