import React from "react";
import { View, StyleSheet } from 'react-native';
import { colours } from "../../../../../../styleConstants";
import { AddToBasketButton } from "../../../../../components/AddToBasketButton";
import { ProductImage } from "./productImage";
import { ProductInformation } from "./productInformation";

const Product = (item: any) => {
    return (
        <View style={styles.container}>

            <ProductImage 
                image={item.product.image_url}
            />

            <View style={styles.rightColumn}>

                <ProductInformation 
                    name={item.product.name}
                    price={item.product.price}
                />

                <AddToBasketButton />

            </View>
            
        </View>
    );
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colours.grey,
        padding: 15,
        borderRadius: 10,
        marginBottom: 30
    },
    rightColumn: {
        flexDirection: 'column'
    }
})