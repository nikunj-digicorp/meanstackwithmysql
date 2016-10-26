var common = require('../common');
var constant = require('../constant');
var query = require('./user.query');
var dbDateFormat = constant.appConfig.DB_DATE_FORMAT;

var checkUserIsExist = function(password, email, cb) {  
  var checkUserIsExistQuery = common.cloneObject(query.checkUserIsExistQuery);  
  checkUserIsExistQuery.filter.and[0].value = email;
  common.executeQuery(checkUserIsExistQuery, cb);
};

var validateUser = function(userId, password, cb) {  
  var validateUserQuery = common.cloneObject(query.validateUserQuery);
  validateUserQuery.filter.and[0].value = userId;
  validateUserQuery.filter.and[1].value = password;
  common.executeQuery(validateUserQuery, cb);
};

var createUser = function(password, email, cb) {  
  var createUserQuery = common.cloneObject(query.createUserQuery);
  createUserQuery.insert.fValue = [email, password];
  common.executeQuery(createUserQuery, cb);
};

var userLogin = function(email, password, cb) {  
  var getUserInfoQuery = common.cloneObject(query.getUserInfoQuery);  
  getUserInfoQuery.filter.and[0].value = email;
  getUserInfoQuery.filter.and[1].value = password;
  common.executeQuery(getUserInfoQuery, cb);
};

module.exports = {
  checkUserIsExist: checkUserIsExist,
  createUser: createUser,
  validateUser: validateUser,
  userLogin: userLogin
};
