import React, {useEffect} from 'react';

import {View, Image, StatusBar, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import images from '@assets/images';
import colors from '@utils/themes/colors';
import {getStorage} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import {setStorage} from '@utils/';

const Window = Dimensions.get('window');

const SplashScreen = () => {
  const [_, dispatch] = useDefaultContext();

  const handleStorage = async () => {
    try {
      const getStorage = await getStorage();

      if (getStorage) {
        if (getStorage.animeList) {
          dispatch({
            type: 'animeList',
            payload: {
              type: 'INITIAL',
              animeList:
                getStorage.animeList.length === 0 ? [] : getStorage.animeList,
            },
          });
        }

        if (getStorage.wallpaper) {
          dispatch({
            type: 'wallpaper',
            payload: {
              type: 'INITIAL',
              wallpaper: !getStorage.wallpaper ? '' : getStorage.wallpaper,
            },
          });
        }
        if (getStorage.wallpaperOpacity) {
          dispatch({
            type: 'wallpaperOpacity',
            payload: {
              type: 'INITIAL',
              wallpaperOpacity: !getStorage.wallpaperOpacity
                ? 0.1
                : getStorage.wallpaperOpacity,
            },
          });
        }
      }
    } catch (error) {
      console.log('handleStorage err', error);
    }
  };

  useEffect(() => {
    handleStorage();

    return () => {};
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY} />
      <View
        style={{
          backgroundColor: colors.PRIMARY,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: Window.height,
        }}>
        <Image
          source={images.splashImg}
          style={{height: 170, width: 270, resizeMode: 'contain'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
