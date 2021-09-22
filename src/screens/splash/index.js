import images from '@assets/images';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Window = Dimensions.get('window');

const SplashScreen = () => {
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
