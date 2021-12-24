import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/feed';
import LoginScreen from '../screens/login';
import HomeNavigator from './home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeNavigator'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
        <Stack.Screen name='Feed' component={FeedScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
