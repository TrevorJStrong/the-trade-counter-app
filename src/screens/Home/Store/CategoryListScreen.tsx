import React from "react";
import { Image, ImageStyle, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import ListView from "../../../components/ListView";
import { colours } from "../../../../styleConstants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../navigation";
import StoreLogo from "./components/storeLogo";
import { ScreenContainer } from "../../../styles";

// type check the Store screen
// can do this by using the name of the route that this screen belongs to
// as well as the params associated with this screen
type Props = NativeStackScreenProps<HomeStackParams, "Store">

type StyleProps = {
    container: ViewStyle;
    // logo: ImageStyle;
    categoryTitle: TextStyle;
    categoryContainer: ViewStyle;
}

function StoreScreen ({ route }: Props) {
    const { store_categories, store_logo } = route.params;

    return (
        <ScreenContainer>
            
           <StoreLogo 
                store_logo={store_logo}
           />

            <View style={styles.categoryContainer}>
                {store_categories.map((item: any ) => {
                    return (
                        <>
                            <Text style={styles.categoryTitle}>{item.name}</Text>
                            {item.sub_categories.map((sub) => {
                                return (
                                    <ListView 
                                        key={sub.id}
                                        name={sub.name}
                                        store_logo={store_logo}
                                    />
                                )
                            })}
                        </>
                    )
                })}
            </View>
        
        </ScreenContainer>
    );
};

export default StoreScreen;

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1
    },
    categoryTitle: {
        fontFamily: 'montserrat',
        marginBottom: 20
    },
    categoryContainer: {
        marginTop: 10
    }
});