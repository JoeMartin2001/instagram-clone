import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/localization';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <RootNavigator />
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </I18nextProvider>
  );
}
