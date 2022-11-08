import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const ProductDetail = ({route, navigation}) => {
  console.log('💩: ProductDetail -> route', route?.params);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{ fontSize: 24 }}>Product Detail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
