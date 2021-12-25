import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from '../../screens/feed'
import HomeScreen from '../../screens/home'
import ProfileScreen from '../../screens/profile'
import SearchScreen from '../../screens/search'
import UploadScreen from '../../screens/upload'
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  FontAwesome,
} from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000000',
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Bestagram',
          headerRight: () => {
            return (
              <TouchableOpacity style={styles.headerRightView}>
                <Feather name="send" color={'#000000'} size={25} />
              </TouchableOpacity>
            )
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-square" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  headerRightView: {
    marginRight: 10,
  },
})

export default HomeNavigator
