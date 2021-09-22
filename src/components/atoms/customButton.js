import React from 'react';

import {Button} from 'react-native-paper';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const CustomButton = ({
  contentStyle = {},
  labelStyle = {},
  children = null,
  style = {},
  ...props
}) => {
  return (
    <Button
      mode="contained"
      uppercase={false}
      style={{
        elevation: 0,
        ...style,
      }}
      contentStyle={{
        height: 40,
        backgroundColor: colors.PRIMARY,
        ...contentStyle,
      }}
      labelStyle={{
        fontFamily: fonts.regular400,
        color: colors.WHITE,
        fontSize: 14,
        letterSpacing: 0,
        textTransform: 'none',
        ...labelStyle,
      }}
      {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
