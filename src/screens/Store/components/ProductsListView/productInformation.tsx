import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colours, fontSizes } from "../../../../../styleConstants";

export const ProductInformation = ({ name, price }) => {
    return (
        <View>
            <Text style={styles.productName}>{name ?? ''}</Text>
            <Text style={styles.productDescription}>£{price ?? 0}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    productName: {
        fontSize: fontSizes.xs,
        fontFamily: 'montserrat',
        color: colours.primaryText,
        paddingBottom: 5
    },
    productDescription: {
        fontSize: fontSizes.xxs,
        fontFamily: 'montserrat',
        color: colours.secondary,
        paddingBottom: 15
    }
})