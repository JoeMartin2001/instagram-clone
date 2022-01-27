import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons';
import { HorizontalDots } from '../../utils/icons';
import { Colors } from '../../styles';

const HomeCard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.cardTopView}>
        <View style={styles.cardTopLeftView}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3UpIf-0esrULCTuwtK_nVQt84JUXjmxmgw&usqp=CAU',
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.userInfoView}>
            <TouchableOpacity>
              <Text style={styles.fullNameText}>serdarchik_7176</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.imageLocationText}>Fergana, Uzbekistan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>{HorizontalDots(20, Colors.Grey)}</TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={1}>
        <View style={styles.media}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3UpIf-0esrULCTuwtK_nVQt84JUXjmxmgw&usqp=CAU',
            }}
            resizeMode='cover'
          />
        </View>
      </TouchableOpacity>

      <View style={styles.cardBottomView}>
        <View style={styles.cardBottomLeftView}>
          <TouchableOpacity style={styles.cardBottomLeftItemTouchable}>
            <AntDesign name='hearto' color={'#000000'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBottomLeftItemTouchable}>
            <EvilIcons name='comment' color={'#000000'} size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBottomLeftItemTouchable}>
            <Feather name='send' color={'#000000'} size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Feather name='bookmark' color={'#000000'} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.likedView}>
        <TouchableOpacity style={styles.likedMainImage}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3UpIf-0esrULCTuwtK_nVQt84JUXjmxmgw&usqp=CAU',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text>Liked by Komron Botirov and others</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginBottom: 25,
    width: '100%',
  },
  cardTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 10,
  },
  profile: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardTopLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoView: {
    marginLeft: 10,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 99,
  },
  fullNameText: {
    fontSize: 14,
    fontWeight: '700',
  },
  imageLocationText: {
    fontSize: 12,
  },
  cardBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cardBottomLeftView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBottomLeftItemTouchable: {
    marginRight: 10,
  },
  likedView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  likedMainImage: {
    marginRight: 5,
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
<<<<<<< HEAD
});

export default HomeCard;
=======
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
>>>>>>> 54c48b46e92d80772bea2108392faf1ae8961dc4
