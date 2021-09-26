import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

const Screen = Dimensions.get('screen');

const ImagePreview = ({source}) => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: colors.GRAY_LIGHT,
          alignItems: 'center',
          justifyContent: 'center',
          height: 180,
          marginBottom: 5,
        }}>
        {!source ? (
          <Text
            style={{
              fontFamily: fonts.regular400,
              fontSize: 12,
              color: colors.GRAY,
            }}>
            Preview
          </Text>
        ) : (
          <Image
            source={source}
            style={{width: '100%', height: 180, resizeMode: 'contain'}}
          />
        )}
      </View>
    </View>
  );
};

export default ImagePreview;
