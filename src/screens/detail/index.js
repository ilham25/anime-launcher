import React, {useEffect, useState} from 'react';

import {View, Dimensions, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SendIntentAndroid from 'react-native-send-intent';

import CustomFab from '@components/atoms/customFab';
import Layout from '@components/layout';
import Header from '@components/layout/header';
import Description from '@components/organisms/detail/description';
import EpisodeList from '@components/organisms/detail/episodeList';
import colors from '@utils/themes/colors';
import {getEpisodes} from '@utils/';
import images from '@assets/images';
import {useDefaultContext} from '@utils/contexts';

const Screen = Dimensions.get('screen');

const AnimeDetailpage = ({route, navigation}) => {
  const {animeId} = route.params || {};
  const [state, _] = useDefaultContext();

  const anime = state.animeList.find(anime => anime.id === animeId);

  const {title, episodes, directory, image, history} = anime || {};

  const [dataSource, setDataSource] = useState([]);

  const handleEpisodesList = async () => {
    try {
      const eps = await getEpisodes(directory);
      setDataSource(eps.map((item, idx) => ({id: idx, file: item})));
    } catch (error) {
      console.log('handleEpisodesList err', error);
    }
  };

  const handleOpenFile = () => {
    SendIntentAndroid.openAppWithData(null, dataSource[0].file, 'video/*');
  };

  useEffect(() => {
    handleEpisodesList();
  }, []);

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
          source={
            image
              ? {
                  uri: `file://${image}`,
                }
              : images.thumbnail
          }
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
            title=""
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
        <Description title={title} episodes={episodes} history={history} />
        <EpisodeList title={title} dataSource={dataSource} anime={anime} />
        <CustomFab
          style={{top: -37.5, right: Screen.width * 0.1}}
          icon="play-arrow"
          onPress={() => {
            handleOpenFile();
          }}
        />
      </View>
    </Layout>
  );
};

export default AnimeDetailpage;
