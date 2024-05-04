import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/AppNavigator/BottomTabs'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { WelcomeView } from './src/screens/WelcomeView'

import { AppProvider, UserProvider } from '@realm/react';
import { appId, baseUrl } from './src/realm/atlasConfig.json';
import { realmContext } from './src/realm/RealmContext'
const { RealmProvider } = realmContext;


const AppWrapper = () => {
  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={WelcomeView}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};

const App = () => {
  return (
    <>
      <RealmProvider
        sync={{                               //allowing data synchronization  
          flexible: true,                         //flexible sync
          onError: (_, error) => {
            // Show sync errors in the console
            console.error(error);
          },
        }}
      >
        <SafeAreaProvider>
            <View style={styles.container}>
              <NavigationContainer>
                <BottomTabs />
              </NavigationContainer>
            </View>
        </SafeAreaProvider>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppWrapper;
