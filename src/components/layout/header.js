import React from 'react';

import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import IconButton from '@components/atoms/iconButton';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const Header = ({
  title,
  titleStyle,
  titleAlign = 'center',
  left = {visible: true, onPress: () => {}, name: 'menu'},
  right = {visible: true, onPress: () => {}, name: 'search'},
}) => {
  const titleAlignEnum = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      {left.visible ? (
        <IconButton name={left.name || 'menu'} onPress={left.onPress} />
      ) : (
        <IconButton name={left.name || 'menu'} onPress={left.onPress} />
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
        <IconButton name={right.name || 'search'} onPress={right.onPress} />
      ) : (
        <IconButton name={right.name || 'search'} onPress={right.onPress} />
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
  }),
  right: PropTypes.shape({
    visible: PropTypes.bool,
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  }),
};

export default Header;
