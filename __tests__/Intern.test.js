const { test, expect, describe } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("constructor", () => {
    test("Initializes Intern object with properties", () => {
      const name = "Tetra";
      const id = 11;
      const email = "tetra@hyrule.com";
      const school = "School of Pirating";
      const newIntern = new Intern(name, id, email, school);
      expect(newIntern.name).toEqual(name);
      expect(newIntern.id).toEqual(id);
      expect(newIntern.email).toEqual(email);
      expect(newIntern.school).toEqual(school);
    });

    test("Intern constructor fails with no arguments", () => {
      const newIntern = () => new Intern();
      expect(newIntern).toThrowError(TypeError);
    });
  });
  describe("getters", () => {
    test("getSchool returns school name", () => {
      const name = "Tetra";
      const id = 11;
      const email = "tetra@hyrule.com";
      const school = "School of Pirating";
      const newIntern = new Intern(name, id, email, school);
      expect(newIntern.getSchool()).toEqual(school);
    });
    test("getRole returns Intern", () => {
      const name = "Tetra";
      const id = 11;
      const email = "tetra@hyrule.com";
      const school = "School of Pirating";
      const newIntern = new Intern(name, id, email, school);
      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
