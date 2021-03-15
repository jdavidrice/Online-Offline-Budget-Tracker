/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const total = require("../public/index.js");

test("Can reduce transaction amounts to a single total value", () => {
  let total = 1;
  let t = 2;
  expect(populateTotal(total + t)).toBe(3);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("Can set name via constructor arguments", () => {
//   const name = "Alice";
//   const e = new Employee(name);
//   expect(e.name).toBe(name);
// });

// test("Can set id via constructor argument", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.id).toBe(testValue);
// });

// test("Can set email via constructor argument", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.email).toBe(testValue);
// });

// test("Can get name via getName()", () => {
//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   expect(e.getName()).toBe(testValue);
// });

// test("Can get id via getId()", () => {
//   const testValue = 100;
//   const e = new Employee("Foo", testValue);
//   expect(e.getId()).toBe(testValue);
// });

// test("Can get email via getEmail()", () => {
//   const testValue = "test@test.com";
//   const e = new Employee("Foo", 1, testValue);
//   expect(e.getEmail()).toBe(testValue);
// });

// test("getRole() should return \"Employee\"", () => {
//   const testValue = "Employee";
//   const e = new Employee("Alice", 1, "test@test.com");
//   expect(e.getRole()).toBe(testValue);
// });
