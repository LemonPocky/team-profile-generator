const { test, expect, describe } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("constructor", () => {
    test("Initializes Employee object with properties", () => {
      const name = "Zelda";
      const id = 3;
      const email = "zelda@hyrule.com";
      const newEmployee = new Employee(name, id, email);
      expect(newEmployee.name).toEqual(name);
      expect(newEmployee.id).toEqual(id);
      expect(newEmployee.email).toEqual(email);
    });

    test("Employee constructor fails with no arguments", () => {
      const newEmployee = () => new Employee();
      expect(newEmployee).toThrowError(TypeError);
    })
  });
  describe("getters", () => {
    test("getName returns name", () => {
      const name = "Zelda";
      const id = 3;
      const email = "zelda@hyrule.com";
      const newEmployee = new Employee(name, id, email);
      expect(newEmployee.getName()).toEqual(name);
    });
    test("getId returns id", () => {
      const name = "Zelda";
      const id = 3;
      const email = "zelda@hyrule.com";
      const newEmployee = new Employee(name, id, email);
      expect(newEmployee.getId()).toEqual(id);
    });
    test("getEmail returns email", () => {
      const name = "Zelda";
      const id = 3;
      const email = "zelda@hyrule.com";
      const newEmployee = new Employee(name, id, email);
      expect(newEmployee.getEmail()).toEqual(email);
    });
    test("getRole returns 'Employee'", () => {
      const name = "Zelda";
      const id = 3;
      const email = "zelda@hyrule.com";
      const newEmployee = new Employee(name, id, email);
      expect(newEmployee.getRole()).toEqual("Employee");
    })
  });
});