import React from "react";
import { Image, StyleSheet } from "react-native";

export const ProductImage = (image_url) => {
    return (
        <Image 
            source={require('../../../../../../assets/products/tapProduct.png')}
            style={styles.productImage}
        />
    );
}

const styles = StyleSheet.create({
    productImage: {
        height: 75,
        width: 85,
        resizeMode: 'contain'
    }
})