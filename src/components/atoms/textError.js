import React from 'react';

import {Text} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import {useDefaultContext} from '@utils/contexts';

const TextError = ({children}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <Text
      style={{
        color: colors[theme ?? 'LIGHT'].RED,
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
