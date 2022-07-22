import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { colours, fontSizes } from "../../../styleConstants";

const FilterSearch = () => {
    return (
        <View style={styles.container}>
            <Text style={{
                textAlign: 'center',
                color: colours.primaryText,
                fontSize: fontSizes.medium,
                fontFamily: 'montserrat'
            }}>
                Filters options will appear here
            </Text>
        </View>
    );
}

export default FilterSearch;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });