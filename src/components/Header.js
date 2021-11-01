import React from 'react';
import {View, Image, Text} from 'react-native';
import IconMcDonald from '../../icons/IconMcDonald';
import IconShoppingCart from '../../icons/IconShoppingCart';
import {SIZES, COLORS} from '../../conctants';

const Header = () => {
  return (
    <View
      style={{
        // backgroundColor: 'green',
        height: 70,
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      {/* <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        onPress={() => Linking.openURL('http://google.com')}
        style={{color: 'Green', width: 50, height: 57}}
      /> */}
      <IconMcDonald width={'50'} height={'57'} colorFill={COLORS.primary} />
      <Text
        style={{
          color: COLORS.secondary,
          textAlign: 'center',
          fontSize: 24,
          fontWeight: '700',
        }}>
        McDonalds
      </Text>
      <IconShoppingCart width={'50'} height={'50'} colorFill={COLORS.primary} />
      {/* <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/34/34627.png',
        }}
        onPress={() => Linking.openURL('http://google.com')}
        style={{color: 'red', width: 50, height: 57}}
      /> */}
    </View>
  );
};

export default Header;
