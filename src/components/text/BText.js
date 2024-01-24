import React from 'react';
import { Text } from 'react-native';
import Fonts from '../../Utils/fonts/Fonts';

export default function BText(props) {
    return (
        <Text {...props} style={[props.bold ? { fontFamily: Fonts.bold } : { fontFamily: Fonts.regular }, props.style]}>{props.children}</Text>
    )
}
