import CreateCustomerService from "../../services/customer/CreateCustomerService";
import ListCustomerService from "../../services/customer/ListCustomerService";
import UpdateCustomerService from "../../services/customer/UpdateCustomerService";
import DeleteCustomerService from "../../services/customer/DeleteCustomerService";

const customerController = {
  readAll: (req, res) => {
    db.query("SELECT * FROM customers", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },

  readId: (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM customers WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },

  create: (req, res) => {
    const name = req.body.name;

    db.query(
      "INSERT INTO customers (name) VALUES (?)",
      [name, age, country, position, wage],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("create successful");
        }
      }
    );
  },

  update: (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

    db.query(
      "UPDATE customers SET name = ? WHERE id = ?",
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  },

  delete: (req, res) => {
    const id = req.params.id;
    
    db.query("DELETE FROM customers WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  },
};

export default customerController;