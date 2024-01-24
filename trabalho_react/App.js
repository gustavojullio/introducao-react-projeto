import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Produto from './src/telas/Produto';
import mock from './src/mocks/produto';


export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Produto {...mock} />
    </SafeAreaView>
  );
}

