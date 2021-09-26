import React, {useState} from 'react';

import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';

const OpacitySlider = ({wallpaperOpacityProps}) => {
  const {get: wallpaperOpacity, set: setWallpaperOpacity} =
    wallpaperOpacityProps;

  const [opacity, setOpacity] = useState(wallpaperOpacity * 100);
  return (
    <View
      style={{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.GRAY_LIGHT,
        paddingTop: 20,
      }}>
      <Text style={{fontFamily: fonts.regular400}}>{opacity}%</Text>
      <MultiSlider
        values={[opacity]}
        min={0}
        max={100}
        onValuesChange={val => {
          setOpacity(val);
        }}
        onValuesChangeFinish={val => {
          setWallpaperOpacity(val / 100);
        }}
        containerStyle={{
          width: '100%',
        }}
        markerStyle={{
          backgroundColor: colors.PRIMARY,
        }}
        selectedStyle={{
          backgroundColor: colors.PRIMARY,
        }}
        sliderLength={300}
        touchDimensions={{
          height: 200,
          width: 200,
          slipDisplacement: 300,
        }}
      />
    </View>
  );
};

export default OpacitySlider;
