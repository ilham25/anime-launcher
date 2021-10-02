import React from 'react';

import {View, Text, Pressable, Image} from 'react-native';
import PropTypes from 'prop-types';

import CustomFab from '@components/atoms/customFab';

import images from '@assets/images';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const AnimeCard = ({
  title,
  episodes,
  directory,
  image,
  onPress = () => {},
  menuOnPress = () => {},
}) => {
  return (
    <View
      style={{
        elevation: 1,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,
        position: 'relative',
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
            {episodes || '-'} Episode
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular400,
              color: colors.GRAY,
              fontSize: 10,
              marginTop: 10,
            }}
            numberOfLines={2}>
            {directory}
          </Text>
        </View>
        <View style={{width: 140}}>
          <Image
            source={image ? {uri: `file://${image}`} : images.thumbnail}
            style={{width: 140, height: 135, resizeMode: 'cover'}}
          />
        </View>
      </Pressable>
      <CustomFab
        style={{top: 5, right: 5}}
        icon="more-vert"
        onPress={menuOnPress}
        size={20}
        small
        backgroundColor={colors.RED}
      />
    </View>
  );
};

AnimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  episodes: PropTypes.any,
  directory: PropTypes.string.isRequired,
  image: PropTypes.any,
  onPress: PropTypes.func.isRequired,
  menuOnPress: PropTypes.func.isRequired,
};

export default AnimeCard;
