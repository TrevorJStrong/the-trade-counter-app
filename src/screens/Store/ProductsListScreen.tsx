import React from "react";
import { FlatList, Image, ImageStyle, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { ScreenContainer } from "../../styles";
import SingleProduct from "./components/ProductsListView";
import StoreLogo from "./components/storeLogo";
import { colours, fontSizes } from "../../../styleConstants";

const data = [
    {
        "id": 1,
        "name": 'Chrome Tap 33mm',
        "price": 39.99,
        "image_url": "tapProduct.png",
        "description": "This Chrome Tap has a unique shape and is perfect for creating a contemporary finish to your bathroom, at an affordable price. Thanks to the rotatable aerator, you can easily adjust the water spray to work perfectly with your basin shape and size to avoid any water splashing over,  minimising the mess in your bathroom"
    },
    {
        "id": 2,
        "name": 'Chrome Tab 66mm',
        "price": 49.99,
        "image_url": "tapProduct.png",
        "description": "This Chrome Tap has a unique shape and is perfect for creating a contemporary finish to your bathroom, at an affordable price. Thanks to the rotatable aerator, you can easily adjust the water spray to work perfectly with your basin shape and size to avoid any water splashing over,  minimising the mess in your bathroom"
    }
]

const ProductsListScreen = ({ route }) => {
    const { store_logo, category } = route.params;
    return (
        <ScreenContainer>

            <StoreLogo 
                store_logo={store_logo}
            />

            <FlatList 
                data={data}
                renderItem={({ item }) =>
                    <SingleProduct
                        product={item}
                    />
                }
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                {category}
                            </Text>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
            
        </ScreenContainer>
    );
};

export default ProductsListScreen;

const styles = StyleSheet.create({
    titleContainer: {
        paddingBottom: 15,
        paddingTop: 5
    },
    title: {
        fontSize: fontSizes.medium,
        color: colours.primaryText,
        fontFamily: 'montserrat'
    }
})