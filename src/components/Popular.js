import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {SIZES, COLORS} from '../../conctants';
import {popular} from '../popular_db';
import ProductItem from './ProductItem';

const Popular = () => {
  // const renderPop = ({pop,idx}) => {
  //   return(
  //   <View
  //     style={{
  //       width: '30%',
  //       marginBottom: 20,
  //     }}
  //     key={idx}>
  //         <View style={{alignItems: 'center'}}>
  //       <Image source={{uri: pop.image}} style={{width: 40, height: 40}} />
  //       <Text
  //         style={{
  //           fontSize: SIZES.h4,
  //           marginTop: 10,
  //           textAlign: 'center',
  //           color: COLORS.white,
  //         }}>
  //         {pop.name}
  //       </Text>
  //       <Text
  //         style={{
  //           fontSize: SIZES.h4,
  //           marginTop: 10,
  //           textAlign: 'center',
  //           color: COLORS.white,
  //         }}>
  //         {pop.price}₴
  //       </Text>
  //     </View>
  //   </View>)
  // };
  return (
    <View>
      <Text
        style={{fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white}}>
        Popular
      </Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {popular.map((pop, idx) => (
          //  {renderPop(pop,idx)}
          // <popRender{ pop={pop}, idx={idx}/>
          <ProductItem pop={pop} key={idx} />
          // <View
          //   style={{
          //     width: '30%',
          //     marginBottom: 20,
          //   }}
          //   key={idx}>
          //   <View style={{alignItems: 'center'}}>
          //     <Image
          //       source={{uri: pop.image}}
          //       style={{width: 40, height: 40}}
          //     />
          //     <Text
          //       style={{
          //         fontSize: SIZES.h4,
          //         marginTop: 10,
          //         textAlign: 'center',
          //         color: COLORS.white,
          //       }}>
          //       {pop.name}
          //     </Text>
          //     <Text
          //       style={{
          //         fontSize: SIZES.h4,
          //         marginTop: 10,
          //         textAlign: 'center',
          //         color: COLORS.white,
          //       }}>
          //       {pop.price}₴
          //     </Text>
          //   </View>
          // </View>
        ))}
      </View>
    </View>
  );
};

export default Popular;
