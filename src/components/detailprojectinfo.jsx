import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Downarrowicon1 from '../assets/icons/Downicon';

export default function DetailProjectInfoCard({status}) {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const navigateToWireframes = title => {
    navigation.navigate('Wireframes', {title, status});
  };

  const yetToStartContainer =
    status === 'Completed'
      ? styles.yetToStartContainer1
      : styles.yetToStartContainer2;
  const statusTextStyle =
    status === 'Completed' ? styles.completedText : styles.yetToStartText;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer1}>
        <View style={styles.headerContainer}>
          <Text style={styles.cardText}>Project Info</Text>
          <View style={styles.dot} />
          <Text style={styles.dateText}>09/12/24</Text>
        </View>
        <View style={yetToStartContainer}>
          <Text style={statusTextStyle}>{status}</Text>
          <Downarrowicon1 />
        </View>
      </View>

      <Text style={styles.descriptionText}>Description</Text>

      <Text
        style={styles.longText}
        numberOfLines={isExpanded ? undefined : 2}
        ellipsizeMode="tail">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati non provident.
      </Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={styles.seeMore}>
            {isExpanded ? 'See less' : 'See more'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.datesContainer}>
        <TouchableOpacity onPress={() => navigateToWireframes('Wireframes')}>
          <View style={styles.dateInfo}>
            <Text style={styles.statusText}>ID</Text>
            <Text style={styles.dateText}>ID 0213</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.dateInfo}>
          <Text style={styles.statusText}>Type</Text>
          <Text style={styles.dateText}>General</Text>
        </View>
        <View style={styles.dateInfo}>
          <Text style={styles.statusText}>Priority</Text>
          <Text style={styles.dateText}>Medium</Text>
        </View>
      </View>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Inter_18pt-ExtraBold',
    color: '#333',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#4E585E',
    marginHorizontal: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#4E585E',
  },
  yetToStartContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c356a',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  yetToStartContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0c356a',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#d0f5d0',
    marginLeft: 10,
  },
  yetToStartText: {
    fontSize: 14,
    color: '#0c356a',
  },
  completedText: {
    fontSize: 14,
    color: 'green',
  },
  descriptionText: {
    fontSize: 14,
    color: '#6A7175',
    marginTop: 10,
    fontFamily: 'NotoSans-Regular',
  },
  longText: {
    fontSize: 14,
    color: '#4E585E',
    marginTop: 5,
    fontFamily: 'NotoSans-Medium',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  seeMore: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 14,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateInfo: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'NotoSans-Medium',
  },
  statusText: {
    fontSize: 14,
    color: '#8f9598',
    fontFamily: 'NotoSans-Medium',
  },
});
