import React from 'react';

import {Text} from 'react-native-paper';
import PropTypes from 'prop-types';
import colors from '@utils/themes/colors';

const TextError = ({children}) => {
  return (
    <Text
      style={{
        color: colors.RED,
        fontSize: 12,
      }}>
      {children}
    </Text>
  );
};

TextError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextError;
