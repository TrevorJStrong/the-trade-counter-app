import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { colours } from '../../styleConstants';

const CurrentLocation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.flexCol}>
          <Text style={{ fontFamily: "montserrat" }}>
            1 Greenside Close
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangeAddress")}
          >
            <Text style={styles.buttonText}>change</Text>
          </TouchableOpacity>
        </View>
    );
}

export default CurrentLocation;

const styles = StyleSheet.create({
    flexCol: {
      flexDirection: "column",
      marginLeft: Platform.OS === "ios" ? 10 : 5,
    },
    buttonText: {
      color: colours.secondary,
      textAlign: "right",
      fontFamily: "montserrat",
    },
  });