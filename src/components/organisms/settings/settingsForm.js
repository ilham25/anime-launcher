import React, {useState, useEffect} from 'react';

import {Text, ScrollView, ToastAndroid} from 'react-native';
import PropTypes from 'prop-types';
import {StackActions} from '@react-navigation/native';
import CodePush from 'react-native-code-push';

import Button from '@components/atoms/button';
import FormControl from '@components/atoms/formControl';
import FormLabel from '@components/atoms/formLabel';
import ImagePreview from '@components/atoms/imagePreview';
import OpacitySlider from '@components/molecules/settings/opacitySlider';
import ColorSchemeToggle from '@components/molecules/settings/colorSchemeToggle';
import SettingsContainer from '@components/atoms/settingsContainer';
import EpisodePreviewToggle from '@components/molecules/settings/episodePreviewToggle';

import images from '@assets/images';

import {getFile} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import {AL_ERROR_CODE} from '@utils/constants/errorCode';

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
      ToastAndroid.show(
        `Error Code ${AL_ERROR_CODE.HANDLE_FILE_CODE} : ${error}`,
        ToastAndroid.SHORT,
      );
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
    <ScrollView
      contentContainerStyle={{padding: 20, paddingBottom: 100}}
      showsVerticalScrollIndicator={false}>
      <Text
        style={{
          fontFamily: fonts.medium500,
          color: colors[state.theme || 'LIGHT'].TEXT,
        }}>
        Wallpaper
      </Text>
      <SettingsContainer>
        <FormControl>
          <FormLabel
            style={{color: colors[state.theme || 'LIGHT'].TEXT_SECONDARY}}>
            Gambar
          </FormLabel>
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
          <FormLabel
            style={{color: colors[state.theme || 'LIGHT'].TEXT_SECONDARY}}>
            Transparansi Wallpaper
          </FormLabel>
          <OpacitySlider
            wallpaperOpacityProps={{
              get: wallpaperOpacity,
              set: setWallpaperOpacity,
            }}
          />
        </FormControl>
      </SettingsContainer>
      <Text
        style={{
          fontFamily: fonts.medium500,
          color: colors[state.theme || 'LIGHT'].TEXT,
        }}>
        Tema
      </Text>
      <SettingsContainer>
        <ColorSchemeToggle />
      </SettingsContainer>

      <Text
        style={{
          fontFamily: fonts.medium500,
          color: colors[state.theme || 'LIGHT'].TEXT,
        }}>
        Lainnya
      </Text>

      <SettingsContainer>
        <EpisodePreviewToggle />
      </SettingsContainer>

      <FormControl style={{marginBottom: 5, marginTop: 10}}>
        <Button
          label="Simpan"
          onPress={() => {
            handleSubmit();
          }}
          backgroundColor={colors[state.theme].PRIMARY}
        />
      </FormControl>

      <FormControl>
        <Button
          label="Update Aplikasi"
          onPress={() => {
            CodePush.sync(
              {
                updateDialog: true,
                installMode: CodePush.InstallMode.IMMEDIATE,
              },
              status => {
                switch (status) {
                  case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                    ToastAndroid.show(
                      'Checking for updates.',
                      ToastAndroid.SHORT,
                    );
                    break;
                  case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    ToastAndroid.show(
                      'Downloading package.',
                      ToastAndroid.SHORT,
                    );
                    break;
                  case CodePush.SyncStatus.INSTALLING_UPDATE:
                    ToastAndroid.show('Installing update.', ToastAndroid.SHORT);
                    break;
                  case CodePush.SyncStatus.UP_TO_DATE:
                    ToastAndroid.show('Up-to-date.', ToastAndroid.SHORT);
                    break;
                  case CodePush.SyncStatus.UPDATE_INSTALLED:
                    ToastAndroid.show('Update installed.', ToastAndroid.SHORT);
                    break;
                }
              },
            );
          }}
          backgroundColor={colors[state.theme].RED}
          labelStyle={{
            color: 'white',
          }}
        />
      </FormControl>
    </ScrollView>
  );
};

SettingsForm.propTypes = {
  navigation: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
};

export default SettingsForm;
