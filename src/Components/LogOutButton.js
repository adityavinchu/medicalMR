import React, { useCallback } from 'react';
import { Pressable, Alert, View, Text, StyleSheet } from 'react-native';
import { useUser } from '@realm/react';

export function LogoutButton() {
  const user = useUser();

  const signOut = useCallback(() => {
    user?.logOut();
  }, [user]);

  return (
    <Pressable
      onPress={() => {
        Alert.alert('Log Out', '', [
          {
            text: 'Yes, Log Out',
            style: 'destructive',
            onPress: () => signOut(),
          },
          { text: 'Cancel', style: 'cancel' },
        ]);
      }}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Log Out</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'red'
  },
});
