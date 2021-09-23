import CustomFab from '@components/atoms/customFab';
import Layout from '@components/layout';
import Header from '@components/layout/header';
import Description from '@components/organisms/detail/description';
import EpisodeList from '@components/organisms/detail/episodeList';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Dimensions, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Screen = Dimensions.get('screen');

const AnimeDetailpage = ({route, navigation}) => {
  const {title, episodes, directory, image} = route.params;
  console.log({title, episodes, directory, image});
  return (
    <Layout fullscreen>
      <View
        style={{
          height: Screen.height * 0.4,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: 'black',
        }}>
        <Image
          source={{
            uri: 'https://static.zerochan.net/Kamisato.Ayaka.full.3359066.jpg',
          }}
          style={{
            height: Screen.height * 0.4,
            width: Screen.width,
            resizeMode: 'cover',
            opacity: 0.75,
          }}
        />
        <SafeAreaView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
          <Header
            fullscreen
            style={{
              width: Screen.width,
            }}
            left={{
              name: 'arrow-back',
              color: 'white',
              onPress: () => {
                navigation.goBack();
              },
            }}
          />
        </SafeAreaView>
      </View>
      <View
        style={{
          height: Screen.height * 0.6,
          backgroundColor: colors.WHITE,
          padding: 20,
          position: 'relative',
        }}>
        <Description title={title} episodes={episodes} directory={directory} />
        <EpisodeList title={title} />
        <CustomFab
          style={{top: -37.5, right: Screen.width * 0.1}}
          icon="play-arrow"
        />
      </View>
    </Layout>
  );
};

export default AnimeDetailpage;
