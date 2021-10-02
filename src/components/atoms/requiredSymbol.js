import React from 'react';

import {Text} from 'react-native';

import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const RequiredSymbol = ({style = {}, ...props}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <Text
      {...props}
      style={{
        color: colors[theme ?? 'LIGHT'].YELLOW,
        fontSize: 14,
        ...style,
      }}>
      *
    </Text>
  );
};

export default RequiredSymbol;
