import React from 'react';

import {View, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialIcons';

import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const CustomFab = ({
  style,
  icon = 'add',
  onPress = () => {},
  size = 36,
  small,
  backgroundColor,
}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View
      style={{
        borderRadius: 75,
        overflow: 'hidden',
        position: 'absolute',
        bottom: style ? undefined : 25,
        right: style ? undefined : 25,
        elevation: 5,
        ...style,
      }}>
      <Pressable
        style={{
          height: (!small ? 40 : 5) + size,
          width: (!small ? 40 : 5) + size,
          backgroundColor: !backgroundColor
            ? colors[theme ?? 'LIGHT'].PRIMARY
            : backgroundColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        android_ripple={{color: colors[theme ?? 'LIGHT'].GRAY_LIGHT}}
        onPress={onPress}>
        <Icons name={icon} size={size} color="white" />
      </Pressable>
    </View>
  );
};

CustomFab.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  small: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default CustomFab;
