import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { colours } from '../../../../../styleConstants';

const StoreLogo = ({ store_logo }) => {
    return (
        store_logo !== null
            ?    <Image 
                    source={store_logo}
                    style={styles.logo}
                />
            :   <FontAwesome name="picture-o" size={80} color={colours.primaryText} style={{ marginTop: 10, marginLeft: 20 }} />
    )
}

export default StoreLogo;

const styles = StyleSheet.create({
    logo: {
        width: 180,
        height: 80,
        resizeMode: 'contain',
    },
})