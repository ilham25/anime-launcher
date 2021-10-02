import React from 'react';

import {Text} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import {useDefaultContext} from '@utils/contexts';

const SubLabel = ({children}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <Text
      style={{
        color: colors[theme ?? 'LIGHT'].GRAY,
        fontSize: 12,
        fontFamily: fonts.regular400,
      }}>
      {children}
    </Text>
  );
};

SubLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubLabel;
