const Engineer = require("../lib/Engineer");

test("sets github account via engineer constructor", () => {
    const testValue = "githubUser";
    const empl = new Engineer("Logan", 1, "test@test.com", testValue);
    expect(empl.github).toBe(testValue);
  });
  
  test("getRole() returns 'Employee'", () => {
    const testValue = "Engineer";
    const empl = new Engineer("Logan", 1, "test@test.com", "githubUser");
    expect(empl.getRole()).toBe(testValue);
  });
  
  test("gets hithub username via getGithub() method", () => {
    const testValue = "githubUser";
    const empl = new Engineer("Logan", 1, "test@test.com", testValue);
    expect(empl.getGithub()).toBe(testValue);
  });