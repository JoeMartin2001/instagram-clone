import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
    </>
  );
}
