// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const employee = new employee() 

class Engineer extends employee {
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