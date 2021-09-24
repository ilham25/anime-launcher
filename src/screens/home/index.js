import React, {useState} from 'react';

import {View, Dimensions, Text, PermissionsAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

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

  const handlePickDirectory = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const getDirNameRegex = /%3A/g;
        const response = await DocumentPicker.pickDirectory();

        const externalDir = encodeURI(RNFS.ExternalStorageDirectoryPath + '/');
        const selectedDir = response.uri.split(getDirNameRegex)[1];

        const fullDirName = decodeURIComponent(externalDir + selectedDir);

        // RNFS.readDir(fullDirName)
        //   .then(result => {
        //     console.log('GOT RESULT', result[0].name);
        //     return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        //   })
        //   .then(statResult => {
        //     console.log(statResult);
        //     if (statResult[0].isFile()) {
        //       return RNFS.readFile(statResult[1], 'utf8');
        //     }
        //     return 'no file';
        //   })
        //   .then(contents => {
        //     console.log(contents);
        //   })
        //   .catch(err => {
        //     console.log(err.message, err.code);
        //   });

        const rd = await RNFS.readDir(fullDirName);

        rd.forEach(read => {
          if (read.isFile()) {
            console.log(read.name);
          }
        });
      }
    } catch (error) {
      console.log('err', error);
    }
  };

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
                // setIsAnimeOnList(true);
                handlePickDirectory();
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
