const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        
    }

    getSchool() {
        return this.school;
      }
      getRole() {
        return "Manager";
      }
    }

module.exports = Manager;