import {Alert} from 'react-native';

const getErrorMessage = e => {
  if (e.response && e.response.data) {
    return e.response.error.message;
  }
  return 'Unkown error';
};

const showErrorMessage = e => {
  const errorMessage = getErrorMessage(e);
  Alert.alert('Request Error', errorMessage);
};

export default showErrorMessage;
