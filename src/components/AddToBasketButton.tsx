import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colours } from '../../styleConstants';

export const AddToBasketButton = () => {

    // handle local storage
    // const addToBasket = () => {

    // }

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Add To Basket</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.secondary,
        padding: 10,
        borderRadius: 10
    },
    text: {
        fontFamily: 'montserrat',
        color: '#fff',
        textAlign: 'center'
    }
});