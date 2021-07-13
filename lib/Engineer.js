// Engineer class that keeps track of engineers and their github username
const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Calls parent class constructor
    super(name, id, email);

    // Validiation of github parameter
    // Required and must be valid inputs
    if (typeof github !== "string" || !github.trim().length) {
      throw new TypeError(
        "Expected parameter 'github' to be a non-empty string"
      );
    }
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
