function OrderModel(
    id,
    date,
    customerId,
    description,
    employeeId
) {
    this.id = id;
    this.date = date;
    this.customerId = customerId;
    this.description = description;
    this.employeeId = employeeId;
}

module.exports = OrderModel;