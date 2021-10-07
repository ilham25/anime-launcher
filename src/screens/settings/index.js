import React from 'react';

import {StackActions} from '@react-navigation/native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import SettingsForm from '@components/organisms/settings/settingsForm';

const SettingsPage = ({navigation}) => {
  return (
    <Layout>
      <Header
        title="Pengaturan"
        left={{
          name: 'close',
          onPress: () => {
            navigation.dispatch(StackActions.pop(1));
          },
        }}
      />
      <SettingsForm navigation={navigation} />
    </Layout>
  );
};

export default SettingsPage;
