import React from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import Stars from 'react-native-stars';
import { colours } from "../../../../styleConstants";

interface StoreRatingProps {
    rating: number;
}

const StoreRating = ({ rating }: StoreRatingProps) => {
    return (
        <View>
            <Stars 
                default={rating}
                count={5}
                starSize={20}
                spacing={5}
                disabled
                fullStar={
                    <View style={styles.starContainer}>
                        <Entypo 
                            name="star" 
                            size={10} color={colours.grey} 
                        />
                    </View>
                }
                emptyStar={
                    <View style={[styles.starContainer, { backgroundColor: colours.primaryText }]}>
                        <Entypo 
                            name="star" 
                            size={10} color={colours.grey} 
                        />
                    </View>
                }
            />
        </View>
    );
}

export default StoreRating;

const styles = StyleSheet.create({
    starContainer: {
        backgroundColor: colours.secondary,
        height: 14,
        width: 14,
        borderRadius: 14 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }
})