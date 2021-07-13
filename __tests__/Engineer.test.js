const { test, expect, describe } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("constructor", () => {
    test("Initializes Engineer object with properties", () => {
      const name = "Link";
      const id = 10;
      const email = "link@hyrule.com";
      const github = "ocarina-of-time";
      const newEngineer = new Engineer(name, id, email, github);
      expect(newEngineer.name).toEqual(name);
      expect(newEngineer.id).toEqual(id);
      expect(newEngineer.email).toEqual(email);
      expect(newEngineer.github).toEqual(github);
    });

    test("Engineer constructor fails with no arguments", () => {
      const newEngineer = () => new Engineer();
      expect(newEngineer).toThrowError(TypeError);
    });
  });
  describe("getters", () => {
    test("getGithub returns github username", () => {
      const name = "Link";
      const id = 10;
      const email = "link@hyrule.com";
      const github = "ocarina-of-time";
      const newEngineer = new Engineer(name, id, email, github);
      expect(newEngineer.getGithub()).toEqual(github);
    });
    test("getRole returns Engineer", () => {
      const name = "Link";
      const id = 10;
      const email = "link@hyrule.com";
      const github = "ocarina-of-time";
      const newEngineer = new Engineer(name, id, email, github);
      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
