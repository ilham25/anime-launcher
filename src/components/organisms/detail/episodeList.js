import {isEven} from '@utils/';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

const DATA = [
  {
    id: 1,
    file: '',
  },
  {
    id: 2,
    file: '',
  },
  {
    id: 3,
    file: '',
  },
  {
    id: 4,
    file: '',
  },
  {
    id: 5,
    file: '',
  },
  {
    id: 6,
    file: '',
  },
  {
    id: 7,
    file: '',
  },
  {
    id: 8,
    file: '',
  },
  {
    id: 9,
    file: '',
  },
  {
    id: 10,
    file: '',
  },
  {
    id: 11,
    file: '',
  },
];

const EpisodeItem = ({data, title}) => {
  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor: isEven(data?.id) ? 'white' : colors.GRAY_LIGHT,
      }}
      android_ripple={{color: colors.PRIMARY}}
      onPress={() => {}}>
      <Text
        style={{
          fontFamily: fonts.regular400,
          fontSize: 14,
          color: colors.PRIMARY,
        }}>
        {title} - Episode {data?.id}
      </Text>
    </Pressable>
  );
};

const EpisodeList = ({title}) => {
  const renderItem = ({item}) => <EpisodeItem data={item} title={title} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={data => data.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 20}}
    />
  );
};

export default EpisodeList;
