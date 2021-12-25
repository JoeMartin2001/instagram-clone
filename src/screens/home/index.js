import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet } from 'react-native'
import HomeCard from './HomeCard'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleGoToFeed = () => navigation.navigate('Feed')
  const handleGoToLogin = () => navigation.navigate('Login')

  return (
    <View style={styles.main}>
      <HomeCard />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: '5%',
  },
})

export default HomeScreen
