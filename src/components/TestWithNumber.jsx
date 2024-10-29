import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({
  title,
  count,
  headerFontSize, 
  countFontSize = 16, 
  backgroundColor = '#d7e3ff', 
  countWrapperSize = 30, 
}) => {
  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerText, { fontSize: headerFontSize, color: 'black', fontFamily: 'Inter_18pt-ExtraBold' }]}>
        {title}
      </Text>
      <View
        style={[
          styles.countWrapper,
          {
            backgroundColor,
            width: countWrapperSize, 
            height: countWrapperSize, 
            borderRadius: countWrapperSize / 2, 
          },
        ]}
      >
        <Text style={[styles.countText, { fontSize: countFontSize, color: '#5876a2', fontFamily: 'Inter_18pt-ExtraBold' }]}>
          {formattedCount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  headerText: {
    fontWeight: '500',
    marginRight: 8, 
  },
  countWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontFamily:"Inter_18pt-ExtraBold"
  },
});

export default Header;
