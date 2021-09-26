import React from 'react';

import {View} from 'react-native';
import PropTypes from 'prop-types';

const FormControl = ({children, style}) => {
  return (
    <View
      style={{
        marginBottom: 16,
        ...style,
      }}>
      {children}
    </View>
  );
};

FormControl.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default FormControl;
