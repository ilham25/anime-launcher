import React, {useState, useEffect} from 'react';

import {isEven} from '@utils/';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {View, Text, FlatList, Pressable} from 'react-native';
import {getEpisodes} from '@utils/';

const EpisodeItem = ({data, title}) => {
  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor: isEven(data?.id) ? 'white' : colors.GRAY_LIGHT,
      }}
      android_ripple={{color: colors.PRIMARY}}
      onPress={() => {
        console.log(data?.file);
      }}>
      <Text
        style={{
          fontFamily: fonts.regular400,
          fontSize: 14,
          color: colors.PRIMARY,
        }}>
        {title} - Episode {data?.id + 1}
      </Text>
    </Pressable>
  );
};

const EpisodeList = ({title, directory}) => {
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

  const renderItem = ({item}) => <EpisodeItem data={item} title={title} />;

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
