import React, {useState} from 'react';

import {View, Appearance, Text} from 'react-native';
import PropTypes from 'prop-types';
import {StackActions} from '@react-navigation/native';

import Button from '@components/atoms/button';
import FormControl from '@components/atoms/formControl';
import FormLabel from '@components/atoms/formLabel';
import ImagePreview from '@components/atoms/imagePreview';
import OpacitySlider from '@components/molecules/settings/opacitySlider';

import images from '@assets/images';

import {getFile} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import ColorSchemeToggle from '@components/molecules/settings/colorSchemeToggle';

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
      <Text
        style={{
          fontFamily: fonts.medium500,
          color: colors[state.theme || 'LIGHT'].TEXT,
        }}>
        Wallpaper
      </Text>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: colors[state.theme || 'LIGHT'].GRAY_LIGHT,
          marginVertical: 10,
          borderRadius: 4,
        }}>
        <FormControl>
          <FormLabel>Gambar</FormLabel>
          <Button
            onPress={() => {
              handleFile();
            }}
          />
          <ImagePreview
            source={
              !selectedWallpaper
                ? images.wpExample
                : {
                    uri: `file://${selectedWallpaper}`,
                  }
            }
            opacity={wallpaperOpacity}
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
      </View>
      <Text
        style={{
          fontFamily: fonts.medium500,
          color: colors[state.theme || 'LIGHT'].TEXT,
        }}>
        Tema
      </Text>
      <View
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: colors[state.theme || 'LIGHT'].GRAY_LIGHT,
          marginVertical: 10,
          borderRadius: 4,
        }}>
        <ColorSchemeToggle />
      </View>
      <FormControl>
        <Button
          label="Simpan"
          onPress={() => {
            handleSubmit();
          }}
          backgroundColor={colors[state.theme].PRIMARY}
        />
      </FormControl>
    </View>
  );
};

SettingsForm.propTypes = {
  navigation: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
};

export default SettingsForm;
