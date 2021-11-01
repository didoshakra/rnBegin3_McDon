import React from 'react';
import {View, Text,Image} from 'react-native';
import {SIZES, COLORS} from '../../conctants';

const ProductItem = ({pop}) => {
  return (
    <View
      style={{
        width: '30%',
        marginBottom: 20,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: pop.image}} style={{width: 40, height: 40}} />
        <Text
          style={{
            fontSize: SIZES.h4,
            marginTop: 10,
            textAlign: 'center',
            color: COLORS.white,
          }}>
          {pop.name}
        </Text>
        <Text
          style={{
            fontSize: SIZES.h4,
            marginTop: 10,
            textAlign: 'center',
            color: COLORS.white,
          }}>
          {pop.price}₴
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
