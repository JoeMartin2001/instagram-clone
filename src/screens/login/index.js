import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ede0d4',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});

export default LoginScreen;
