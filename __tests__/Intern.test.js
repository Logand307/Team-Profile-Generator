const Intern = require("../lib/Intern");

test("sets school via intern constructor", () => {
  const testValue = "Harvard";
  const empl = new Intern("Logan", 1, "test@test.com", testValue);
  expect(empl.school).toBe(testValue);
});

test("getRole() returns 'Intern'", () => {
  const testValue = "Intern";
  const empl = new Intern("Logan", 1, "test@test.com", "Harvard");
  expect(empl.getRole()).toBe(testValue);
});

test("gets school via getSchool() method", () => {
  const testValue = "Harvard";
  const empl = new Intern("Logan", 1, "test@test.com", testValue);
  expect(empl.getSchool()).toBe(testValue);
});