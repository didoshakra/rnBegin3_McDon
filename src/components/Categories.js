import React, {useState} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {SIZES, COLORS} from '../../conctants';
import {categories} from '../categories';

const Categories = () => {
  const [active, setActive] = useState(null);
  return (
    <View>
      <Text
        style={{fontSize: SIZES.h2, fontWeight: 'bold', color: COLORS.white}}>
        Hey,
      </Text>
      <Text style={{fontSize: SIZES.h2, color: COLORS.white}}>
        Wot's up?+++
      </Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {categories.map((cat, idx) => (
          <View
            style={{
              width: '30%',
              marginBottom: 20,
            }}
            key={idx}>
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
                <Image
                  source={{uri: cat.image}}
                  style={{width: 40, height: 40}}
                />

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
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;
