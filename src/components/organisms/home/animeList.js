import React from 'react';

import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import AnimeCard from './animeCard';
import {useDefaultContext} from '@utils/contexts';

const AnimeList = ({navigation}) => {
  const [state, _] = useDefaultContext();

  const renderItem = ({item}) => (
    <AnimeCard
      title={item.title}
      // episodes={item.episodes}
      directory={item.directory}
      image={item.image}
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
      data={state.animeList}
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
