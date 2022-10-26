// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.

const Employee = require('../lib/Employee');
const egName = "Bob";
const egId = 1;
const egEmail = "BobTheBuilder@example.com";

describe("Employee class", () => {
    // Initialization
    describe("Initialization", () => {
        // Positive test
        it("Properties of the employee are set on initialization", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.name).toEqual(egName);
            expect(obj.id).toEqual(egId);
            expect(obj.email).toEqual(egEmail);
        })
    })

    // Methods
    describe("Methods", () => {
        it("getName method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getName()).toBe(egName);
        })

        it("getId method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getId()).toBe(egId);
        })

        it("getEmail method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getEmail()).toBe(egEmail);
        })

        it("getRole method returns the name of employee", () => {
            const obj = new Employee(egName, egId, egEmail);

            expect(obj.getRole()).toBe("Employee");
        })
    })
})