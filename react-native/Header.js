import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#A00',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: { fontSize: 24, color: '#FFF' }
}

export { Header };