import {errorAlert} from './services';

export const validateEmailId = (input, errorMessage) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(input)) {
    return true;
  } else {
    // errorAlert(errorMessage);
    return false;
  }
};

export const validatePhoneNumber = (input, errorMessage) => {
  var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  if (re.test(input)) {
    return true;
  } else {
    // errorAlert(errorMessage);
    return false;
  }
};

export const validatePassword = (input, errorMessage) => {
  var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (re.test(input)) {
    return true;
  } else {
    // errorAlert(errorMessage);
    return false;
  }
};

export const validateUserName = (input, errorMessage) => {
    /* 
    Usernames can only have: 
    - Lowercase Letters (a-z) 
    - Numbers (0-9)
    - Dots (.)
    - Underscores (_)
  */
  var re = /^[a-z0-9_\.]+$/;
  if (re.test(input)) {
    return true;
  } else {
    // errorAlert(errorMessage);
    return false;
  }
};