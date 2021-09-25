import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import WallpaperContainer from '@components/organisms/home/wallpaperContainer';
import Wallpaper from '@components/organisms/home/wallpaper';
import HomeContainer from '@components/organisms/home/homeContainer';
import Button from '@components/atoms/button';

import images from '@assets/images';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import AnimeList from '@components/organisms/home/animeList';
import {useDefaultContext} from '@utils/contexts';

const HomePage = ({navigation}) => {
  const [state, _] = useDefaultContext();

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
        {!state?.animeList?.length > 0 ? (
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
            <Button
              style={{marginTop: 10}}
              onPress={() => {
                navigation.navigate('App', {
                  screen: 'FormPage',
                });
              }}
              backgroundColor={colors.PRIMARY}>
              Tambah Anime
            </Button>
          </HomeContainer>
        ) : (
          <HomeContainer>
            <AnimeList navigation={navigation} />
          </HomeContainer>
        )}
      </WallpaperContainer>
    </Layout>
  );
};

export default HomePage;
