import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colours } from "../../../../styleConstants";

interface StoreCategoryProps {
    type: string;
}

const StoreCategory = ({ type }: StoreCategoryProps) => {
    return (
        <View>
            <Text style={styles.text}>
                {type}
            </Text>
        </View>
    );
}

export default StoreCategory;

const styles = StyleSheet.create({
    text: {
        color: colours.secondary,
        fontSize: 10,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'montserrat'
    }
})