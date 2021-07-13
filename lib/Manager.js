// Manager class that keeps track of managers and their office number
const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Calls parent class constructor
    super(name, id, email);

    // Validiation of parameter
    // Required and must be valid inputs
    if (
      typeof officeNumber !== "number" ||
      isNaN(officeNumber) ||
      officeNumber < 0
    ) {
      throw new TypeError(
        "Expected parameter 'officeNumber' to be a non-negative number"
      );
    }
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;