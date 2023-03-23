import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RedBackground } from '../../components';
import { ColCenter, commonStyles, ExtraSpace, ValidationText, StyledInput } from '../../theme/CommonStyles'
import { COLORS } from '../../theme';
import { TextButton } from '../../components';
import { TouchableOpacity } from 'react-native';
import { errorAlert, successAlert } from '../../utility/services';
import { ScrollView } from 'react-native';
import { validateEmailId, validatePassword, validatePhoneNumber, validateUserName } from '../../utility/validate';

const SignupScreen = ({ route, navigation }) => {
  const [form, setForm] = React.useState({
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [errorLog, setErrorLog] = React.useState([])

  const validateIfInputIsEmpty = () =>
    Object.values(form).includes(null) ||
    Object.values(form).includes('');

  const validateIfValuesCorrect = () => {
    let errors = []
    if (!validateUserName(form.userName, 'Invalid User Name')) {
      errors.push('userName')
    } 
    if (!validateEmailId(form.email, 'Invalid Email ID')) {
      errors.push('email')
    } 
    if (!validatePhoneNumber(form.phoneNumber, 'Invalid Phone Number')) {
      errors.push('phoneNumber')
    } 
    if (!validatePassword(form.password, 'Invalid Password')) {
      errors.push('password')
    }
    if (form.password !== form.confirmPassword) {
      errors.push('confirmPassword')
    } 
    setErrorLog(errors)
    return errors.length
  };

  const submitHandler = async () => {
    if (validateIfInputIsEmpty()) {
      errorAlert('Please fill all mandatory fields !');
      return;
    }
    let errorLength = validateIfValuesCorrect()

    if (errorLength === 0) {
      try {
        await AsyncStorage.setItem(form.userName.toString(), JSON.stringify(form));
        successAlert('Sign Up Successful')
        navigation.navigate('LoginScreen')
      } catch (error) {
        errorAlert('Something Went Wrong ')
        console.log(JSON.stringify(error));
      }
    }
  }

  return (
    <RedBackground customStyle={styles.mainContainer}>
      <ScrollView style={{ width: '100%', marginTop: '10%' }}>
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
          {errorLog.includes('userName') && <ValidationText>Lowercase Dots(.) Underscore(_) only allowed </ValidationText>}

          <StyledInput
            placeholderTextColor={COLORS.gray80}
            placeholder="Email ID"
            value={form.email}
            onChangeText={text =>
              setForm({ ...form, email: text })
            }
          />
          {errorLog.includes('email') && <ValidationText>Enter Proper Email ID</ValidationText>}

          <StyledInput
            placeholderTextColor={COLORS.gray80}
            placeholder="Phone No."
            value={form.phoneNumber}
            onChangeText={text =>
              setForm({ ...form, phoneNumber: text })
            }
            keyboardType={'numeric'}
          />
          {errorLog.includes('phoneNumber') && <ValidationText>Enter valid 10 digits Phone Number</ValidationText>}

          <StyledInput
            placeholderTextColor={COLORS.gray80}
            placeholder="Password"
            value={form.password}
            onChangeText={text =>
              setForm({ ...form, password: text })
            }
          />
          {errorLog.includes('password') && <ValidationText>Password must be 6 digits containing at least 1 capital letter, 1 number and 1 special character</ValidationText>}

          <StyledInput
            placeholderTextColor={COLORS.gray80}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChangeText={text =>
              setForm({ ...form, confirmPassword: text })
            }
          />
          {errorLog.includes('confirmPassword') && <ValidationText>Confirm Password should match Password</ValidationText>}

          <ExtraSpace />

          <TextButton
            onPress={() => submitHandler()}
            titleStyling={commonStyles.buttonTextStyles}
            extraStylings={commonStyles.buttonExtraStyles}
            title={'Sign Up'}
          />

          <ExtraSpace />

          <ColCenter>
            <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}>
              <Text style={styles.signupText}>Already Have Account? Login</Text>
            </TouchableOpacity>
          </ColCenter>
        </View>
      </ScrollView>
    </RedBackground>
  );
};

export default SignupScreen;

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
