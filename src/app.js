// Main controller for the CLI tool

// Use inquirer for command line prompts
const inquirer = require("inquirer");

const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const HtmlGenerator = require("./HtmlGenerator.js");

class App {
  constructor() {
    // Holds the list of employees to be generated
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

    await this.addMenu();
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
  }

  async addMenu() {
    try {
      console.log('Current number of employees: ' + this.employees.length);
      const answers = await inquirer
        .prompt([
          {
            type: "list",
            name: "next",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "I'm done adding employees."],
          }
        ]);
      switch(answers.next){
        case "Engineer":
          await this.addEngineer();
          break;
        case "Intern":
          await this.addIntern();
          break;
        default:
          await this.finish();
      }
    } catch(error) {
      console.log("Error! " + error);
      console.log("Please try again.");
      return this.addMenu();
    }
  }

  async addEngineer() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the Engineer name:",
      },
      {
        type: "number",
        name: "id",
        message: "Please enter the Engineer id:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the Engineer email:",
      },
      {
        type: "intput",
        name: "github",
        message: "Please enter the Engineer github username:",
      },
    ]);
    this.employees.push(
      new Engineer(answers.name, answers.id, answers.email, answers.github)
    );
    await this.addMenu();
  }

  async addIntern() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the Intern name:",
      },
      {
        type: "number",
        name: "id",
        message: "Please enter the Intern id:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the Intern email:",
      },
      {
        type: "intput",
        name: "school",
        message: "Please enter the Intern school:",
      },
    ]);
    this.employees.push(
      new Intern(answers.name, answers.id, answers.email, answers.school)
    );
    await this.addMenu();
  }

  async finish() {
    const pageGenerator = new HtmlGenerator();
    try {
      await pageGenerator.generateHtml(this.employees);
    } catch(error) {
      console.log('Error writing HTML to file: ' + error);
    }
  }
}

module.exports = App;