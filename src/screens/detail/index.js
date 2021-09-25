import React, {useEffect, useState} from 'react';

import {View, Dimensions, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomFab from '@components/atoms/customFab';
import Layout from '@components/layout';
import Header from '@components/layout/header';
import Description from '@components/organisms/detail/description';
import EpisodeList from '@components/organisms/detail/episodeList';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {getEpisodes} from '@utils/';

const Screen = Dimensions.get('screen');

const AnimeDetailpage = ({route, navigation}) => {
  const {title, episodes, directory, image} = route.params;

  const [dataSource, setDataSource] = useState([]);

  const handleEpisodesList = async () => {
    try {
      const eps = await getEpisodes(directory);
      setDataSource(eps.map((item, idx) => ({id: idx, file: item})));
    } catch (error) {
      console.log('handleEpisodesList err', error);
    }
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
          source={{
            uri: `file://${image}`,
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
        <Description title={title} episodes={episodes} directory={directory} />
        <EpisodeList title={title} dataSource={dataSource} />
        <CustomFab
          style={{top: -37.5, right: Screen.width * 0.1}}
          icon="play-arrow"
          onPress={() => {
            console.log('awoe', dataSource[0].file);
          }}
        />
      </View>
    </Layout>
  );
};

export default AnimeDetailpage;
