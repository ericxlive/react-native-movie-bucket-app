import React from 'react';
import { View } from 'react-native';

const Container = (props) => (
    <View>
        {props.children}
    </View>        
);

export { Container };