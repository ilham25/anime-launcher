import React from 'react';

import {View, Text} from 'react-native';

import IconButton from '@components/atoms/iconButton';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const Header = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <IconButton name="menu" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: fonts.medium500,
            fontSize: 18,
            marginBottom: -5,
            color: colors.PRIMARY,
          }}>
          List anime kamu
        </Text>
      </View>
      <IconButton name="search" />
    </View>
  );
};

export default Header;
