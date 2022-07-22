import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colours } from '../../styleConstants';

export const Border = () => (
    <View style={styles.border}></View>
)

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: colours.grey,
        marginTop: 10
    }
})