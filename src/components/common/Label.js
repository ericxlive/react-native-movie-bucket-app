
import React from 'react';
import { View, Text } from 'react-native'; 

const Label = (props) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {props.children}
        </Text>
    </View>
);

const styles = {
    container: {
        flex: 1,
        height: 100, 
        width: 100,
    },
    label: {
        fontWeight: '600', // Bold
        fontSize: 15,
        color: '#007aff',
        alignSelf: 'center',
    }
}

export { Label };