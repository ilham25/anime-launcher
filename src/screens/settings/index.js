import React from 'react';

import {StackActions} from '@react-navigation/native';

import Layout from '@components/layout';
import Header from '@components/layout/header';

const SettingsPage = ({navigation}) => {
  return (
    <Layout scrollable>
      <Header
        title="Pengaturan"
        left={{
          name: 'close',
          onPress: () => {
            navigation.dispatch(StackActions.pop(1));
          },
        }}
      />
    </Layout>
  );
};

export default SettingsPage;
