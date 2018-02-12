import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputTextual = ({ label, value, onChangeText, placeholder, secure }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label }</Text>
            <TextInput 
                secureTextEntry={secure}
                placeholder={placeholder} 
                autoCorrect={false} 
                underlineColorAndroid="#A00"
                style={inputStyle} 
                value={value} 
                onChangeText={onChangeText} 
            />
        </View>
    );
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex:4
    },
    labelStyle: {
        fontSize: 13,
        paddingLeft: 5,
        paddingRight:5,
        flex: 1,
        textAlign: 'right'
    },
    containerStyle:{
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { InputTextual };