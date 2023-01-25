import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import colors from '../../utils/colors';
import fontFamily from '../../utils/fontFamily';
const Button = ({ title, onPress = () => { } }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                height: 50,
                width: '100%',
                alignSelf: 'center',
                borderRadius: 4,
                backgroundColor: colors.green,
                marginVertical: 30,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: colors.white, fontWeight: '700', fontSize: 16, lineHeight: 20, fontFamily: fontFamily.regular }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;