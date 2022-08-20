import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Alert } from "react-native";
import Categories from "../../components/categories";
import Stores from "../../components/stores";
import { HomeStackParams } from "../../navigation";
import { ScreenContainer } from "../../styles";
import styles from "./styles";
import { requestLocationPermissions } from "../../utils/location";
import AsyncStorage from '@react-native-async-storage/async-storage';


// type check the Home screen
// can do this by using the name of the route that this screen belongs to
type Props = NativeStackScreenProps<HomeStackParams, 'Home'>;

export type StyleProps = {
    container: ViewStyle;
    topContainer: ViewStyle;
    bottomContainer: ViewStyle;
}

const HomeScreen = () => {

    // this function will live here for now as I need to figure out 
    // within the app.js file it will be called
    React.useEffect(() => {
        requestLocationPermissions();
        clearStorage();
    }, []);

    const clearStorage = async() => {
        try {
            await AsyncStorage.getAllKeys()
                .then(keys => AsyncStorage.multiRemove(keys))
                .then(() => Alert.alert('Success'))
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <ScreenContainer>

            <View style={styles.topContainer}>
                <View>
                    <Categories />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Stores />
            </View>

        </ScreenContainer>
    );
};

export default HomeScreen;