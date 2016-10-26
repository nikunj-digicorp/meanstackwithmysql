var userService = require('./user.service');
var constant = require('../constant');


/**
 * Created By: NP
 * Updated By: NP
 *
 * Creating New User
 *
 * @param  {object} request
 * @param  {object} response
 * @return {object}
 */
var signup = function(request, response) {
  if (request.body !== undefined && typeof request.body === "object") {
    userService.signupService(request, function(result) {
      return response.send(result);
    });
  } else {
    return response.send({
      status: false,
      error: constant.requestMessages.ERR_INVALID_SIGNUP_REQUEST
    });
  }
};

/**
 * Created By: NP
 * Updated By: NP
 *
 * User Signin
 *
 * @param  {object} request
 * @param  {object} response
 * @return {object}
 */
var signin = function(request, response) {  
  if (request.body !== undefined && typeof request.body === "object") {
    userService.signinService(request, function(result) {
      if (result.status === true) {
        // var session = request.session;
        // session.userInfo = {
        //   userId: result.data.user_id,
        //   name: result.data.name,
        //   mobile: result.data.mobile
        // };
      }
      return response.send(result);
    });
  } else {
    return response.send({
      status: false,
      error: constant.requestMessages.ERR_INVALID_SIGNIN_REQUEST
    });
  }
};

module.exports = {
  signup: signup,
  signin: signin  
};
