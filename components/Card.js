import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
    return (
        <View style ={[styles.card, props.style]}>{props.children}</View>
    )
};

export default Card;

const styles = StyleSheet.create({
    card: {
        // ios shadows
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .22,
        backgroundColor: '#fff',
        // android shadow - elevation
        elevation: 5,
        padding: 20,
        borderRadius: 5
    }
});
