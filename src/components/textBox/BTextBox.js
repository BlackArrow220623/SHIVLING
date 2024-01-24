import React from 'react'
import Text from '../text/BText';
import { TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import CommonStyles from '../../Utils/styles/Styles'

export default function BTextBox(props) {
    const { colors } = useTheme();

    return (
        <>
            <TextInput
                {...props}
                style={[{ backgroundColor: "#fff" }, props.style]}
                label={(<Text style={{fontSize:14}}>{props.label} {props.isRequired && <Text style={CommonStyles.required}>*</Text>}</Text>)}
                error={props.errorText ? true : false}

            />
            {props.errorText &&
                < Text style={{ color: 'red',fontSize:13}}> {props.errorText}</Text>
            }
        </>
    )
}
