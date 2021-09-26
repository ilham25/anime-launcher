import React from 'react';

import {View, Text, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '@components/atoms/button';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const MenuComponent = ({selectedAnimeProps, bottomSheetRef}) => {
  const [_, dispatch] = useDefaultContext();
  const navigation = useNavigation();

  const {get: selected} = selectedAnimeProps;

  const handleDelete = () => {
    dispatch({type: 'DELETE_ANIME', anime: selected});
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
          color: colors.BLACK,
        }}
        numberOfLines={2}>
        {selected.title}
      </Text>
      <View>
        <Button
          label="Hapus"
          onPress={() => {
            handleDelete();
          }}
          backgroundColor={colors.RED}
        />
        <Button
          label="Ubah"
          onPress={() => {
            handleEdit();
          }}
        />
      </View>
    </View>
  );
};

export default MenuComponent;
