import React from 'react';
import {StackActions} from '@react-navigation/native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import InputForm from '@components/organisms/home/inputForm';

const FormPage = ({navigation}) => {
  return (
    <Layout scrollable>
      <Header
        title="Tambah Anime"
        left={{
          name: 'close',
          onPress: () => {
            navigation.dispatch(StackActions.pop(1));
          },
        }}
      />
      <InputForm navigation={navigation} />
    </Layout>
  );
};

export default FormPage;
