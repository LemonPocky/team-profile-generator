// Intern class that keeps track of an intern and their school
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Calls parent class constructor
    super(name, id, email);

    // Validiation of github parameter
    // Required and must be valid inputs
    if (typeof school !== "string" || !school.trim().length) {
      throw new TypeError(
        "Expected parameter 'school' to be a non-empty string"
      );
    }

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;