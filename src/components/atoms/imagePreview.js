import React from 'react';

import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';

const ImagePreview = ({source, opacity = 1}) => {
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
            style={{width: '100%', height: 180, resizeMode: 'contain', opacity}}
          />
        )}
      </View>
    </View>
  );
};

ImagePreview.propTypes = {
  source: PropTypes.any,
  opacity: PropTypes.number,
};

export default ImagePreview;
