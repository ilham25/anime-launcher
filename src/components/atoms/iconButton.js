import React from 'react';

import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const IconButton = ({
  name,
  size = 28,
  rippleColor = colors['LIGHT'].PRIMARY,
  color = colors['LIGHT'].BLACK,
  onPress,
}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View
      style={{
        borderRadius: 100,
        overflow: 'hidden',
        height: size + 8,
        width: size + 8,
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{
          height: size + 8,
          width: size + 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}
        android_ripple={{color: rippleColor}}>
        <Icon name={name} size={size} color={color} />
      </Pressable>
    </View>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  rippleColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
