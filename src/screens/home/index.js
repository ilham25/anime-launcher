import React from 'react';

import {View, Dimensions, Text} from 'react-native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import images from '@assets/images';
import WallpaperContainer from '@components/organisms/home/wallpaperContainer';
import Wallpaper from '@components/organisms/home/wallpaper';
import HomeContainer from '@components/organisms/home/homeContainer';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import CustomButton from '@components/atoms/customButton';

const HomePage = () => {
  return (
    <Layout>
      <Header
        title="List anime kamu"
        left={{
          onPress: () => {
            console.log('oawke');
          },
        }}
        right={{
          onPress: () => {
            console.log('kekw');
          },
        }}
      />
      <WallpaperContainer>
        <Wallpaper source={images.wpExample} />
        <HomeContainer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 24,
              color: colors.BLACK,
              textAlign: 'center',
              width: 351,
            }}>
            Kayaknya kamu belum masukin anime ke aplikasi ini
          </Text>
          <CustomButton
            style={{borderRadius: 10, marginTop: 10}}
            onPress={() => {
              console.log('tambah');
            }}>
            Tambah Anime
          </CustomButton>
        </HomeContainer>
      </WallpaperContainer>
    </Layout>
  );
};

export default HomePage;
