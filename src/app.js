// Use inquirer for command line prompts
const inquirer = require("inquirer");

const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

class App {
  constructor() {
    this.employees = [];
  }

  async run() {
    try {
      await this.addManager();
    } catch(error) {
      console.log('Error! ' + error);
      console.log('Please try again.');
      return this.run();
    }

    try {
      await this.addMenu();
      console.log('Done');
    } catch(error) {
      console.log("Error! " + error);
      console.log("Please try again.");
      return this.addMenu();
    }
  }

  async addManager() {
    const answers = await inquirer
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
      ]);
    this.employees.push(
      new Manager(answers.name, answers.id, answers.email, answers.office_number)
    );
    console.log(this.employees);
  }

  async addMenu() {
    
  }

  addEngineer() {}

  addIntern() {}

  finish() {}
}

module.exports = App;