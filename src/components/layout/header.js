import React from 'react';

import {View, Text, Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';

import IconButton from '@components/atoms/iconButton';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import images from '@assets/images';

const Screen = Dimensions.get('screen');

const Header = ({
  title,
  titleStyle,
  titleAlign = 'center',
  left,
  right,
  fullscreen,
  style,
  brand,
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
      {!brand &&
        (left ? (
          <IconButton
            name={left.name || 'menu'}
            color={left.color || colors.BLACK}
            onPress={left.onPress}
          />
        ) : (
          <View style={{height: 28, width: 28}}></View>
        ))}
      {brand && (
        <View>
          <Image
            source={images.brand}
            style={{height: 28, width: 28, resizeMode: 'contain'}}
          />
        </View>
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
      {right ? (
        <IconButton
          name={right.name || 'search'}
          color={right.color || colors.BLACK}
          onPress={right.onPress}
        />
      ) : (
        <View style={{height: 28, width: 28}}></View>
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
        justifyContent: 'space-between',
        ...style,
      }}>
      {left ? (
        <IconButton
          name={left.name || 'menu'}
          color={left.color || colors.BLACK}
          onPress={left.onPress}
        />
      ) : (
        <View style={{height: 28, width: 28}}></View>
      )}
      {right ? (
        <IconButton
          name={right.name || 'menu'}
          color={right.color || colors.BLACK}
          onPress={right.onPress}
        />
      ) : (
        <View style={{height: 28, width: 28}}></View>
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.object,
  titleAlign: PropTypes.oneOf(['left', 'center', 'right']),
  left: PropTypes.shape({
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }),
  right: PropTypes.shape({
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
  }),
  fullscreen: PropTypes.bool,
  style: PropTypes.object,
};

export default Header;
