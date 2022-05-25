import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

const getFCMToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'old token');
  console.log(fcmToken, '!@#enter');
  if (!fcmToken) {
    try {
      console.log('!@#new token');
      // const newToken = await messaging().getToken();
      //  await messaging().deleteToken();
      const newToken = await messaging().getToken();

      if (newToken) {
        console.log('!@#new token created');
        console.log(newToken);
        await AsyncStorage.setItem('fcmToken', newToken);
      } else {
        console.log('!@#cant create token');
      }
    } catch (error) {
      console.log('!@#error');
      console.log(error, 'error on fcmtoken');
    }
  }
  console.log(fcmToken, '!@#exit');
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging().onMessage(async remoteMessage=>{
    console.log("recieved in foreground",remoteMessage)
  })
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
