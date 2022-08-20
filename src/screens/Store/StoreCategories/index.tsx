import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import ListView from "../../../components/store/listview";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "../../../navigation";
import StoreLogo from "../components/storeLogo";
import { ScreenContainer } from "../../../styles";
import styles from "./styles";

// type check the Store screen
// can do this by using the name of the route that this screen belongs to
// as well as the params associated with this screen
type Props = NativeStackScreenProps<HomeStackParams, "Store">

export type StyleProps = {
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
                    console.log(item.id, 'get cat item id');
                    return (
                        <React.Fragment key={item.id}>
                            <Text style={styles.categoryTitle}>{item.name}</Text>
                            {item.sub_categories.map((sub) => {
                                return (
                                    <ListView 
                                        // sub_id={sub?.id}
                                        sub={sub}
                                        name={sub.name}
                                        store_logo={store_logo}
                                    />
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </View>
        
        </ScreenContainer>
    );
};

export default StoreScreen;