import React from 'react';

import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';

const TextInputComponent = ({...props}) => {
  return (
    <TextInput
      style={{
        fontSize: 12,
        height: 40,
        paddingHorizontal: 10,
        color: colors.BLACK,
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
        borderRadius: 4,
        fontFamily: fonts.regular400,
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
