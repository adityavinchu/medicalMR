import React, { useState } from 'react';
import Realm from 'realm';
import { useApp } from '@realm/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

export function WelcomeView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isInSignUpMode, setIsInSignUpMode] = useState(true);
  const app = useApp();

  const signIn = async () => {
    const creds = Realm.Credentials.emailPassword(email, password);
    try {
      await app.logIn(creds);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  };

  const onPressSignIn = async () => {
    await signIn();
  };

  const onPressSignUp = async () => {
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      await signIn();
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error?.message}`);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.viewWrapper}>
        <Text style={styles.title}>MedicalMR</Text>
        <Text style={styles.subtitle}>
          Please log in or register with user account. 
        </Text>
        <Input
          placeholder="email"
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCompleteType={undefined}
        />
        <Input
          placeholder="password"
          onChangeText={setPassword}
          secureTextEntry={passwordHidden}
          rightIcon={
            <Icon
              type="material-community"
              name={passwordHidden ? 'eye-off-outline' : 'eye-outline'}
              size={12}
              color="black"
              onPress={() => setPasswordHidden(!passwordHidden)}
            />
          }
          autoCompleteType={undefined}
        />
        {isInSignUpMode ? (
          <>
            <Button
              title="Create Account"
              buttonStyle={styles.mainButton}
              onPress={onPressSignUp}
            />
            <Button
              title="Already have an account? Log In"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        ) : (
          <>
            <Button
              title="Log In"
              buttonStyle={styles.mainButton}
              onPress={onPressSignIn}
            />
            <Button
              title="Don't have an account? Create Account"
              type="clear"
              titleStyle={styles.secondaryButton}
              onPress={() => setIsInSignUpMode(!isInSignUpMode)}
            />
          </>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
    color: 'gray',
    textAlign: 'center',
  },
  mainButton: {
    width: 350,
    backgroundColor: '#00684A',
  },
  secondaryButton: {
    color: '#00684A',
  },
});
