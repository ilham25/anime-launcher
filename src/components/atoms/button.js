import React from 'react';

import {View, Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const ButtonComponent = ({
  onPress = () => {},
  label = 'Pilih',
  backgroundColor = colors['LIGHT'].YELLOW,
  style = {},
  disabled,
}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View
      style={{
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 5,
      }}>
      <Pressable
        style={{
          height: 35,
          backgroundColor: disabled
            ? colors[theme ?? 'LIGHT'].GRAY_LIGHT
            : backgroundColor,
          paddingHorizontal: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          ...style,
        }}
        android_ripple={{color: colors[theme ?? 'LIGHT'].GRAY_LIGHT}}
        onPress={onPress}
        disabled={disabled}>
        <Text
          style={{
            fontFamily: fonts.regular400,
            color: disabled
              ? colors[theme ?? 'LIGHT'].GRAY
              : colors[theme ?? 'LIGHT'].WHITE,
            fontSize: 14,
          }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

ButtonComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default ButtonComponent;
