import React from 'react';

import {Text, FlatList, Pressable, View} from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

import {isEven} from '@utils/';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const EpisodeItem = ({data, title, anime}) => {
  const [_, dispatch] = useDefaultContext();

  const handleOpenFile = async () => {
    SendIntentAndroid.openAppWithData(null, data?.file, 'video/*');
  };

  const handleInsertHistory = () => {
    dispatch({
      type: 'animeList',
      payload: {
        type: 'CREATE_ANIME_HISTORY',
        animeId: anime.id,
        selectedEpisode: data.id + 1,
      },
    });
  };

  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor: isEven(data?.id) ? 'white' : colors.GRAY_LIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      android_ripple={{color: colors.PRIMARY}}
      onPress={() => {
        handleOpenFile();
        handleInsertHistory();
      }}>
      <Text
        style={{
          fontFamily: fonts.regular400,
          fontSize: 14,
          color: colors.PRIMARY,
          maxWidth: 300,
        }}>
        {title} - Episode {data?.id + 1}
      </Text>
      {anime.history.includes(data?.id + 1) && (
        <View
          style={{
            height: 10,
            width: 10,
            backgroundColor: colors.RED,
            borderRadius: 10,
          }}></View>
      )}
    </Pressable>
  );
};

const EpisodeList = ({title, dataSource, anime}) => {
  const renderItem = ({item}) => (
    <EpisodeItem data={item} title={title} anime={anime} />
  );

  return (
    <FlatList
      data={dataSource}
      renderItem={renderItem}
      keyExtractor={data => data.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 20}}
    />
  );
};

export default EpisodeList;
