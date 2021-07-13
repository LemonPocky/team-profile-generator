const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {}

  getSchool() {}

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;