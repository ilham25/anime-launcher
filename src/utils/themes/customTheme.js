import {DefaultTheme, configureFonts} from 'react-native-paper';
import colors from '@utils/themes/colors';

const font = {
  regular: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Poppins-Light',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'Poppins-Thin',
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
};

const fontConfig = {
  android: font,
  ios: font,
};

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: colors.PRIMARY,
    text: colors.BLACK,
    // disabled: colors.GRAY_LIGHT,
    // placeholder: colors.GRAY_LIGHT,
    // error: colors.DANGER,
    backgroundColor: colors.WHITE,
  },
};
