import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Categories from "../../components/categories";
import Stores from "../../components/stores";
import { HomeStackParams } from "../../navigation";
import { ScreenContainer } from "../../styles";
import { requestLocationPermissions } from "../../utils/location";

// type check the Home screen
// can do this by using the name of the route that this screen belongs to
type Props = NativeStackScreenProps<HomeStackParams, 'Home'>;

type StyleProps = {
    container: ViewStyle;
    topContainer: ViewStyle;
    bottomContainer: ViewStyle;
}

const HomeScreen = () => {

    // this function will live here for now as I need to figure out 
    // within the app.js file it will be called
    React.useEffect(() => {
        requestLocationPermissions();
    }, []);
    
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

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
    },
    topContainer: {
        flex: 0,
        maxHeight: '30%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    bottomContainer: {
        flex: 1,
    }
});