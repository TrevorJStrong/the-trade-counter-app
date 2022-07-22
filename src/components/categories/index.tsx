import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colours } from "../../../styleConstants";
import data from '../../json/categories.json';
import { Border } from "../border";
import Card from "./card";

export type CategoryObject = {
    id: number;
    name: string;
};
  
const Categories: React.FC<CategoryObject> = () => {
    return (
        <>
            <View style={styles.headerRow}>
                <Text style={styles.title}>Categories</Text>
                <Text style={styles.seeAll}>see all</Text>
            </View>
            <FlatList
                data={data.categories}
                renderItem={(item) => {
                    return (
                        <Card
                            item={item} 
                        />
                    )
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <Border />
        </>
    );
}

export default Categories

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        fontFamily: 'montserrat'
    },
    seeAll: {
        fontSize: 12,
        color: colours.secondary,
        fontFamily: 'montserrat'
    }
})