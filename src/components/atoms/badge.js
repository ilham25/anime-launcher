import React from 'react';

import {View, Text, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';

const Badge = ({
  label = '',
  closable,
  onClose = () => {},
  onPress = () => {},
}) => {
  const [{theme}, _] = useDefaultContext();

  return (
    <View
      style={{
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 5,
        marginRight: 5,
      }}>
      <Pressable
        style={{
          height: 25,
          backgroundColor: colors[theme ?? 'LIGHT'].RED,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        android_ripple={{color: colors[theme ?? 'LIGHT'].GRAY_LIGHT}}
        onPress={onPress}>
        <View style={{paddingHorizontal: 10}}>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 12,
              color: 'white',
            }}
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        {closable && (
          <Pressable
            style={{
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
            onPress={onClose}>
            <View
              style={{
                width: 14,
                height: 14,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
                marginRight: 5,
              }}>
              <Icons name="close" size={12} />
            </View>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  onPress: PropTypes.func,
};

export default Badge;
