const connection = require("../../config/database");

module.exports = {
  //data form the controller and create is a method
  create: (data, callback) => {
    //callback : function that wil have error as the
    // first para and if sucess mesg the 1st same and data as the second parameter

    const values = [
      data.firstname,
      data.lastname,
      data.gender,
      data.email,
      data.password,
      data.contact,
    ];

    connection.query(
      `INSERT INTO regestation (firstname,lastname,gender,email,password,contact)VALUES (?,?,?,?,?,?)`,
      values,
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
