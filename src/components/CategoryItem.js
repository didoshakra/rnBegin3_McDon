import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {SIZES, COLORS} from '../../conctants';

const CategoryItem = ({cat, idx}) => {
  const [active, setActive] = useState(null);

  return (
    // <View
    //   style={{
    //     width: '30%',
    //     marginBottom: 20,
    //   }}
    //   key={idx}>
    <TouchableHighlight
      underlayColor={COLORS.secondary}
      onPress={() => setActive(idx)}
      style={{
        height: 100,
        borderRadius: SIZES.radius,
        backgroundColor: active == idx ? COLORS.secondary : COLORS.gray,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: cat.image}} style={{width: 40, height: 40}} />

        <Text
          style={{
            fontSize: SIZES.h4,
            marginTop: 10,
            textAlign: 'center',
            color: COLORS.white,
          }}>
          {cat.name}
        </Text>
      </View>
    </TouchableHighlight>
    // </View>
  );
};

export default CategoryItem;
