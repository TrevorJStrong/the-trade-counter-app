import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colours } from "../../styleConstants";

interface ListViewProps {
    key: number;
    name: string
}

const ListView = ({ key, name }: ListViewProps) => {
    return (
        <TouchableOpacity key={key} style={styles.container}>
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
        width: '90%',
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