import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, View } from "react-native";
import { colours } from "../../../../styleConstants";

interface StoreLogoProps {
    imageUrl: string;
}

const StoreCardLogo = ({ imageUrl }: StoreLogoProps) => {
    return (
        <>
        <View>
            {imageUrl !== null
                ?   <Image 
                        source={imageUrl}
                        style={styles.logo}
                    />
                :   <FontAwesome name="picture-o" size={45} color={colours.primaryText} style={{ marginTop: 10 }} />
            }
        </View>
        <View style={styles.imageBorder} />
        </>
    );
}

export default StoreCardLogo;

const styles = StyleSheet.create({
    logo: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
        marginTop: 10
    },
    imageBorder:  {
        borderWidth: 1,
        borderColor: '#13262F1A',
        width: '100%',
        marginTop: 5
    }
})