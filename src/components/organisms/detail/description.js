import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Text} from 'react-native';

const Description = ({title, episodes, history}) => {
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
          color: colors.BLACK,
          fontSize: 12,
          marginBottom: 10,
        }}>
        Last watched episode :{' '}
        {history.length > 0 ? history[history.length - 1] : '-'}
      </Text>
    </View>
  );
};

export default Description;
