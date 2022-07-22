import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colours, fontSizes } from "../../../styleConstants";

const BasketScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Entypo
                name="shopping-cart"
                size={80}
                color={colours.primaryText}
            />
            <Text style={styles.basketEmptyTitle}>
                Your basket is empty
            </Text>
            <Text style={styles.basketEmptyMessage}>
                Looks like you haven't added any items to your basket yet.
            </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("HomeTab")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default BasketScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    basketEmptyTitle: {
        fontSize: fontSizes.large,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'montserrat'
    },
    basketEmptyMessage: {
        fontSize: fontSizes.small,
        marginBottom: 20,
        width: 280,
        textAlign: 'center',
        fontFamily: 'montserrat'
    },
    button: {
        backgroundColor: colours.secondary,
        padding: 10,
        borderRadius: 25,
        width: 200
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: fontSizes.small,
        fontFamily: 'montserrat'
    }
});