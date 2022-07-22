import * as Location from 'expo-location';

export const requestLocationPermissions = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location, 'user location');
}