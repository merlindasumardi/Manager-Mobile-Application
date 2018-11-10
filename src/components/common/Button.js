import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children })=> {
    const { buttonStyles , textStyles} = styles
    return (
        <View style = {buttonStyles}>
            <TouchableOpacity onPress= {onPress}>
                <Text style={textStyles}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    textStyles: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
    }
}

export {Button};