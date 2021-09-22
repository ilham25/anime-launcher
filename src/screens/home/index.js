import React from 'react';

import Layout from '@components/layout';
import Header from '@components/layout/header';

const HomePage = () => {
  return (
    <Layout>
      <Header
        title="List anime kamu"
        left={{
          onPress: () => {
            console.log('oawke');
          },
        }}
        right={{
          onPress: () => {
            console.log('kekw');
          },
        }}
      />
    </Layout>
  );
};

export default HomePage;
