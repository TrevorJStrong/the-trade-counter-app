import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
    return (
        <TextInput 
            placeholder="Search by postcode..."
            style={styles.input}
        />
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        fontFamily: 'montserrat',
        width: '80%'
    }
})

