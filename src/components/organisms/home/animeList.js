import React from 'react';

import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import AnimeCard from './animeCard';

const DATA = [
  {
    id: 1,
    title: 'Tonikaku Kawaii',
    episodes: 12,
    directory: '/storage/emulated/0/tonikawa',
    image: '',
  },
  {
    id: 2,
    title: 'Horimiya',
    episodes: 13,
    directory: '/storage/emulated/0/horimiya',
    image: '',
  },
  {
    id: 3,
    title: 'Tonikaku Kawaii',
    episodes: 12,
    directory: '/storage/emulated/0/tonikawa',
    image: '',
  },
  {
    id: 4,
    title: 'Tonikaku Kawaii',
    episodes: 12,
    directory: '/storage/emulated/0/tonikawa',
    image: '',
  },
  {
    id: 5,
    title: 'Tonikaku Kawaii',
    episodes: 12,
    directory: '/storage/emulated/0/tonikawa',
    image: '',
  },
  {
    id: 6,
    title: 'Tonikaku Kawaii',
    episodes: 12,
    directory: '/storage/emulated/0/tonikawa',
    image: '',
  },
];

const AnimeList = ({navigation}) => {
  const renderItem = ({item}) => (
    <AnimeCard
      title={item.title}
      episodes={item.episodes}
      directory={item.directory}
      //   image={item.image}
      onPress={() => {
        navigation.navigate('App', {
          screen: 'AnimeDetailPage',
          params: {
            title: item.title,
            episodes: item.episodes,
            directory: item.directory,
            image: item.image,
          },
        });
      }}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={data => data.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

AnimeList.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func.isRequired}).isRequired,
};

export default AnimeList;
