import React from 'react';

import {Text} from 'react-native-paper';

import colors from '@utils/themes/colors';

const RequiredSymbol = ({style = {}, ...props}) => {
  return (
    <Text
      {...props}
      style={{
        color: colors.YELLOW,
        fontSize: 14,
        ...style,
      }}>
      *
    </Text>
  );
};

export default RequiredSymbol;
