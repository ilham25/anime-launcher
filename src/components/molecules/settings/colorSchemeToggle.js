import React, {useState} from 'react';

import {View, Text, Switch} from 'react-native';

import FormLabel from '@components/atoms/formLabel';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const ColorSchemeToggle = () => {
  const [{theme}, dispatch] = useDefaultContext();

  const [isDark, setIsDark] = useState(theme === 'DARK');

  return (
    <View>
      <FormLabel>Mode Gelap</FormLabel>
      <Switch
        value={isDark}
        onValueChange={value => {
          setIsDark(prev => !prev);
          dispatch({
            type: 'theme',
            payload: {
              type: 'CHANGE_THEME',
              theme: value ? 'DARK' : 'LIGHT',
            },
          });
        }}
        thumbColor={colors[theme ?? 'LIGHT'].PRIMARY}
        style={{alignSelf: 'flex-start'}}
      />
    </View>
  );
};

export default ColorSchemeToggle;
