import React from "react";
import MapView from 'react-native-maps';
import { TextInput, View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { colours, fontSizes } from "../../../styleConstants";
import { FontAwesome } from '@expo/vector-icons'; 
import { requestLocationPermissions } from "../../utils/location";

const ChangeAddress = () => {
    return (
        <View style={styles.container}>
          {/* <MapView style={styles.map} /> */}
          <Text style={styles.postcodeDisclaimer}>
            Your postcode allows us to show you more accurate search results and delivery times.
          </Text>

          <TouchableOpacity 
            onPress={() => requestLocationPermissions()}
            style={styles.locationListView}
          >
            <FontAwesome name="location-arrow" size={20} color="black" style={{ marginRight: 10 }} />
            <Text style={styles.useYourLocation}>Use your location</Text>
          </TouchableOpacity>
        </View>
    );
}

export default ChangeAddress;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15
    },
    postcodeDisclaimer: {
      fontFamily: 'montserrat',
      fontSize: fontSizes.xxs,
      color: colours.primaryText
    },
    locationListView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20
    },
    useYourLocation: {
      fontFamily: 'montserrat',
      fontSize: fontSizes.xs,
      color: colours.primaryText
    },
    map: {
      width: '90%',
      height: '85%',
      alignSelf: 'center'
    },
  });