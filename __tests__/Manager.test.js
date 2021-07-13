const { test, expect, describe } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("constructor", () => {
    test("Initializes Manager object with properties", () => {
      const name = "Navi";
      const id = 2;
      const email = "navi@hyrule.com";
      const officeNumber = 4;
      const newManager = new Manager(name, id, email, officeNumber);
      expect(newManager.name).toEqual(name);
      expect(newManager.id).toEqual(id);
      expect(newManager.email).toEqual(email);
      expect(newManager.officeNumber).toEqual(officeNumber);
    });

    test("Manager constructor fails with no arguments", () => {
      const newManager = () => new Manager();
      expect(newManager).toThrowError(TypeError);
    });
  });
  describe("getters", () => {
    test("getOfficeNumber returns office number", () => {
      const name = "Navi";
      const id = 2;
      const email = "navi@hyrule.com";
      const officeNumber = 4;
      const newManager = new Manager(name, id, email, officeNumber);
      expect(newManager.getOfficeNumber()).toEqual(officeNumber);
    });
    test("getRole returns manager", () => {
      const name = "Navi";
      const id = 2;
      const email = "navi@hyrule.com";
      const officeNumber = 4;
      const newManager = new Manager(name, id, email, officeNumber);
      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
