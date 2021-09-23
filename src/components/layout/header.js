import React from 'react';

import {View, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import IconButton from '@components/atoms/iconButton';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const Screen = Dimensions.get('screen');

const Header = ({
  title,
  titleStyle,
  titleAlign = 'center',
  left = {visible: true, onPress: () => {}, name: 'menu', color: colors.BLACK},
  right = {
    visible: true,
    onPress: () => {},
    name: 'search',
    color: colors.BLACK,
  },
  fullscreen,
  style,
}) => {
  const titleAlignEnum = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return !fullscreen ? (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      {left.visible ? (
        <IconButton
          name={left.name || 'menu'}
          color={left.color || colors.BLACK}
          onPress={left.onPress}
        />
      ) : (
        <IconButton
          name={left.name || 'menu'}
          color={left.color || colors.BLACK}
          onPress={left.onPress}
        />
      )}
      <View
        style={{
          flex: 1,
          alignItems: titleAlignEnum[titleAlign],
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.medium500,
            fontSize: 18,
            marginBottom: -5,
            color: colors.PRIMARY,
            ...titleStyle,
          }}>
          {title}
        </Text>
      </View>
      {right.visible ? (
        <IconButton
          name={right.name || 'search'}
          color={left.color || colors.BLACK}
          onPress={right.onPress}
        />
      ) : (
        <IconButton
          name={right.name || 'search'}
          color={left.color || colors.BLACK}
          onPress={right.onPress}
        />
      )}
    </View>
  ) : (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        width: Screen.width,
        ...style,
      }}>
      {left.visible ? (
        <IconButton
          name={left.name || 'menu'}
          color={left.color || colors.BLACK}
          onPress={left.onPress}
        />
      ) : (
        <IconButton
          name={left.name || 'menu'}
          color={left.color || colors.BLACK}
          onPress={left.onPress}
        />
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.object,
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']),
  left: PropTypes.shape({
    visible: PropTypes.bool,
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }),
  right: PropTypes.shape({
    visible: PropTypes.bool,
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }),
  fullscreen: PropTypes.bool,
  style: PropTypes.object,
};

export default Header;
