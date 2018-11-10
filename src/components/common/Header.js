//Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerName}</Text>
        </View>
    )

}

const styles = {
    viewStyle: {
        backgroundColor: '#aeaeae',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    textStyle: {
        fontSize: 20,
    }
}
//make component available to other apps
export { Header };