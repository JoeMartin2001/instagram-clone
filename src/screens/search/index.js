import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import Images from '../../fakedatta/images'

const SearchScreen = () => {
  return (
    <View style={styles.searchinput}>
      <EvilIcons name="search" color={'#000000'} size={35} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  searchinput: {
    borderColor: 'rgb(79, 122, 160)',

    flexDirection: 'row',
  },

  input: {},
})

export default SearchScreen
