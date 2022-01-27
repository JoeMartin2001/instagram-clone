import { useCallback, useMemo, useState, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Select from 'react-native-picker-select';
import { useTranslation } from 'react-i18next';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../../../styles';

const SelectLang = () => {
  const [lang, setLang] = useState('ru');
  const { t, i18n } = useTranslation();

  const items = useMemo(
    () => [
      { value: 'ru', label: t('russian') },
      { value: 'en', label: t('english') },
      { value: 'uz', label: t('uzbek') },
    ],
    [lang]
  );

  const handleChange = useCallback((e) => {
    setLang(e);
    i18n.changeLanguage(e);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Select
          value={lang}
          items={items}
          style={selectStyles}
          onValueChange={handleChange}
          useNativeAndroidPickerStyle={false}
          placeholder={{
            label: t('chooseyourlang'),
            value: null,
          }}
          Icon={() => (
            <Entypo name="chevron-small-down" size={24} color={Colors.Grey} />
          )}
        />
      </View>
    </View>
  );
};
``;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
  },
});

const selectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: Colors.Grey,
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: Colors.Grey,
    paddingRight: 30,
  },
  iconContainer: {
    top: 10,
    right: 8,
  },
});

export default memo(SelectLang);
