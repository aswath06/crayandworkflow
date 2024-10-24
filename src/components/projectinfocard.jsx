import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ProgressBar from './LinearProgress';

export default function ProjectInfoCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>Project Info</Text>
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
        <View style={styles.dateInfo}>
          <Text style={styles.statusText}>Start Date</Text>
          <Text style={styles.dateText}>09/10/23</Text>
        </View>
        <View style={styles.dateInfo}>
          <Text style={styles.statusText}>End Date</Text>
          <Text style={styles.dateText}>04/12/23</Text>
        </View>
        <View style={styles.dateInfo1}>
          <Text style={styles.statusText}>Status</Text>
          <ProgressBar progress={78} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 16,
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
    width:"95%",
    justifyContent:"center",
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Inter_18pt-ExtraBold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
    fontFamily: 'NotoSans-Medium',
  },
  longText: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
    fontFamily: 'NotoSans-Medium',
    marginRight: 30,
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
    marginRight: 30,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateInfo: {
    flex: 1,
    alignItems: 'flex-start',
    color: '#6A7175',
  },
  dateInfo1: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 30,
  },
  statusText: {
    fontSize: 14,
    color: '#6A7175',
    marginRight: 5,
    paddingRight: 10,
    textAlign: 'left',
    fontFamily: 'NotoSans-Medium',
    marginTop:4,
  },
  dateText: {
    fontSize: 14,
    color: '#4E585E',
    fontFamily: 'NotoSans_Condensed-SemiBold',
  },
  progressContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
});
