import React from 'react';

import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import fonts from '@utils/fonts';
import colors from '@utils/themes/colors';
import {useDefaultContext} from '@utils/contexts';

const ImagePreview = ({source, opacity = 1}) => {
  const [{theme}, _] = useDefaultContext();
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: colors[theme ?? 'LIGHT'].GRAY_LIGHT,
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
              color: colors[theme ?? 'LIGHT'].GRAY,
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
