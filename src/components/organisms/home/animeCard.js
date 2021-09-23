import React from 'react';

import {View, Text, Pressable, Image} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const AnimeCard = ({title, episodes, directory, image, onPress = () => {}}) => {
  return (
    <View
      style={{
        elevation: 1,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,
      }}>
      <Pressable
        style={{
          backgroundColor: 'white',
          height: 135,
          display: 'flex',
          flexDirection: 'row',
        }}
        android_ripple={{color: colors.PRIMARY}}
        onPress={onPress}>
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 16,
              color: colors.BLACK,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 12,
              color: colors.PRIMARY,
            }}>
            {episodes} Episode
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular400,
              color: colors.GRAY,
              fontSize: 10,
              marginTop: 10,
            }}>
            {directory}
          </Text>
        </View>
        <View style={{width: 140}}>
          <Image
            source={
              image
                ? image
                : {
                    uri: 'https://asset.kompas.com/crops/TxoQggK3Fls2sXUGBgDm0OUR1nI=/189x0:662x315/750x500/data/photo/2020/12/23/5fe2d8471b64a.png',
                  }
            }
            style={{width: 140, height: 135, resizeMode: 'cover'}}
          />
        </View>
      </Pressable>
    </View>
  );
};

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  episodes: PropTypes.any.isRequired,
  directory: PropTypes.string.isRequired,
  image: PropTypes.any,
  onPress: PropTypes.func.isRequired,
};

export default AnimeCard;
