import React, {useEffect} from 'react';

import {View, Image, StatusBar, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import images from '@assets/images';
import colors from '@utils/themes/colors';
import {getStorage} from '@utils/';
import {useDefaultContext} from '@utils/contexts';

const Window = Dimensions.get('window');

const SplashScreen = () => {
  const [_, dispatch] = useDefaultContext();

  const handleStorage = async () => {
    try {
      const getCurrentStorage = await getStorage();

      dispatch({
        type: 'INITIAL',
        animeList: !getCurrentStorage ? [] : JSON.parse(getCurrentStorage),
      });
    } catch (error) {
      console.log('handleStorage err', error);
    }
  };

  useEffect(() => {
    handleStorage();
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
