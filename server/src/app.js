import express from "express";
import routes from "./routes";
import mysql from "mysql";

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "FindMeChallenge"
})

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;