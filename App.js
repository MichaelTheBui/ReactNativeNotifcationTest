import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Text, View, Alert} from 'react-native';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>Yo</Text>
    </View>
  );
};

export default App;
