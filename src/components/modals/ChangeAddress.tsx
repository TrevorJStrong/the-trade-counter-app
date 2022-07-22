import React from "react";
import MapView from 'react-native-maps';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';
import { colours } from "../../../styleConstants";

const ChangeAddress = () => {
    return (
        <View style={styles.container}>
               <TextInput
                placeholder="Enter Location Here..."
                style={{
                  borderWidth: 1,
                  borderColor: colours.primaryText,
                  borderRadius: 5,
                  width: "90%",
                  alignSelf: "center",
                  padding: 10,
                  marginBottom: 10,
                  fontFamily: 'montserrat',
                  marginTop: 0
                }}
              />
            <MapView style={styles.map} />
        </View>
    );
}

export default ChangeAddress;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    map: {
      width: '90%',
      height: '85%',
      alignSelf: 'center'
    },
  });