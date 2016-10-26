var applicationConfiguration = {
  "PAGE_SIZE": 10, //
  "API_START_PATH": '/api/',
  "API_VERSION": 'v1',
  "DB_DATE_FORMAT": '%Y-%m-%d %H:%M:%S',
};

var requestMessages = {
  'ERR_API_KEY_NOT_FOUND': {
    code: 2001,
    message: 'api-key not found'
  },
  'ERR_INVALID_API_KEY': {
    code: 2002,
    message: 'Invalid api-key'
  },
  'ERR_INVALID_SIGNUP_REQUEST': {
    code: 2005,
    message: 'Invalid signup request'
  },
  'ERR_INVALID_SIGNIN_REQUEST': {
    code: 2009,
    message: 'Invalid signin request'
  },
  'ERR_INVALID_EMAIL_AND_PASSWORD': {
    code: 17008,
    message: 'Please enter valid email and password.'
  }
};

var userMessages = {
  'ERR_USER_IS_ALREADY_EXIST': {
    code: 17001,
    message: 'User is already exist.'
  },
  'ERR_USER_IS_ALREADY_EXIST_NOT_VARIFIED': {
    code: 17001,
    message: 'User is already exist, but not varified.'
  }
};

module.exports = {
  appConfig: applicationConfiguration,
  requestMessages: requestMessages,
  userMessages: userMessages
};
