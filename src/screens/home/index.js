import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import HomeCard from './HomeCard'
import { FakePosts } from '../../fakedatta/posts'
import Stories from '../../navigation/home/stories'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleGoToFeed = () => navigation.navigate('Feed')
  const handleGoToLogin = () => navigation.navigate('Login')

  return (
    <View style={styles.main}>
      <Stories />
      <FlatList
        data={FakePosts}
        renderItem={({ item }) => {
          return <HomeCard post={item} />
        }}
      />
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
