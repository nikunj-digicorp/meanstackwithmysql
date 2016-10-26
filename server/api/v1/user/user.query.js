var tbl_UserMaster = "tbl_UserMaster";

var query = {
  /* check user is exist query start */
  checkUserIsExistQuery: {
    table: tbl_UserMaster,
    select: [{
      field: 'pk_userId',
      alias: 'user_id'
    }, {
      field: 'IFNULL(name,"")',
      encloseField: false,
      alias: 'name'
    }, {
      field: 'password',
      alias: 'password'
    }, {
      field: 'email',
      alias: 'email'
    }, {
      field: 'isActive',
      alias: 'is_active'
    }],
    filter: {
      and: [{
        field: 'email',
        operator: 'EQ',
        value: ''
      }]
    }
  }, // check user is exist query end
  validateUserQuery: {
    table: tbl_UserMaster,
    select: [{
      field: 'pk_userID',
      aggregation: 'count',
      alias: 'totalCount'
    }],
    filter: {
      and: [{
        field: 'pk_userID',
        operator: 'EQ',
        value: ''
      }, {
        field: 'password',
        operator: 'EQ',
        value: ''
      }]
    }
  },
  /* create user query start */
  createUserQuery: {
    table: tbl_UserMaster,
    insert: {
      field: ["email", "password"],
      fValue: []
    }
  },
  getUserInfoQuery: {
    table: tbl_UserMaster,
    select: [{
      field: 'pk_userId',
      alias: 'user_id'
    }, {
      field: 'countryCode',
      alias: 'country_code'
    }, {
      field: 'mobile',
      alias: 'mobile'
    }, {
      field: 'name',
      encloseField: false,
      alias: 'name'
    }, {
      field: 'email',
      encloseField: false,
      alias: 'email'
    }],
    filter: {
      and: [{
        field: 'email',
        operator: 'EQ',
        value: ''
      }, {
        field: 'password',
        operator: 'EQ',
        value: ''
      }, {
        field: 'isActive',
        operator: 'EQ',
        value: 1
      }]
    }
  }
};


module.exports = query;
