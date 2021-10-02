import React from 'react';

import {Text} from 'react-native';
import PropTypes from 'prop-types';

import RequiredSymbol from '@components/atoms/requiredSymbol';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const FormLabel = ({children, isRequired}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <Text
      style={{
        marginBottom: 5,
        fontSize: 14,
        fontFamily: fonts.medium500,
        color: colors[theme].TEXT,
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
