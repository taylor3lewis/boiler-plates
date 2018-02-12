import React from 'react';
import { Text } from 'react-native';

const MyComponentName = (props) => {
    const { myStyle } = styles;
    return (
        <Text style={myStyle}>{props.children}</Text>
    );
};

const styles = {
    myStyle: {
        backgroundColor: '#A00',
    }
}

export default MyComponentName;
// export { MyComponentName };

// use props.children: in parent, <MyComponentName>Children text</MyComponentName>