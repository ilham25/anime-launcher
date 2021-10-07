import React from 'react';

import {View} from 'react-native';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const SettingsContainer = ({children, style}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: colors[theme || 'LIGHT'].GRAY_LIGHT,
        marginVertical: 10,
        borderRadius: 4,
        ...style,
      }}>
      {children}
    </View>
  );
};

SettingsContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default SettingsContainer;
