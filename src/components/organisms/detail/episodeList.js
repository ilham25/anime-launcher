import React from 'react';

import {Text, FlatList, Pressable} from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

import {isEven} from '@utils/';
import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const EpisodeItem = ({data, title}) => {
  const handleOpenFile = async () => {
    try {
      SendIntentAndroid.openAppWithData(null, data?.file, 'video/*');
    } catch (error) {
      console.log('handleOpenFile err', error);
    }
  };

  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor: isEven(data?.id) ? 'white' : colors.GRAY_LIGHT,
      }}
      android_ripple={{color: colors.PRIMARY}}
      onPress={() => {
        handleOpenFile();
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

const EpisodeList = ({title, dataSource}) => {
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
