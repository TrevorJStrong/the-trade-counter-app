import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
    return (
        <TextInput 
            placeholder="Search Here..."
            style={styles.input}
        />
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        fontFamily: 'montserrat'
    }
})

