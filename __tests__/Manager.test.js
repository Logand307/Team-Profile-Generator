const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("sets office number via manager constructor", () => {
  const testValue = 400;
  const empl = new Manager("Foo", 1, "test@test.com", testValue);
  expect(empl.officeNumber).toBe(testValue);
});

test("getRole() returns 'Manager'", () => {
  const testValue = "Manager";
  const empl = new Manager("Logan", 1, "test@test.com", 400);
  expect(empl.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 400;
  const empl = new Manager("Logan", 1, "test@test.com", testValue);
  expect(empl.getOfficeNumber()).toBe(testValue);
});