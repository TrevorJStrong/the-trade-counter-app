import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colours } from "../../../../styleConstants";
import { useNavigation } from "@react-navigation/native";

interface ListViewProps {
    sub_id: number;
    name: string;
    store_logo: string;
}

const ListView = ({ sub, name, store_logo }: ListViewProps) => {

    const navigation = useNavigation();

    console.log(sub, 'sub obj');

    return (
        <TouchableOpacity 
            key={sub.id}  
            style={styles.container}
            onPress={() => 
                navigation.navigate("StoreProducts", {
                    id: sub.id,
                    store_logo: store_logo,
                    category: name
                })
            }
        >
            <Text style={{ fontFamily: 'montserrat' }}>{name}</Text>
            <View style={styles.chevronContainer}>
                <Entypo name="chevron-small-right" size={20} color='#fff' />
            </View>
        </TouchableOpacity>
    );
}

export default ListView;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: colours.grey,
        padding: 15,
        borderRadius: 10
    },
    chevronContainer: {
        backgroundColor: colours.secondary,
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})