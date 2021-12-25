import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { FontAwesome, AntDesign, EvilIcons, Feather } from '@expo/vector-icons'

const HomeCard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.profile}>
        <FontAwesome name="user-circle-o" color={'#000000'} size={35} />

        <Text style={styles.username}>Name of User</Text>
      </View>

      <View style={styles.media}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3UpIf-0esrULCTuwtK_nVQt84JUXjmxmgw&usqp=CAU',
          }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.orders}>
        <AntDesign name="hearto" color={'#000000'} size={30} />
        <EvilIcons name="comment" color={'#00000'} size={40} />
        <Feather name="send" color={'#00000'} size={30} />

        <View style={styles.chosen}>
          <Feather name="bookmark" color={'#00000'} size={30} />
        </View>
      </View>
      <View style={styles.commentuser}>
        <FontAwesome name="user-circle-o" color={'#000000'} size={25} />
        <TextInput style={styles.TextInput} placeholder="Add comment..." />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 500,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 40,
  },
  profile: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  username: {
    paddingLeft: 20,
  },
  media: {
    height: 300,
    width: '100%',
    borderBottomWidth: 1,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  orders: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  chosen: {
    marginLeft: 210,
  },
  commentuser: {
    padding: 10,
    marginTop: 20,
    paddingTop: 10,
    flexDirection: 'row',
  },
  TextInput: {
    marginLeft: 10,
  },
})

export default HomeCard