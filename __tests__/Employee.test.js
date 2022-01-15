const Employee = require("../lib/Employee");

//test cases below for Employee.js

test("Instantiates Employee instance", () => {
  const empl = new Employee();
  expect(typeof(empl)).toBe("object");
});

test("Sets name via employee constructor arguments", () => {
  const name = "Logan";
  const empl = new Employee(name);
  expect(empl.name).toBe(name);
});

test("Sets Id via employee constructor argument", () => {
  const testValue = 400;
  const empl = new Employee("Logan", testValue);
  expect(empl.id).toBe(testValue);
});

test("Sets email via employee constructor argument", () => {
  const testValue = "test@test.com";
  const empl = new Employee("Logan", 1, testValue);
  expect(empl.email).toBe(testValue);
});

test("Gets name via getName() method", () => {
  const testValue = "Logan";
  const empl = new Employee(testValue);
  expect(empl.getName()).toBe(testValue);
});

test("Gets Id via getId() method", () => {
  const testValue = 400;
  const empl = new Employee("Logan", testValue);
  expect(empl.getId()).toBe(testValue);
});

test("Gets email via getEmail() method", () => {
  const testValue = "test@test.com";
  const empl = new Employee("Logan", 1, testValue);
  expect(empl.getEmail()).toBe(testValue);
});

test("getRole() returns 'Employee'", () => {
  const testValue = "Employee";
  const empl = new Employee("Logan", 1, "test@test.com");
  expect(empl.getRole()).toBe(testValue);
});