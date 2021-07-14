// Class that generates an employee profile html page

// Required for file system writing
const fs = require('fs/promises');

class HtmlGenerator {
  constructor() {}

  buildManagerCard(employee) {
    return `
    <div class="col my-5">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h1>${employee.getName()}</h1>
          <h2>${employee.getRole()}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }

  buildEngineerCard(employee) {
    const githubLink = `https://github.com/${employee.getGithub()}`;
    return `
    <div class="col my-5">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h1>${employee.getName()}</h1>
          <h2>${employee.getRole()}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">
              Github: <a href="${githubLink}" target="_blank">${employee.getGithub()}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }

  buildInternCard(employee) {
    return `
    <div class="col my-5">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h1>${employee.getName()}</h1>
          <h2>${employee.getRole()}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${employee.getSchool()}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }

  renderHtml(renderedCards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Bootstrap 4.6 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Profiles</title>
</head>
<body>
  <div class="jumbotron bg-primary">
    <h1 class="display-4 text-center text-white">My Team</h1>
  </div>

  <div class="row row-cols-3 justify-content-center mx-auto" style="width: 80%">
    ${renderedCards}
  </div>
</body>
</html>
    `;
  }

  buildCards(employees) {
    return employees
      .map((employee) => {
        switch (employee.getRole()) {
          case "Manager":
            return this.buildManagerCard(employee);
          case "Engineer":
            return this.buildEngineerCard(employee);
          case "Intern":
            return this.buildInternCard(employee);
          default:
            return "";
        }
      })
      .join("");
  }

  async generateHtml(employees) {
    const renderedCards = this.buildCards(employees);
    const html = this.renderHtml(renderedCards);
    const filepath = "./dist/index.html"
    await fs.writeFile(filepath, html);    
    console.log("Profile HTML page generated at: " + filepath);
  }
}

module.exports = HtmlGenerator;