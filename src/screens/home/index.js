import React, {useState} from 'react';

import {View, Dimensions, Text} from 'react-native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import WallpaperContainer from '@components/organisms/home/wallpaperContainer';
import Wallpaper from '@components/organisms/home/wallpaper';
import HomeContainer from '@components/organisms/home/homeContainer';
import CustomButton from '@components/atoms/customButton';
import AnimeCard from '@components/organisms/home/animeCard';

import images from '@assets/images';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import AnimeList from '@components/organisms/home/animeList';

const HomePage = ({navigation}) => {
  const [isAnimeOnList, setIsAnimeOnList] = useState(false);

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
        {!isAnimeOnList ? (
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
                setIsAnimeOnList(true);
              }}>
              Tambah Anime
            </CustomButton>
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
