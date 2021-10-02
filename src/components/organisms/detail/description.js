import React from 'react';

import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const Description = ({title, episodes, history}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View>
      <Text
        style={{
          fontFamily: fonts.medium500,
          fontSize: 24,
          color: colors[theme ?? 'LIGHT'].BLACK,
          width: 250,
        }}
        numberOfLines={2}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          color: colors[theme ?? 'LIGHT'].PRIMARY,
          fontSize: 14,
        }}>
        {episodes || '-'} Episode
      </Text>
      <Text
        style={{
          fontFamily: fonts.regular400,
          color: colors[theme ?? 'LIGHT'].BLACK,
          fontSize: 12,
          marginBottom: 10,
        }}>
        Episode terakhir kali dilihat :{' '}
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
