import mysql from "mysql";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "FindMeChallenge",
});

export default db;