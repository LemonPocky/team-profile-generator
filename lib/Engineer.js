const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {

  }

  getGithub() {

  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;