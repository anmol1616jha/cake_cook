import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RedBackground = ({children, customStyle}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={[styles.backgroundStyle, customStyle]}>
      {children}
    </ImageBackground>
  );
};

export default RedBackground;

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});
