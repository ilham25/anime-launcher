import React from 'react';

import {Text} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';

const TextError = ({children}) => {
  return (
    <Text
      style={{
        color: colors.RED,
        fontSize: 12,
        fontFamily: fonts.regular400,
      }}>
      {children}
    </Text>
  );
};

TextError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextError;
