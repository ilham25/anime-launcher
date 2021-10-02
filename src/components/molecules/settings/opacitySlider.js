import React, {useState} from 'react';

import {View, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PropTypes from 'prop-types';

import colors from '@utils/themes/colors';
import fonts from '@utils/fonts';
import {useDefaultContext} from '@utils/contexts';

const OpacitySlider = ({wallpaperOpacityProps}) => {
  const [{theme}, _] = useDefaultContext();
  const {get: wallpaperOpacity, set: setWallpaperOpacity} =
    wallpaperOpacityProps;

  const [opacity, setOpacity] = useState(wallpaperOpacity * 100);
  return (
    <View
      style={{
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors[theme ?? 'LIGHT'].GRAY_LIGHT,
        paddingTop: 20,
        borderRadius: 4,
      }}>
      <Text style={{fontFamily: fonts.regular400, color: colors[theme].TEXT}}>
        {opacity}%
      </Text>
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
          backgroundColor: colors[theme ?? 'LIGHT'].PRIMARY,
        }}
        selectedStyle={{
          backgroundColor: colors[theme ?? 'LIGHT'].PRIMARY,
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

OpacitySlider.propTypes = {
  wallpaperOpacityProps: PropTypes.shape({
    get: PropTypes.number.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};

export default OpacitySlider;
