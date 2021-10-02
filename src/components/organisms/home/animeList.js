import React, {useRef, useState} from 'react';

import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import BottomSheet from 'react-native-raw-bottom-sheet';

import AnimeCard from './animeCard';
import MenuComponent from './menu';

import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';

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
            animeId: item.id,
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
            backgroundColor: colors[state.theme ?? 'LIGHT'].BACKGROUND,
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
