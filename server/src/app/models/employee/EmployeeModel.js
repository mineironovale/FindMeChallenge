function EmployeeModel(
    id,
    name,
    email,
    password
) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
}

module.exports = EmployeeModel;