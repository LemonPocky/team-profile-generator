// Base employee class that keeps track of employees' name, id, email

class Employee {
  constructor(name, id, email) {
    // Validiation of parameters
    // All three are required and must be valid inputs
    if (typeof name !== "string" || !name.trim().length) {
      throw new TypeError("Expected parameter 'name' to be a non-empty string");
    } 

    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new TypeError("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new TypeError("Expected parameter 'email' to be a non-empty string");
    } 
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;