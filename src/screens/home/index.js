import React from 'react';

import {Text, Dimensions} from 'react-native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import WallpaperContainer from '@components/organisms/home/wallpaperContainer';
import Wallpaper from '@components/organisms/home/wallpaper';
import HomeContainer from '@components/organisms/home/homeContainer';
import Button from '@components/atoms/button';
import AnimeList from '@components/organisms/home/animeList';
import CustomFab from '@components/atoms/customFab';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const Screen = Dimensions.get('screen');

const HomePage = ({navigation}) => {
  const [state, _] = useDefaultContext();

  return (
    <Layout>
      <Header
        title="Daftar anime kamu"
        brand
        right={{
          onPress: () => {
            navigation.navigate('App', {
              screen: 'SettingsPage',
            });
          },
          name: 'settings',
        }}
      />
      <WallpaperContainer>
        <Wallpaper source={state.wallpaper} opacity={state.wallpaperOpacity} />
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
                color: colors[state.theme].BLACK,
                textAlign: 'center',
                width: 351,
              }}>
              Sepertinya kamu belum nambahin anime kamu kesini deh
            </Text>
            <Button
              label="Yuk tambah!"
              style={{marginTop: 10}}
              onPress={() => {
                navigation.navigate('App', {
                  screen: 'FormPage',
                });
              }}
              backgroundColor={colors[state.theme].PRIMARY}
            />
          </HomeContainer>
        ) : (
          <HomeContainer>
            <AnimeList navigation={navigation} />
            <CustomFab
              style={{
                bottom: 20,
                right: Screen.width * 0.5,
                transform: [{translateX: Screen.width * 0.1}],
              }}
              icon="add"
              onPress={() => {
                navigation.navigate('App', {
                  screen: 'FormPage',
                });
              }}
            />
          </HomeContainer>
        )}
      </WallpaperContainer>
    </Layout>
  );
};

export default HomePage;
