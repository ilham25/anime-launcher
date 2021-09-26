import React from 'react';

import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

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

Description.propTypes = {
  title: PropTypes.string.isRequired,
  episodes: PropTypes.any.isRequired,
  history: PropTypes.array.isRequired,
};

export default Description;
