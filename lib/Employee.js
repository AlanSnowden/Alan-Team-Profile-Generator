// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name //come back to this
    }

    getId() {
        console.log(`${this.id}`)
    }

    getEmail() {
        console.log(`${this.email}`)
    }

    getRole() {
        console.log(`${this.class}`)
    }
}

module.exports = Employee