import React from 'react';

import {Text, FlatList, Pressable, View} from 'react-native';
import PropTypes from 'prop-types';

import {isEven} from '@utils/';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const EpisodeItem = ({
  data,
  anime,
  episodePreviewProps,
  selectedEpisodeIndexProps,
}) => {
  const [{theme, episodePreview: isEpisodePreview}, _] = useDefaultContext();

  const {set: setEpisodePreview} = episodePreviewProps;
  const {get: selectedEpisodeIndex, set: setSelectedEpisodeIndex} =
    selectedEpisodeIndexProps;

  const isSelected = data?.id === selectedEpisodeIndex;

  return (
    <View style={{marginBottom: 5, borderRadius: 4, overflow: 'hidden'}}>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: isSelected
            ? colors[theme ?? 'LIGHT'].PRIMARY
            : isEven(data?.id)
            ? colors[theme ?? 'LIGHT'].WHITE
            : colors[theme ?? 'LIGHT'].GRAY_LIGHT,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        android_ripple={{color: colors[theme ?? 'LIGHT'].PRIMARY}}
        onPress={() => {
          isEpisodePreview && setEpisodePreview(data?.file);
          setSelectedEpisodeIndex(data?.id);
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 14,
              color: isSelected
                ? colors[theme ?? 'LIGHT'].WHITE
                : colors[theme ?? 'LIGHT'].PRIMARY,
              maxWidth: 200,
            }}
            numberOfLines={2}>
            {anime.title}
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 14,
              color: isSelected
                ? colors[theme ?? 'LIGHT'].WHITE
                : colors[theme ?? 'LIGHT'].PRIMARY,
              marginLeft: 5,
            }}>
            - Episode {data?.id + 1}
          </Text>
        </View>

        {anime.history.includes(data?.id + 1) && (
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: colors[theme ?? 'LIGHT'].RED,
              borderRadius: 10,
            }}></View>
        )}
      </Pressable>
    </View>
  );
};

const EpisodeList = ({
  dataSource,
  anime,
  episodePreviewProps,
  selectedEpisodeIndexProps,
}) => {
  const renderItem = ({item}) => (
    <EpisodeItem
      data={item}
      anime={anime}
      episodePreviewProps={episodePreviewProps}
      selectedEpisodeIndexProps={selectedEpisodeIndexProps}
    />
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

EpisodeList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  anime: PropTypes.object.isRequired,
  episodePreviewProps: PropTypes.shape({
    get: PropTypes.string,
    set: PropTypes.func.isRequired,
  }).isRequired,
  selectedEpisodeIndexProps: PropTypes.shape({
    get: PropTypes.number.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};

EpisodeItem.propTypes = {
  data: PropTypes.object.isRequired,
  anime: PropTypes.object.isRequired,
  episodePreviewProps: PropTypes.shape({
    get: PropTypes.string,
    set: PropTypes.func.isRequired,
  }).isRequired,
  selectedEpisodeIndexProps: PropTypes.shape({
    get: PropTypes.number.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};

export default EpisodeList;
