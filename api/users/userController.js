const { genSaltSync, hashSync } = require("bcryptjs");
const { create } = require("./userService");

module.exports = {
  createUser: (req, res) => {
    console.log(req.body);
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database conection error",
          response: err,
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  //another method to check
  showuser: (req, res) => {
    res.json({
      success: 1,
      message: "This is rest apis is working in the sameway",
    });
  },
};
