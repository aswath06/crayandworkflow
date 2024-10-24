import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function Lefticons1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          height={16}
          width={16}
          viewBox="0 -960 960 960"
          fill="#e8eaed"
          {...props}
        >
          <Path d="M400-80L0-480l400-400 71 71-329 329 329 329-71 71z" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#0c356a',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});

export default Lefticons1;
