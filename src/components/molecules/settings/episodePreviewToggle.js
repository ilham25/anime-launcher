import React, {useState} from 'react';

import {View, Switch} from 'react-native';

import FormLabel from '@components/atoms/formLabel';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const EpisodePreviewToggle = () => {
  const [{theme, episodePreview}, dispatch] = useDefaultContext();

  const [isPreview, setIsPreview] = useState(episodePreview);

  return (
    <View>
      <FormLabel>Tampilkan preview episode</FormLabel>
      <Switch
        value={isPreview}
        onValueChange={value => {
          setIsPreview(prev => !prev);
          dispatch({
            type: 'episodePreview',
            payload: {
              type: 'CHANGE_VALUE',
              episodePreview: value,
            },
          });
        }}
        thumbColor={
          isPreview
            ? colors[theme ?? 'LIGHT'].PRIMARY
            : colors[theme ?? 'LIGHT'].GRAY
        }
        style={{alignSelf: 'flex-start'}}
      />
    </View>
  );
};

export default EpisodePreviewToggle;
