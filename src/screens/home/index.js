import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import HomeCard from './HomeCard';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { posts, stories } from '../../tempData';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoToFeed = () => navigation.navigate('Feed');
  const handleGoToLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.main}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginVertical: 10,
          height: 60,
          paddingHorizontal: 10,
        }}
        data={stories}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image source={{ uri: item.imgurl }} style={styles.img} />
          </TouchableOpacity>
        )}
      />
      <KeyboardAwareFlatList
        data={posts}
        renderItem={({ item }) => <HomeCard item={item} />}
        keyExtractor={(_item, idx) => idx.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
});

export default HomeScreen;
