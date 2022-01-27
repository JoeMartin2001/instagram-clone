import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import SelectLang from './components/SelectLang';
import Form from './components/Form';
import { Button } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { Colors } from '../../styles';

const LoginScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.main}>
      <SelectLang />
      <Form />
      <Button
        type="outline"
        title={t('createnewaccount')}
        containerStyle={styles.containerButton}
        buttonStyle={styles.button}
        titleStyle={styles.titleButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  button: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
  },
  titleButton: { color: 'black' },
  containerButton: {
    width: '100%',
  },
});

export default LoginScreen;
