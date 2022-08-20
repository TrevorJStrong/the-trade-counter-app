import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { colours } from "../../../styleConstants";

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
                onPress={() => navigation.navigate("HomeStack")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default BasketScreen;