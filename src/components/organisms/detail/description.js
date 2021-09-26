import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Text} from 'react-native';

const Description = ({title, episodes, directory}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: fonts.medium500,
          fontSize: 24,
          color: colors.BLACK,
        }}
        numberOfLines={2}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          color: colors.PRIMARY,
          fontSize: 14,
        }}>
        {episodes || '-'} {+episodes > 1 ? 'Episodes' : 'Episode'}
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          fontSize: 12,
          color: colors.GRAY,
        }}
        numberOfLines={2}>
        {directory}
      </Text>
    </View>
  );
};

export default Description;
