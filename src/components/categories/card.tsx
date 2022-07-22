import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colours } from "../../../styleConstants";

interface CardProps {
    id: number;
    name: string;
}

const Card: React.FC<CardProps> = (item) => {
    return (
        <TouchableOpacity style={styles.card}>
            {item.name}
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        height: 70,
        width: 110,
        backgroundColor: colours.grey,
        borderRadius: 10,
        marginRight: 15
    }
})