var randomstring = require("randomstring");
var common = require('../common');
var constant = require('../constant');
var userDAL = require('./user.DAL');
var dbDateFormat = constant.appConfig.DB_DATE_FORMAT;

/**
 * Created By: AV
 * Updated By: AV
 *
 * signup service
 * @param  {object}   request
 * @param  {Function} cb
 * @return {object}
   IF Check User is Exist (id,mobile,country_code,is_active,is_verify)
    IF is_active is false
      - user is not active messgae
    ELSE IF is_verify is true
      - user is already exist
    ELSE
      - Generate OTP
      - Save Into OTP table
      - Send OTP
   ELSE
    - Insert User Info
    - Generate OTP
    - Save Into OTP table
    - Send OTP
 */
var signupService = function (request, cb) {
    if (request.body.email === undefined || request.body.password === undefined) {
        cb({
            status: false,
            error: constant.requestMessages.ERR_INVALID_SIGNUP_REQUEST
        });
        return;
    }
    var email = request.body.email;
    var password = request.body.password;
    userDAL.checkUserIsExist(password, email, function (result) {
        if (result.status === false) {
            cb(result);
            return;
        } else if (result.content.length > 0) {
            var userInfo = result.content[0];
            // check user is active or not
            if (userInfo.is_active == false) {
                cb({
                    status: false,
                    error: constant.userMessages.ERR_USER_IS_NOT_ACTIVE
                });
                // check user is verify or not
            }
            else if (userInfo.is_verify == true) {
                cb({
                    status: false,
                    error: constant.userMessages.ERR_USER_IS_ALREADY_EXIST
                });
            } else {
                cb({
                    status: false,
                    error: constant.userMessages.ERR_USER_IS_ALREADY_EXIST
                });
            }
            return;
        }

        // save user info and save & send otp
        userDAL.createUser(password, email, function (result) {
            if (result.status === false) {
                cb(result);
            } else {
                cb(result);
            }
        }); // END createUser
    }); // END checkUserIsExist
};

var signinService = function (request, cb) {
    if (request.body.email === undefined || request.body.password === undefined) {
        cb({
            status: false,
            error: constant.requestMessages.ERR_INVALID_SIGNIN_REQUEST
        });
        return;
    }
    var email = request.body.email;
    var password = request.body.password;
    userDAL.userLogin(email, password, function (result) {
        if (result.status === false) {
            cb(result);
        } else if (result.content.length === 0) {
            cb({
                status: false,
                error: constant.userMessages.ERR_INVALID_EMAIL_AND_PASSWORD
            });
        } else {
            var userInfo = result.content[0];
            var userId = userInfo.user_id;
            cb(result);
        }
    }); // userLogin end
};

module.exports = {
    signinService: signinService,
    signupService: signupService
};
