// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const employee = new employee('Manager', id, email, officeNumber);

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole () {
        console.log(`${this.class}`)
    }
}