import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Popular from './src/components/Popular';
import {COLORS} from './conctants';

const Cat = () => {
  return (
    <View style={{padding: 24, paddingTop: 50,backgroundColor:COLORS.black }}>
      <Header />
      <Categories />
      <Popular />
    </View>
  );
};

export default Cat;
