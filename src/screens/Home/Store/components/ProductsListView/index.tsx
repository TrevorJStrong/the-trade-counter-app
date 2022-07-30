import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { colours, fontSizes } from "../../../../../../styleConstants";
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


                {/* PUT IN SEPERATE COMPONENT */}
                <View style={styles.moreInfoContainer}>
                    <Text style={styles.moreInfoText}>
                        More information
                    </Text>
                </View>        

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
    },
    moreInfoContainer: {
        paddingTop: 10,
    },
    moreInfoText: {
        fontSize: fontSizes.xxxs,
        fontFamily: 'montserrat',
        color: colours.primaryText,
        textAlign: 'center'
    }
})