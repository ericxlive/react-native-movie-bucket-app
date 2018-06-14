import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.label}>
                    {props.children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10, // Horizontal
        width: 390,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        borderWidth: 1,
        padding: 10, // Vertical.
        borderRadius: 5,
        marginLeft: 5, // Margin Attributes.
        marginRight: 5, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 0.5,
    },
    label: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '600', // Bold
        fontSize: 15,
        color: '#007aff',
        alignSelf: 'center',
    }
}

export { Button };



