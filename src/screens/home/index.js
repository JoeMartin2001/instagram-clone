import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoToFeed = () => navigation.navigate('Feed');
  const handleGoToLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.main}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

export default HomeScreen;
