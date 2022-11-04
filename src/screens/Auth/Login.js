import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Image source={require('../../asset/img/Logo.png')} />
      <Text
        style={styles.button}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
        }}
      >
        GO
      </Text>
      {/* <Button
        title="GO"
        color={"#38424F"}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}
      /> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: "#38424F",
    padding: 30,
    fontSize: 40,
    fontWeight: "800",
    borderRadius: 100,
    marginTop: 100,
  }
});
