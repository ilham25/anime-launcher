import React from 'react';

import {Text} from 'react-native-paper';
import PropTypes from 'prop-types';
import colors from '@utils/themes/colors';

const SubLabel = ({children}) => {
  return (
    <Text
      style={{
        color: colors.GRAY,
        fontSize: 12,
      }}>
      {children}
    </Text>
  );
};

SubLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubLabel;
