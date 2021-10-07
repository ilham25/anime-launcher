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
      <FormLabel style={{color: colors[theme || 'LIGHT'].TEXT_SECONDARY}}>
        Mode Gelap
      </FormLabel>
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
        thumbColor={
          isDark
            ? colors[theme ?? 'LIGHT'].PRIMARY
            : colors[theme ?? 'LIGHT'].GRAY
        }
        style={{alignSelf: 'flex-start'}}
      />
    </View>
  );
};

export default ColorSchemeToggle;
