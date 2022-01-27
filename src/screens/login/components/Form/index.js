import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useState, useEffect, memo } from 'react';
import { Colors } from '../../../../styles';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInSchema } from './logIn.schema';

const Form = () => {
  const { t } = useTranslation();
  const [secure, setSecure] = useState(true);

  const [disable, setDisable] = useState(true);

  const handleSecure = useCallback(() => {
    setSecure((prev) => !prev);
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(logInSchema), mode: 'onChange' });

  useEffect(() => {
    const subscription = watch((value) => {
      if (Boolean(value?.email) && value?.password?.length >= 6) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch(['email', 'password'])]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            placeholder={t('email')}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            inputContainerStyle={styles.inputContainerStyle}
            selectionColor={Colors.Grey}
            containerStyle={styles.containerStyle}
            errorMessage={t(errors?.email?.message)}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder={t('password')}
            secureTextEntry={secure}
            inputContainerStyle={styles.inputContainerStyle}
            containerStyle={styles.containerStyle}
            selectionColor={Colors.Grey}
            errorMessage={t(errors?.password?.message)}
            rightIcon={() => {
              if (secure) {
                return (
                  <Ionicons
                    onPress={handleSecure}
                    name="ios-eye-off-outline"
                    size={24}
                    color={Colors.Grey}
                  />
                );
              } else {
                return (
                  <Ionicons
                    onPress={handleSecure}
                    name="ios-eye"
                    size={24}
                    color={Colors.Blue}
                  />
                );
              }
            }}
          />
        )}
      />
      <Button
        title={t('login')}
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 50 }}
        disabledStyle={styles.disabledStyle}
        disabledTitleStyle={styles.disabledTitleStyle}
        onPress={handleSubmit(onSubmit)}
        disabled={disable || errors?.email || errors?.password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 40,
    marginBottom: 30,
  },
  inputContainerStyle: {
    backgroundColor: Colors.LightestGrey,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  containerStyle: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  disabledStyle: {
    backgroundColor: Colors.LightBlue,
  },
  disabledTitleStyle: {
    color: 'white',
  },
});

export default memo(Form);
