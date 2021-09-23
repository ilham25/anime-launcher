import Layout from '@components/layout';
import React from 'react';
import {View, Text} from 'react-native';

const AnimeDetailpage = ({route, navigation}) => {
  const {title, episodes, directory, image} = route.params;
  console.log({title, episodes, directory, image});
  return (
    <Layout>
      <Text>aowekoeaw</Text>
    </Layout>
  );
};

export default AnimeDetailpage;
