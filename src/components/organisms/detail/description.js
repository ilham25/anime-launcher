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
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          color: colors.PRIMARY,
          fontSize: 14,
        }}>
        {episodes} Episodes
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          fontSize: 12,
          color: colors.GRAY,
        }}>
        {directory}
      </Text>
    </View>
  );
};

export default Description;
