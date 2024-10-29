import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      
      <Text style={styles.percentageText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarBackground: {
    height: 8,
    width: 90,
    backgroundColor: 'rgb(203, 242, 224)', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'rgb(0, 133, 69)', 
    borderRadius: 5,
  },
  percentageText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(78, 88, 94)', 
  },
});

export default ProgressBar;
