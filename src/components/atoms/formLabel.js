import React from 'react';

import {Text} from 'react-native-paper';
import PropTypes from 'prop-types';

import RequiredSymbol from '@components/atoms/requiredSymbol';

import fonts from '@utils/fonts';

const FormLabel = ({children, isRequired}) => {
  return (
    <Text
      style={{
        marginBottom: 5,
        fontSize: 14,
        fontFamily: fonts.medium500,
      }}>
      {children} {isRequired && <RequiredSymbol />}
    </Text>
  );
};

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  isRequired: PropTypes.bool,
};

export default FormLabel;
