import React from 'react';
import {StackActions} from '@react-navigation/native';

import Layout from '@components/layout';
import Header from '@components/layout/header';
import InputForm from '@components/organisms/home/inputForm';

const FormPage = ({route, navigation}) => {
  const {type, selected} = route.params;
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
      <InputForm navigation={navigation} type={type} selected={selected} />
    </Layout>
  );
};

export default FormPage;
