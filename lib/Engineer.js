// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const employee = new employee() 
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        console.log(`${this.github}`)
    }

    getRole() {
        console.log(`${this.class}`)
    }
}

module.exports = Engineer