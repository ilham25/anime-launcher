import React from 'react';

import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import {useDefaultContext} from '@utils/contexts';

const TextInputComponent = ({...props}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <TextInput
      style={{
        fontSize: 12,
        height: 40,
        paddingHorizontal: 10,
        color: colors[theme ?? 'LIGHT'].BLACK,
        borderWidth: 1,
        borderColor: colors[theme ?? 'LIGHT'].GRAY_LIGHT,
        borderRadius: 4,
        fontFamily: fonts.regular400,
      }}
      placeholderTextColor={colors[theme ?? 'LIGHT'].GRAY_LIGHT}
      {...props}
    />
  );
};

TextInputComponent.propTypes = {
  props: PropTypes.func,
};

export default TextInputComponent;
