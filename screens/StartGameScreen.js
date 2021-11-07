import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>start a new game</Text>
            <Card style={styles.inputContainer}>
                    <Text>select a number</Text>
                    <TextInput />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button style={styles.button} title="confirm" onPress={() => {}} color="#f7287b"/>
                        </View>

                        <View style={styles.button}>
                            <Button title="reset" onPress={() => {}} color="#c717fc"/>
                        </View>
                    </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        width: 100
    }
});
