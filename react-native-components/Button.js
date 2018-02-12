import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

    const { buttonStyle, buyButton } = styles;
    return (
        <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
            <Text style={buyButton}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#A00',
        borderRadius: 5,
        padding: 5,
        paddingBottom:8,
        marginLeft: 5,
        marginRight: 5
    },
    buyButton : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        fontSize:20
    }
}

export { Button };