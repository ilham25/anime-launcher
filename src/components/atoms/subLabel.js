import React from 'react';

import {Text} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';

const SubLabel = ({children}) => {
  return (
    <Text
      style={{
        color: colors.GRAY,
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
