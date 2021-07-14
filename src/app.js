// Use inquirer for command line prompts
const inquirer = require("inquirer");

const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

class App {
  constructor() {
    this.employees = [];
  }

  run() {
    return this.addManager()
      .then((resolve) => console.log('Done.'))
      .catch((error) => {
        console.log('Error! ' + error)
        return this.run();
      });
  }

  addManager() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter the Manager name:",
        },
        {
          type: "number",
          name: "id",
          message: "Please enter the Manager id:",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the Manager email:",
        },
        {
          type: "number",
          name: "office_number",
          message: "Please enter the Manager office number:",
        },
      ])
      .then((answers) => {
        this.employees.push(
          new Manager(answers.name, answers.id, answers.email, answers.office_number)
        );
        console.log(this.employees);
      });
  }

  addMenu() {}

  addEngineer() {}

  addIntern() {}

  finish() {}
}

module.exports = App;