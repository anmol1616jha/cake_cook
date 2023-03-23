import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RedBackground } from '../../components';
import { ColCenter, commonStyles, ExtraSpace, ValidationText, StyledInput } from '../../theme/CommonStyles'
import { COLORS } from '../../theme';
import { TextButton } from '../../components';
import { TouchableOpacity } from 'react-native';
import { errorAlert, successAlert, warningAlert } from '../../utility/services';
import { ScrollView } from 'react-native';

const LoginScreen = ({route, navigation}) => {
  const [form, setForm] = React.useState({
    userName: '',
    password: ''
  });

  const validateIfInputIsEmpty = () =>
  Object.values(form).includes(null) ||
  Object.values(form).includes('');

  const submitHandler = async () => {
    if (validateIfInputIsEmpty()) {
      errorAlert('Please fill all mandatory fields !');
      return;
    }

    try {
      let data = await AsyncStorage.getItem(form.userName.toString());
      if (JSON.parse(data) == null) {
        warningAlert('User Name Not Found')
      } else {
        if (JSON.parse(data).password == form.password) {
          successAlert('Login Successful')
          navigation.navigate('WelcomeScreen')
        } else{
          errorAlert('Wrong Password')
        }
      }
    } catch (error) {
      errorAlert('Something Went Wrong ')
      console.log(JSON.stringify(error));
    }
  }

  return (
    <RedBackground customStyle={styles.mainContainer}>
    <ScrollView style={{ width: '100%', marginTop: '20%' }}>
      <View style={{ marginLeft: '10%' }}>
        <Image style={{ width: 100, height: 60, borderRadius: 55 }} source={require('../../../assets/images/logo.jpg')} />
        <Text style={styles.userText}>Cake Cook</Text>
      </View>

      <View style={{
        width: '80%',
        alignSelf: 'center',
      }}>
        <StyledInput
          placeholderTextColor={COLORS.gray80}
          placeholder="User Name"
          value={form.userName}
          onChangeText={text =>
            setForm({ ...form, userName: text })
          }
        />
        
        <StyledInput
          placeholderTextColor={COLORS.gray80}
          placeholder="Password"
          value={form.password}
          onChangeText={text =>
            setForm({ ...form, password: text })
          }
        />

        <ExtraSpace />

        <TextButton
          onPress={() => submitHandler()}
          titleStyling={commonStyles.buttonTextStyles}
          extraStylings={commonStyles.buttonExtraStyles}
          title={'Login'}
        />

        <ExtraSpace />

        <ColCenter>
          <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen') }}>
            <Text style={styles.signupText}>New User? Sign Up</Text>
          </TouchableOpacity>
        </ColCenter>
      </View>
    </ScrollView>
  </RedBackground>
  );
};

export default LoginScreen;

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
