import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import StoreCategory from "./category";
import StoreCardLogo from "./logo";
import StoreDuration from "./duration";
import StoreDeliveryFee from "./delivery_fee";
import StoreRating from "./rating";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../navigation";

// do not use any type!
interface CardProps {
    item: any
    key: number
    onPress: (store_categories: string[], store_logo: string) => void;
}

const StoreCard = ({ item, key, onPress }: CardProps)  => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <TouchableOpacity key={key}
            onPress={() => navigation.navigate("Store", {
                store_categories: item.categories,
                store_logo: item.imageURL
            })}
            // onPress={() => onPress(item.categories)}
            style={styles.card}
        >

            <StoreCardLogo imageUrl={item.imageURL} />
            
            <StoreCategory type={item.type} />

            <StoreDuration 
                delivery_start={item.address.delivery.delivery_start} 
                delivery_end={item.address.delivery.delivery_end} 
            />

            <StoreDeliveryFee delivery_fee={item.address.delivery.delivery_fee} />

            <StoreRating rating={item.rating} />

        </TouchableOpacity>
    );
};

export default StoreCard;

const styles = StyleSheet.create({
    card: {
        // flex: 1
        height: 165,
        width: '48%',
        backgroundColor: '#F4F5F8',
        borderRadius: 10,
        marginRight: 15,
        marginBottom: 20,
        alignItems: 'center'
    }
})