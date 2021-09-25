import React from 'react';

import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';

const TextInputComponent = ({...props}) => {
  return (
    <TextInput
      style={{
        fontSize: 14,
        height: 40,
        paddingHorizontal: 10,
        color: colors.BLACK,
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 4,
      }}
      placeholderTextColor={colors.GRAY_LIGHT}
      {...props}
    />
  );
};

TextInputComponent.propTypes = {
  props: PropTypes.func,
};

export default TextInputComponent;
