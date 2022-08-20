import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colours } from "../../styleConstants";

export const BasketIcon = () => {

    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        console.log(basketItems, 'show basket items')
    }, [basketItems]);

    useEffect(() => {      
        const getBasketProducts = async() => {
            try {
                const getUserBasket = await AsyncStorage.getItem('basket');
                if(getUserBasket !== null) {
                    setBasketItems([...basketItems, JSON.parse(getUserBasket)]);
                } else {
                    return null;
                }
            } catch (error) {
                Alert.alert('Error', 'Unable to fetch your products inside your basket. Please try again later.')
            }
        }
        getBasketProducts();
    }, []);

    return (
        basketItems.length !== 0 &&
        <View style={styles.badge}>
            <Text style={styles.quantity}>
                {basketItems?.length + 1}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50
    },
    quantity: {
        color: colours.primaryText
    }
})