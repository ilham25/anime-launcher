module.exports = api => {
  api.cache(true);

  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@navigations': './src/navigations/',
          '@screens': './src/screens/',
          '@utils': './src/utils/',
        },
      },
    ],
  ];

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
