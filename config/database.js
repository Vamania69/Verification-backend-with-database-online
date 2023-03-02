const dotenv = require("dotenv");
dotenv.config();
const { createConnection } = require("mysql");
//making the database details with the fuction createconne that as info about the connection
const connection = createConnection({
  port: 3306,
  host: "sql12.freesqldatabase.com",
  user: "sql12601667",
  password: "p3JxG1vRpJ",
  database: "sql12601667",
  connectionLimit: 10,
});

//running to establish the connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err.stack);
    return;
  }

  console.log("Connected to database with id: ", connection.threadId);
});
// console.log(connection.connect());

//exporting as default connection so that it can be used at any level
module.exports = connection;
