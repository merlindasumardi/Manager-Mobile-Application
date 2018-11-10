import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {containerStyle, inputStyle, labelStyle} = styles;
    return (
        <View style = {containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput value={value}
            onChangeText = {onChangeText}
            style = {inputStyle}
            autoCorrect = {false}
            placeholder = {placeholder}
            secureTextEntry = {secureTextEntry}></TextInput>
        </View>
    );
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
        fontSize: 18,
        lineHeight: 23,

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
}

export { Input }