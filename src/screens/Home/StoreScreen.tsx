import React from "react";
import { Image, ImageStyle, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import ListView from "../../components/ListView";
import { colours } from "../../../styleConstants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../navigation";

// type check the Store screen
// can do this by using the name of the route that this screen belongs to
// as well as the params associated with this screen
type Props = NativeStackScreenProps<HomeStackParams, "Store">

type StyleProps = {
    container: ViewStyle;
    logo: ImageStyle;
    categoryTitle: TextStyle;
    categoryContainer: ViewStyle;
    primaryText: TextStyle;
}

function StoreScreen ({ route }: Props) {
    const { store_categories, store_logo } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            
            {store_logo !== null
                ?    <Image 
                        source={store_logo}
                        style={styles.logo}
                    />
                :   <FontAwesome name="picture-o" size={80} color={colours.primaryText} style={{ marginTop: 10, marginLeft: 20 }} />
            }

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
                                    />
                                )
                            })}
                        </>
                    )
                })}
            </View>
        
        </SafeAreaView>
    );
};

export default StoreScreen;

const styles = StyleSheet.create<StyleProps>({
    container: {
        flex: 1
    },
    logo: {
        width: 180,
        height: 80,
        resizeMode: 'contain',
        marginLeft: 15
    },
    categoryTitle: {
        fontFamily: 'montserrat',
        marginLeft: 20,
        marginBottom: 20
    },
    categoryContainer: {
        marginTop: 10
    }
});