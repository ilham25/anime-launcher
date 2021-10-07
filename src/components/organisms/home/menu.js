import React from 'react';

import {View, Text, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import Button from '@components/atoms/button';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const MenuComponent = ({
  selectedAnimeProps,
  bottomSheetRef,
  showClearHistory,
}) => {
  const [{theme}, dispatch] = useDefaultContext();
  const navigation = useNavigation();

  const {get: selected} = selectedAnimeProps;

  const handleDelete = () => {
    dispatch({
      type: 'animeList',
      payload: {type: 'DELETE_ANIME', anime: selected},
    });
    ToastAndroid.show('Berhasil hapus anime', ToastAndroid.SHORT);
    bottomSheetRef.current.close();
  };

  const handleEdit = () => {
    navigation.navigate('App', {
      screen: 'FormPage',
      params: {
        type: 'edit',
        selected,
      },
    });
    bottomSheetRef.current.close();
  };

  const handleClearHistory = () => {
    dispatch({
      type: 'animeList',
      payload: {
        type: 'CLEAR_ANIME_HISTORY',
        animeId: selected.id,
      },
    });
    ToastAndroid.show('Berhasil hapus history', ToastAndroid.SHORT);

    bottomSheetRef.current.close();
  };

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontFamily: fonts.semiBold600,
          fontSize: 18,
          color: colors[theme ?? 'LIGHT'].BLACK,
        }}
        numberOfLines={2}>
        {selected.title}
      </Text>
      <View>
        {!showClearHistory && (
          <Button
            label="Hapus"
            onPress={() => {
              handleDelete();
            }}
            backgroundColor={colors[theme ?? 'LIGHT'].RED}
          />
        )}
        <Button
          label="Ubah"
          onPress={() => {
            handleEdit();
          }}
        />
        {showClearHistory && (
          <Button
            label="Bersihkan History"
            onPress={() => {
              handleClearHistory();
            }}
            backgroundColor={colors[theme ?? 'LIGHT'].PRIMARY}
          />
        )}
      </View>
    </View>
  );
};

MenuComponent.propTypes = {
  selectedAnimeProps: PropTypes.shape({
    get: PropTypes.object.isRequired,
    set: PropTypes.func,
  }).isRequired,
  bottomSheetRef: PropTypes.object.isRequired,
  showClearHistory: PropTypes.bool,
};

export default MenuComponent;
