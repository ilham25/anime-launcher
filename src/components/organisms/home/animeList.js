import React, {useRef, useState} from 'react';

import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import BottomSheet from 'react-native-raw-bottom-sheet';

import AnimeCard from './animeCard';
import {useDefaultContext} from '@utils/contexts';
import MenuComponent from './menu';

const AnimeList = ({navigation}) => {
  const [state, _] = useDefaultContext();

  const bottomSheet = useRef();
  const [selectedAnime, setSelectedAnime] = useState({
    id: '',
    title: '',
  });

  const renderItem = ({item}) => (
    <AnimeCard
      title={item.title}
      episodes={item.episodes}
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
      menuOnPress={() => {
        setSelectedAnime(item);
        bottomSheet.current.open();
      }}
    />
  );

  return (
    <View>
      <FlatList
        data={state.animeList}
        renderItem={renderItem}
        keyExtractor={data => data.id}
        showsVerticalScrollIndicator={false}
      />
      <BottomSheet
        ref={bottomSheet}
        height={180}
        customStyles={{
          container: {
            padding: 20,
          },
        }}>
        <MenuComponent
          selectedAnimeProps={{get: selectedAnime, set: setSelectedAnime}}
          bottomSheetRef={bottomSheet}
        />
      </BottomSheet>
    </View>
  );
};

AnimeList.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func.isRequired}).isRequired,
};

export default AnimeList;
