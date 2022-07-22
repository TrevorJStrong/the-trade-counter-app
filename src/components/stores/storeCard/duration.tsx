import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colours } from "../../../../styleConstants";

interface StoreFeeProps {
    delivery_start: string;
    delivery_end: string;
}

const StoreDeliveryDuration = ({ delivery_start, delivery_end }: StoreFeeProps) => {
    return (
        <View>
            <Text style={styles.fee}>
                {delivery_start} - {delivery_end} Minutes
            </Text>
        </View>
    );
}

export default StoreDeliveryDuration;

const styles = StyleSheet.create({
    fee: {
        fontSize: 14,
        color: colours.primaryText,
        marginTop: 10,
        fontFamily: 'montserrat'
    }
})