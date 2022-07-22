import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { fontSizes } from "../../../../styleConstants";

export interface StoreDeliveryProps {
    delivery_fee: number;
}

const StoreDeliveryFee = ({ delivery_fee }: StoreDeliveryProps) => {
    return (
        <View>
            <Text style={styles.duration}>
                £{delivery_fee} delivery fee
            </Text>
        </View>
    );
}

export default StoreDeliveryFee;

const styles = StyleSheet.create({
    duration: {
        fontSize: 10,
        color: '#13262F99',
        marginTop: 5,
        fontFamily: 'montserrat'
    }
});