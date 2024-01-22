// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const employee = new employee('Manager', id, email, officeNumber);
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return'Manager' //This is my output, make it look nice
    }
}

module.exports = Manager