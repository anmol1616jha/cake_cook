import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { RedBackground } from '../../components';
import { COLORS } from '../../theme';
import { ScrollView } from 'react-native';

const WelcomeScreen = ({ route, navigation }) => {

  return (
    <RedBackground customStyle={styles.mainContainer}>
      <ScrollView style={{ width: '100%', marginTop: '20%' }}>
        <View style={{ marginLeft: '10%' }}>
          <Image style={{ width: 100, height: 60, borderRadius: 55 }} source={require('../../../assets/images/logo.jpg')} />
          <Text style={styles.userText}>Cake Cook</Text>
        </View>

        <View style={{
          width: '100%',
          marginTop: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={styles.userText}>Welcome..!!</Text>
        </View>
      </ScrollView>
    </RedBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: { justifyContent: 'center', alignItems: 'center' },
  userText: {
    fontWeight: '700',
    fontSize: 30,
    marginHorizontal: 15,
    color: COLORS.gray70,
  },
  signupText: {
    fontWeight: '500',
    fontSize: 15,
    marginVertical: 10,
    color: COLORS.black,
  }
});
