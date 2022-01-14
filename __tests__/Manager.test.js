// name

// id

// email



// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// //sep

// officeNumber

// getRole() // Overridden to return 'Manager'

const Manager = require('../index.js');

test("collects team manager's name", () => {
    const manager = new Manager();
  
    expect(manager.name).toEqual(expect.any(String));
});