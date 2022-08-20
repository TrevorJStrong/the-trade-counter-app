import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colours } from '../../styleConstants';
import { Product } from '../types/product';

// needs refactoring 
type IProps = {
    product: Product;
}

export const AddToBasketButton = ({ product }: {product: IProps}) => {

    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        var test = 1;
        if(test !== 1) {
            console.log('test')
        } else {
            return false;
        }
    }, []);

    // handle local storage
    const addToBasket = async() => {
        setLoading(true)
        try {
            const jsonValue = JSON.stringify(product);
            await AsyncStorage.setItem('basket', jsonValue);
            setLoading(false);
        } catch (error) {
            // put in global alert component??
            Alert.alert('Error', 'Unable to add this product to your basket. Please try again later.')
        }
    }

    // useLoader hook in seperate file??
    const LoadingSpinner = () => (
        <ActivityIndicator 
            color={'#fff'}
            size={16}
        />
    )

    return (
        <TouchableOpacity style={styles.button}>
            {!loading 
                ? <Text style={styles.text}>Add To Basket</Text>
                : <LoadingSpinner />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.secondary,
        padding: 10,
        borderRadius: 15
    },
    text: {
        fontFamily: 'montserrat',
        color: '#fff',
        textAlign: 'center'
    }
});