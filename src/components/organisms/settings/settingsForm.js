import React, {useState, useCallback} from 'react';

import {Text, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Button from '@components/atoms/button';
import FormControl from '@components/atoms/formControl';
import FormLabel from '@components/atoms/formLabel';
import ImagePreview from '@components/atoms/imagePreview';
import {getFile} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import OpacitySlider from '@components/molecules/settings/opacitySlider';
import {StackActions} from '@react-navigation/native';

const SettingsForm = ({navigation}) => {
  const [state, dispatch] = useDefaultContext();

  const [selectedWallpaper, setSelectedWallpaper] = useState(state.wallpaper);
  const [wallpaperOpacity, setWallpaperOpacity] = useState(
    state.wallpaperOpacity,
  );

  const handleFile = async () => {
    try {
      const selectedFile = await getFile();
      setSelectedWallpaper(selectedFile);
    } catch (error) {
      console.log('selectedFile err', error);
    }
  };

  const handleSubmit = () => {
    dispatch({
      type: 'wallpaper',
      payload: {
        type: 'INSERT_WALLPAPER',
        wallpaper: selectedWallpaper,
      },
    });

    dispatch({
      type: 'wallpaperOpacity',
      payload: {
        type: 'UPDATE_OPACITY',
        wallpaperOpacity,
      },
    });

    navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={{padding: 20}}>
      <FormControl>
        <FormLabel>Wallpaper</FormLabel>
        <Button
          onPress={() => {
            handleFile();
          }}
        />
        <ImagePreview
          source={
            !selectedWallpaper
              ? null
              : {
                  uri: `file://${selectedWallpaper}`,
                }
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel>Transparansi Wallpaper</FormLabel>
        <OpacitySlider
          wallpaperOpacityProps={{
            get: wallpaperOpacity,
            set: setWallpaperOpacity,
          }}
        />
      </FormControl>
      <FormControl>
        <Button
          label="Simpan"
          onPress={() => {
            handleSubmit();
          }}
          backgroundColor={colors.PRIMARY}
        />
      </FormControl>
    </View>
  );
};

export default SettingsForm;
