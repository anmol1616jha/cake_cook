import Toast from 'react-native-toast-message';

export const alertMessage = (msg, type) => {
  Toast.show({
    type: type,
    text1: msg
  });
}

export const successAlert = (msg) => {
  alertMessage(msg, 'success')
}

export const errorAlert = (msg) => {
  alertMessage(msg, 'error')
}

export const warningAlert = (msg) => {
  alertMessage(msg, 'warning')
}